import styled from 'styled-components/native';
import {Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {fontSize} from '../../config/Functions';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
`;
export const List = styled.FlatList`
  border-radius: 30px;
`;

export const Modal = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background: #b6567c;
  margin-left: 20px;
  margin-right: 20px;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  border-radius: 100px;
`;
export const AreaImage = styled.View`
  flex: 1;
  flex-wrap: wrap;
  padding: 5px;
`;
export const AreaText = styled.View`
  flex: 1;
  padding-top: 15;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const Photo = styled.Image.attrs(props => {
  return {
    resizeMode: 'contain',
  };
})`
  width: 100%;
  height: 100%;
  border-radius: 150px;
`;
export const Text = styled.Text`
  flex: 1;
  font-size: ${fontSize(width) + 6};
  color: ${props => props.color};
`;
export const ItemSeparator = styled.View`
  height: 5;
`;
