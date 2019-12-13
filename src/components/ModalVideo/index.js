import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-native-youtube';
import {ModalYoutube, Container, AreaImage, Image, Message} from './styles';
import ImageLogo from '../../../assets/images/logo.png';

export default function ModalVideo({
  showModal,
  isReady,
  status,
  quality,
  error,
}) {
  return (
    <YouTube
      videoId="KVZ-P-ZI6W4" // The YouTube video ID
      play // control playback of video with true/false
      apiKey="AIzaSyAn_gTdl_gCKC94c3TdU-C-A5UNIqeAalQ"
      s
    />
  );
}
ModalVideo.propTypes = {
  showModal: PropTypes.bool,
  isReady: PropTypes.bool,
  status: PropTypes.string,
  quality: PropTypes.string,
  error: PropTypes.string,
};
ModalVideo.defaultProps = {
  showModal: false,
  isReady: false,
  status: '',
  quality: '',
  error: '',
};
