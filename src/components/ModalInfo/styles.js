import styled from 'styled-components/native';
import {Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSize} from '../../config/Functions';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background: #d6759c;
  justify-content: flex-start;
  align-items: stretch;
  border-radius: 15px;
`;
export const List = styled.FlatList`
  border-radius: 30px;
`;
export const AreaTextIngredients = styled.View`
  flex-direction: row;
  flex: 1;
  background: ${props => (props.color ? '#d6759c' : '#d29fd6')};
  height: 40px;
  border-bottom-width: 1;
`;
export const AreaTextProductIngredient = styled.View`
  flex: 2;
  justify-content: center;
  padding-left: 10px;
  border-right-width: 1;
  border-right-color: #361042;
`;
export const AreaTextAmountIngredient = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 8px;
`;
export const AreaImageInfo = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const AreaImage = styled.View`
  flex: 1;

  flex-wrap: wrap;
  padding: 10px;
  border-radius: 120px;
`;
export const Photo = styled.Image.attrs(props => {
  return {resizeMode: 'stretch'};
})`
  width: 100%;
  height: 100%;
  border-radius: 120px;
`;
export const AreaInfo = styled.View`
  flex: 2;
`;
export const AreaCountry = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
export const AreaText = styled.View`
  flex: 1;
`;
export const AreaTitle = styled.View`
  flex: 1;
`;
export const AreaDescription = styled.View`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: ${fontSize(width) + 8};
  font-weight: bold;
  text-align: center;
`;
export const Text = styled.Text`
  font-size: ${fontSize(width) + 2};
  color: #361042;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;
export const Tags = styled.Text`
  font-size: ${10};
  color: #d6759c;
  padding-bottom: 2;
  background: ${props => props.color};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  border-radius: 3px;
`;
export const AreaCountryFlag = styled.TouchableOpacity`
  flex: 1;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
export const Ingredients = styled.View`
  flex: 2;
`;
export const BarInfo = styled.View`
  flex-direction: row;
  height: 50px;
`;
export const IconArea = styled.TouchableHighlight`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled(Icons)`
  flex: 1;
  color: ${props => props.color};
  font-size: ${fontSize() + 42};
`;
export const AreaModify = styled.View`
  flex: 1;
  padding: 2px;
`;
export const AreaTextCaracteristic = styled.View`
  height: 30px;
  flex-direction: row;
  border-bottom-width: 1;
`;
