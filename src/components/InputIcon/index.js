import React from 'react';
import PropTypes from 'prop-types';
import {Container, AreaInput, AreaIcon, InputFind, Icon} from './styles';

export default function InputIcon({placeholder, value, functionOnChangeText}) {
  return (
    <Container>
      <AreaInput>
        <InputFind
          placeholder={placeholder}
          placeholderTextColor="#361042"
          autoCompleteType="off"
          autoCorrect={false}
          keyboardType="default"
          autoCapitalize="none"
          value={value}
          onChangeText={functionOnChangeText}
          selectionColor="#361042"
        />
      </AreaInput>
      <AreaIcon>
        <Icon name="search" />
      </AreaIcon>
    </Container>
  );
}
InputIcon.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  functionOnChangeText: PropTypes.func,
};
InputIcon.defaultProps = {
  placeholder: '',
  value: '',
  functionOnChangeText: () => {},
};
