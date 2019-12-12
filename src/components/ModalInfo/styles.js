import styled from 'styled-components/native';
import {Platform, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSize} from '../../config/Functions';

const {width, height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background: #567899;
  justify-content: flex-start;
  align-items: stretch;
`;
export const List = styled.FlatList`
  border-radius: 30px;
`;
export const AreaTextIngredients = styled.View`
  flex-direction: row;
  flex: 1;
  background: #456789;
`;
export const AreaTextProductIngredient = styled.View`
  flex: 2;
  background: #4ffcca;
`;
export const AreaTextAmountIngredient = styled.View`
  flex: 1;
  background: #ccff;
`;
export const AreaImageInfo = styled.View`
  flex: 1;
  flex-direction: row;
  background: #467890;
`;
export const AreaImage = styled.View`
  flex: 1;
  background: #34cc;
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
  background: #e45;
`;
export const AreaInfo = styled.View`
  flex: 2;
  background: #cc3467;
`;
export const AreaCountry = styled.View`
  background: #ffccaa;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const AreaText = styled.View`
  flex: 1;
  background: #acb;
`;
export const AreaTitle = styled.View`
  flex: 1;
  background: #acb;
`;
export const AreaDescription = styled.View`
  flex: 1;
  background: #acbffc;
`;
export const Title = styled.Text`
  font-size: ${fontSize(width) + 8};
  font-weight: bold;
  text-align: center;
`;
export const Text = styled.Text``;
export const AreaCountryFlag = styled.View`
  flex: 1;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #123456;
`;
export const Ingredients = styled.View`
  flex: 2;
  background: #aaffcc;
`;
export const BarInfo = styled.View`
  background: #12cadd;
  flex-direction: row;
  height: 50px;
`;
export const IconArea = styled.View`
  flex: 1;
  background: #4455aa;
`;
export const Icon = styled(Icons)`
  flex: 1;
  background: #abc;
  font-size: ${fontSize() + 42};
`;
export const AreaModify = styled.View`
  flex: 1;
`;
