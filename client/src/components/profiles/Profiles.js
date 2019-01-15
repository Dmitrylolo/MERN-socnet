import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getProfiles } from '../../actions/profileActions';

import Spinner from '../common/Spinner';

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = <h1>Profiles here</h1>;
      } else {
        profileItems = <h4>There're no profiles yet</h4>;
      }
    }
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="display-4 text-center">Developer Profiles</div>
              <p className="lead text-center">
                Browse with developers and get connected
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired
};

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);