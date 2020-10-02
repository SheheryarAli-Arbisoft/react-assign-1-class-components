import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import VideosListItem from './VideoListItem';

import { List } from '../components/List';

import { connect } from 'react-redux';
import { getAllVideos } from '../actions/video';

class VideosList extends Component {
  componentDidMount() {
    const { location, getAllVideos } = this.props;

    if (location) {
      // Getting the search paramters from the url
      const description = queryString.parse(location.search).q;

      if (description) {
        getAllVideos(description);
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { location, getAllVideos } = this.props;

    if (location) {
      // Getting the description from the url parameters
      const description = queryString.parse(location.search).q;
      const prevDescription = queryString.parse(prevProps.location.search).q;

      if (description !== prevDescription) {
        if (description) {
          getAllVideos(description);
        }
      }
    }
  }

  render() {
    const {
      video: { loading, videos },
      small,
    } = this.props;

    return (
      <Fragment>
        <List small={small}>
          {!loading &&
            videos.length > 0 &&
            videos.map((video) => (
              <VideosListItem key={video.id} video={video} small={small} />
            ))}
        </List>
      </Fragment>
    );
  }
}

VideosList.propTypes = {
  video: PropTypes.object.isRequired,
  getAllVideos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  video: state.video,
});

export default connect(mapStateToProps, { getAllVideos })(VideosList);
