import React from 'react';
import PropTypes from 'prop-types';
import {Container, Button, AreaIcon, AreaText, Text, Icon} from './styles';

export default function Header({title, buttonExist, color, iconName}) {
  return (
    <Container>
      {buttonExist ? (
        <Button>
          <AreaIcon>
            <Icon name={iconName} color={color} />
          </AreaIcon>
          <AreaText>
            <Text color={color}>{title}</Text>
          </AreaText>
        </Button>
      ) : null}
    </Container>
  );
}
Header.propTypes = {
  title: PropTypes.string,
  buttonExist: PropTypes.bool,
  color: PropTypes.string,
  iconName: PropTypes.string,
  functionOnPress: PropTypes.func,

  disabled: PropTypes.bool,
};
Header.defaultProps = {
  title: 'button',
  buttonExist: true,
  color: '#361042',
  iconName: 'font-awesome',
  functionOnPress: () => {},
  disabled: true,
};
