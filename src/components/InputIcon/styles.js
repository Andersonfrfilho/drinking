import styled from 'styled-components/native';
import {Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/FontAwesome';
import {fontSize} from '../../config/Functions';

const {width, height} = Dimensions.get('window');

Icons.loadFont();
export const Container = styled.View`
  background: #b6557c;
  width: 100%;
  height: 50px;
  flex-direction: row;
  margin-bottom: 15px;
  border-radius: 30px;
`;
export const AreaInput = styled.View`
  flex: 5;
`;
export const AreaIcon = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;
export const InputFind = styled.TextInput`
  width: 100%;
  height: 100%;
`;
export const Icon = styled(Icons)`
  color: #361042;
  font-size: ${fontSize(width) + 12};
  font-weight: bold;
  padding-right: 5px;
  padding-left: 5px;
`;
