import styled from 'styled-components/native';
import {Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSize} from '../../config/Functions';

const {width, height} = Dimensions.get('window');

Icons.loadFont();
export const Container = styled.View`
  flex: 1;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background: #b6567c;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  padding-left: 10px;
`;
export const Text = styled.Text`
  flex: 4;
  color: #361042;
  font-weight: bold;
  font-size: ${fontSize(width) + 6};
`;
export const Icon = styled(Icons)`
  flex: 1;
  color: #361042;
  font-size: ${fontSize(width) + 12};
  font-weight: bold;
  padding-right: 5px;
  padding-left: 5px;
`;
export const Loading = styled.ActivityIndicator.attrs(props => {
  return {
    size: `${props.size}`,
    color: `${props.color}`,
  };
})``;
Loading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};
Loading.defaultProps = {
  size: 'small',
  color: '#f7f7f7',
};
