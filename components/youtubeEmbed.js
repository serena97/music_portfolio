import React from "react";
import PropTypes from "prop-types";
import styles from './youtubeEmbed.module.scss'

const YoutubeEmbed = ({ embedId }) => (
  <div className={`${styles['video-responsive']}`}>
    <iframe
      height="100%"
      width="100%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
