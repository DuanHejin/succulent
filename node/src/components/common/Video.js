import React from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
  const { src } = props;
  return (
    <div>
      <video controls>
        <source src={src} type='video/mp4'/>
        <p>Your browser doesn't support HTML5 video.</p>
      </video>
    </div>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired
};

export default Video;