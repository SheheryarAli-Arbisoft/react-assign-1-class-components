import React, { Fragment } from 'react';

// Getting the video iframe
export const getVideoIFrame = (embedHtml) => {
  let videoUrl = embedHtml.split(' ')[3];
  videoUrl = 'https:/' + videoUrl.slice(6, -1);

  return (
    <Fragment>
      <iframe
        title='videoFrame'
        width='100%'
        height='500px'
        style={{ marginBottom: '20px' }}
        src={videoUrl}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </Fragment>
  );
};

// Get formatted video time
export const getFormattedTime = (dateString) => {
  const time = new Date(dateString);
  const currentTime = Date.now();

  const duration = currentTime - time;

  // Returning the duration in years
  let result = Math.floor(duration / (1000 * 60 * 60 * 24 * 365));
  if (result > 0) {
    return (
      <Fragment>
        <i className='fas fa-clock'></i>{' '}
        {`${result} year${result > 1 ? 's' : ''} ago`}
      </Fragment>
    );
  }

  // Returning the duration in months
  result = Math.floor(duration / (1000 * 60 * 60 * 24 * 30));
  if (result > 0) {
    return (
      <Fragment>
        <i className='fas fa-clock'></i>{' '}
        {`${result} month${result > 1 ? 's' : ''} ago`}
      </Fragment>
    );
  }

  // Returning the duration in days
  result = Math.floor(duration / (1000 * 60 * 60 * 24));
  if (result > 0) {
    return (
      <Fragment>
        <i className='fas fa-clock'></i>{' '}
        {`${result} day${result > 1 ? 's' : ''} ago`}
      </Fragment>
    );
  }

  // Returning the duration in minutes
  result = Math.floor(duration / (1000 * 60 * 60));
  if (result > 0) {
    return (
      <Fragment>
        <i className='fas fa-clock'></i>{' '}
        {`${result} minute${result > 1 ? 's' : ''} ago`}
      </Fragment>
    );
  }
};
