import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {fontSize} from '../../config/Functions';

const {height, width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background: #361042;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
`;
export const Title = styled.Text`
  color: #C35679;
  padding: 15px;
  font-size:${fontSize(width) + 12}
  text-align: center;

`;
export const Loading = styled.ActivityIndicator.attrs(props => {
  return {
    size: props.size,
    color: props.color,
  };
})`
  flex: 1;
`;
export const AreaFind = styled.View`
  width: 100%;
  height: 50px;
`;
export const InputFind = styled.TextInput`
  width: 100%;
  height: 100%;
`;
