import axios from 'axios';
import { ALL_VIDEOS_LOADED, VIDEO_LOADED, VIDEO_ERROR } from './types';

const API_KEY = 'AIzaSyA6vjCwXxs-wFd7_Hr0eFA6YuHYX7INahM';

// Generate the search url
const generateSearchUrl = (description) => {
  return `https://www.googleapis.com/youtube/v3/search?maxResults=25&q=${description}&type=video&key=${API_KEY}`;
};

// Generete the videos url
const generateVideosUrl = (videoIds) => {
  return `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIds.join(
    '%2C'
  )}&key=${API_KEY}`;
};

// Get required data from response
const getRequiredVideosData = (response) => {
  let result = [];

  response.items.forEach((item) => {
    // Destructuring the required fields
    const {
      id,
      title,
      channelTitle,
      publishedAt,
      description,
      thumbnails,
    } = item.snippet;

    // Adding the object to the results array
    result = [
      ...result,
      {
        id,
        title,
        channelTitle,
        publishedAt,
        description,
        thumbnails,
      },
    ];
  });

  return result;
};

// Get all videos related to description
export const getAllVideos = (description) => async (dispatch) => {
  try {
    // Getting all the video results related to the description
    let result = await axios.get(generateSearchUrl(description));

    // Getting the video ids from the search result
    const videoIds = result.data.items.map((item) => item.id.videoId);

    // Getting the videos from the video ids
    result = await axios.get(generateVideosUrl(videoIds));

    // Getting required data from response
    result = getRequiredVideosData(result.data);

    dispatch({
      type: ALL_VIDEOS_LOADED,
      payload: result,
    });
  } catch (err) {
    console.log(err.message);

    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Generate single video url
const generateSingleVideoUrl = (id) => {
  return `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&id=${id}&key=${API_KEY}`;
};

// Get required single video data from response
const getRequiredSingleVideoData = (response) => {
  // Destructuring the required fields
  const { title, channelTitle, publishedAt, description } = response.snippet;

  const { embedHtml } = response.player;

  return {
    title,
    channelTitle,
    publishedAt,
    description,
    embedHtml,
  };
};

// Get a single video
export const getVideo = (id) => async (dispatch) => {
  try {
    // Getting the video related to the id
    let result = await axios.get(generateSingleVideoUrl(id));

    // console.log(result.data);

    result = getRequiredSingleVideoData(result.data.items[0]);

    dispatch({
      type: VIDEO_LOADED,
      payload: result,
    });
  } catch (err) {
    console.log(err.message);

    dispatch({
      type: VIDEO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
