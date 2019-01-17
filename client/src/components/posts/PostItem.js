import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
  onDelete = postId => this.props.deletePost(postId);

  onLike = postId => {
    this.props.addLike(postId);
  };

  onDislike = postId => this.props.removeLike(postId);

  checkLike = likes =>
    likes.some(like => like.user === this.props.auth.user.id);

  render() {
    const { post, auth } = this.props;
    return (
      <div className="card card-body mb-3">
        {console.log(this.checkLike(post.likes))}
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text}</p>
            <button
              type="button"
              className="btn btn-light mr-1"
              onClick={() => this.onLike(post._id)}
            >
              <i
                className={classnames('fas fa-thumbs-up', {
                  'text-info': this.checkLike(post.likes)
                })}
              />
              <span className="badge badge-light">{post.likes.length}</span>
            </button>
            <button
              type="button"
              className="btn btn-light mr-1"
              onClick={() => this.onDislike(post._id)}
            >
              <i className="text-secondary fas fa-thumbs-down" />
            </button>
            <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
              Comments
            </Link>
            {post.user === auth.user.id && (
              <button
                type="button"
                className="btn btn-danger mr-1"
                onClick={() => this.onDelete(post._id)}
              >
                <i className="fas fa-times" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
