import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Thumbnail from '../components/Thumbnail';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Description from '../components/Description';
import { ListItem, ListItemContent } from '../components/List';

import { getFormattedTime } from '../utils';

class VideoListItem extends Component {
  render() {
    const { video, small } = this.props;

    return (
      <Fragment>
        <Link to={`/${video.id}`}>
          <ListItem>
            <Thumbnail alt='' src={video.thumbnails.high.url} small={small} />
            <ListItemContent small={small}>
              <Title small={small}>{video.title}</Title>
              <div>
                <SubTitle small={small}>{video.channelTitle}</SubTitle>
                <SubTitle small={small}>
                  {getFormattedTime(video.publishedAt)}
                </SubTitle>
              </div>
              <Description small={small}>{video.description}</Description>
            </ListItemContent>
          </ListItem>
        </Link>
      </Fragment>
    );
  }
}

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired,
  small: PropTypes.bool,
};

export default VideoListItem;
