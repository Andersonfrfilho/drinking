import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Text, Button} from './styles';
import * as DetailActions from '../../store/modules/detail/actions';

export default function Details() {
  return (
    <Container>
      <Text>Pagina 3</Text>
    </Container>
  );
}
