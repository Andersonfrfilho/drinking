import React from 'react';
import PropTypes from 'prop-types';
import {Container, List, Text, Loading} from './styles';
import Button from '../Button';

export default function ListComponent({
  data,
  loading,
  disabled,
  functionOnPress,
  loadingSize,
  loadingColor,
}) {
  return (
    <Container>
      <List
        data={data}
        renderItem={({item, index, separators}) => (
          <Button
            key={index}
            title={item.name}
            nameIcon={item.nameIcon}
            disabled={false}
            functionOnPress={link => functionOnPress(item.link, item.name)}
          />
        )}
        keyExtractor={({item}, index) => index.toString()}
      />
    </Container>
  );
}
ListComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  functionOnPress: PropTypes.func,
  loading: PropTypes.bool,
  loadingSize: PropTypes.string,
  loadingColor: PropTypes.string,
  disabled: PropTypes.bool,
};
ListComponent.defaultProps = {
  data: [{id: 1}, {id: 2}],
  functionOnPress: () => {},
  loading: false,
  loadingSize: 'small',
  loadingColor: '#f7f7f7',
  disabled: true,
};
