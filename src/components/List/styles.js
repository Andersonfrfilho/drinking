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
export const List = styled.FlatList``;
