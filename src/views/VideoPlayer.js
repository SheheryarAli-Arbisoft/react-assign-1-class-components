import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { connect } from 'react-redux';

import VideosList from './VideosList';

import {
  VideoPlayerSection,
  VideoSection,
  RelatedVideosSection,
} from '../components/Section';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Description from '../components/Description';

import { getVideoIFrame, getFormattedTime } from '../utils';

import { getVideo, getAllRelatedVideos } from '../actions/video';

class VideoPlayer extends Component {
  /* eslint-disable no-shadow */
  componentDidMount() {
    const { match, getVideo, getAllRelatedVideos } = this.props;

    getVideo(match.params.id);
    getAllRelatedVideos(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { match, getVideo, getAllRelatedVideos } = this.props;

    if (match.params.id !== prevProps.match.params.id) {
      getVideo(match.params.id);
      getAllRelatedVideos(match.params.id);
    }
  }

  render() {
    const {
      video: { loading, video },
    } = this.props;

    return (
      /* eslint-disable react/jsx-filename-extension, react/jsx-fragments */
      <Fragment>
        <VideoPlayerSection>
          <VideoSection>
            {!loading && video && (
              <Fragment>
                {getVideoIFrame(video.embedHtml)}
                <Title>{video.title}</Title>
                <div>
                  <SubTitle>{video.channelTitle}</SubTitle>
                  <SubTitle>{getFormattedTime(video.publishedAt)}</SubTitle>
                </div>
                <Description full>
                  {parser(video.description.replaceAll('\n', '<br />'))}
                </Description>
              </Fragment>
            )}
          </VideoSection>

          <RelatedVideosSection>
            <VideosList small />
          </RelatedVideosSection>
        </VideoPlayerSection>
      </Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  video: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  getVideo: PropTypes.func.isRequired,
  getAllRelatedVideos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  video: state.video,
});

export default connect(mapStateToProps, { getVideo, getAllRelatedVideos })(
  VideoPlayer
);
