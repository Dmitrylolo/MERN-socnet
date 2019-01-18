import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  renderSocialLinks = () => {
    const { social } = this.props.profile;
    if (social) {
      return (
        <div>
          {!isEmpty(social.twitter) && (
            <a
              className="text-white p-2"
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x" />
            </a>
          )}
          {!isEmpty(social.facebook) && (
            <a
              className="text-white p-2"
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x" />
            </a>
          )}
          {!isEmpty(social.linkedin) && (
            <a
              className="text-white p-2"
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
          )}
          {!isEmpty(social.instagram) && (
            <a
              className="text-white p-2"
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x" />
            </a>
          )}
          {!isEmpty(social.youtube) && (
            <a
              className="text-white p-2"
              href={social.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube fa-2x" />
            </a>
          )}
        </div>
      );
    }
  };
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{profile.user.name}</h1>
              <p className="lead text-center">
                {profile.status}
                {isEmpty(profile.company) ? null : (
                  <span> at {profile.company}</span>
                )}
              </p>
              {!isEmpty(profile.location) && <p>{profile.location}</p>}
              <p>
                {!isEmpty(profile.website) && (
                  <a className="text-white p-2" href={profile.website}>
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}
                {this.renderSocialLinks()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileHeader;
