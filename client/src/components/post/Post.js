import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPost } from '../../actions/postActions';

import Spinner from '../common/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

class Post extends Component {
  componentDidMount = () => {
    this.props.getPost(this.props.match.params.id);
  };

  renderPost = () => {
    const { post, loading } = this.props.post;
    if (post === null || loading || Object.keys(post).length === 0)
      return <Spinner />;

    // if we have a post
    return (
      <div>
        <PostItem post={post} showActions={false} />
      </div>
    );
  };

  render() {
    const { post } = this.props.post;
    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back to Feed
              </Link>
              {this.renderPost()}
              {post._id && <CommentForm postId={post._id} />}
              {post._id && (
                <CommentFeed postId={post._id} comments={post.comments} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired
};

const mapStateToProps = ({ post }) => ({ post });

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
