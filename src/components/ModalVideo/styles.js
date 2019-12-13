import styled from 'styled-components/native';
import {Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {fontSize} from '../../config/Functions';

const {height, width} = Dimensions.get('window');

export const ModalYoutube = styled.Modal`
  flex: 1;
  background: #456779;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;
export const AreaImage = styled.View`
  flex: 1;
  width: 100%;
  flex-wrap: wrap;
`;
export const Image = styled.Image.attrs(props => {
  return {
    resizeMode: 'center',
  };
})`
  flex: 1;
  width: 100%;
  height: 100%;
`;
export const Message = styled.Text`
  flex: 1;
  font-size: ${fontSize(width)};

  color: ${props => (props.error ? '#e45' : props.color)};
`;
Message.propTypes = {
  color: PropTypes.string,
};
Message.defaultProps = {
  color: '#f7f7f7',
};
