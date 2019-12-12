import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  List,
  Text,
  Modal,
  AreaImage,
  AreaText,
  Photo,
  ItemSeparator,
} from './styles';
import Button from '../Button';

export default function ListDrinks({
  data,
  loading,
  disabled,
  functionOnPress,
  loadingSize,
  loadingColor,
  color,
}) {
  return (
    <Container>
      <List
        data={data}
        renderItem={({item, index, separators}) => (
          <Modal
            key={index}
            disabled={false}
            onPress={() => functionOnPress(item.idDrink)}
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.69,
              shadowRadius: 10,

              elevation: 5,
            }}>
            <AreaImage>
              <Photo
                source={{
                  uri: `${item.strDrinkThumb}`,
                }}
              />
            </AreaImage>
            <AreaText>
              <Text color={color}>{item.strDrink}</Text>
            </AreaText>
          </Modal>
        )}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({item}, index) => index.toString()}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * index,
          index,
        })}
        numColumns={1}
        initialScrollIndex={10}
        initialNumToRender={10}
        progressViewOffset={10}
      />
    </Container>
  );
}
ListDrinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  functionOnPress: PropTypes.func,
  loading: PropTypes.bool,
  loadingSize: PropTypes.string,
  loadingColor: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.string,
};
ListDrinks.defaultProps = {
  data: [{id: 1}, {id: 2}],
  functionOnPress: () => {},
  loading: false,
  loadingSize: 'small',
  loadingColor: '#f7f7f7',
  disabled: true,
  color: '#361042',
};
