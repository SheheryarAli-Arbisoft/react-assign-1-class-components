import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';

import Thumbnail from '../components/Thumbnail';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Description from '../components/Description';

class VideoListItem extends Component {
  render() {
    return (
      <Fragment>
        <Link to={`/${this.props.video.id}`}>
          <Thumbnail alt='' src={this.props.video.thumbnails.high.url} />
          <Title>{this.props.video.title}</Title>
          <SubTitle>{this.props.video.channelTitle}</SubTitle>
          <SubTitle>{this.props.video.publishedAt}</SubTitle>
          <Description>
            {parser(this.props.video.description.replaceAll('\n', '<br />'))}
          </Description>
        </Link>
      </Fragment>
    );
  }
}

export default VideoListItem;
