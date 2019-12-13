import styled from 'styled-components/native';

import {Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSize} from '../../config/Functions';

const {width, height} = Dimensions.get('window');
Icons.loadFont();
export const Container = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 40 : 0};
  flex-direction: row;
  justify-content: flex-start;
  height: 50px;
  width: 100%;

  padding-top: 10px;
  padding-bottom: 10px;
`;
export const Button = styled.TouchableOpacity`
  flex-direction: row;
  width: 70px;
  background: #d6759c;
  border-radius: 6;
`;
export const AreaIcon = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const AreaText = styled.View`
  justify-content: center;
  align-items: center;
  flex: 2;
`;

export const Text = styled.Text`
  color: ${props => props.color};
  font-weight: bold;
  font-size: ${fontSize(width)};
`;
export const Icon = styled(Icons).attrs(props => {
  return {
    name: props.name,
  };
})`
  color: ${props => props.color};
  font-size: ${fontSize(width)};
  font-weight: bold;
`;
