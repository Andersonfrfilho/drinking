import React from 'react';
import PropTypes from 'prop-types';
import {Button, Text, Container, Icon} from './styles';

export default function ButtonComponent({
  title,
  disabled,
  nameIcon,
  functionOnPress,
}) {
  return (
    <Container>
      <Button
        onPress={functionOnPress}
        disabled={disabled}
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
        <Icon name={nameIcon} />
        <Text>{title}</Text>
      </Button>
    </Container>
  );
}
ButtonComponent.propTypes = {
  title: PropTypes.string,
  nameIcon: PropTypes.string,
  functionOnPress: PropTypes.func,

  disabled: PropTypes.bool,
};
ButtonComponent.defaultProps = {
  title: 'title button',
  nameIcon: 'fonticons',
  functionOnPress: () => {},
  disabled: true,
};
