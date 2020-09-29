import React, { Component, Fragment } from 'react';
import parser from 'html-react-parser';

import { connect } from 'react-redux';
import { getVideo } from '../actions/video';

const getVideoIFrame = (embedHtml) => {
  let videoUrl = embedHtml.split(' ')[3];
  videoUrl = 'https:/' + videoUrl.slice(6, -1);

  return (
    <iframe
      width='100%'
      height='500px'
      src={videoUrl}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  );
};

class VideoPlayer extends Component {
  componentDidMount() {
    const { match, getVideo } = this.props;

    getVideo(match.params.id);
  }

  render() {
    return (
      <Fragment>
        {!this.props.video.loading && this.props.video.video && (
          <Fragment>
            {getVideoIFrame(this.props.video.video.embedHtml)}
            <div>{this.props.video.video.title}</div>
            <div>{this.props.video.video.channelTitle}</div>
            <div>{this.props.video.video.publishedAt}</div>
            <div>
              {parser(
                this.props.video.video.description.replaceAll('\n', '<br />')
              )}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  video: state.video,
});

export default connect(mapStateToProps, { getVideo })(VideoPlayer);
