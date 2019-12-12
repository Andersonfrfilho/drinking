import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Title} from './styles';
import * as DetailActions from '../../store/modules/detail/actions';
import Header from '../../components/Header';
import ModalInfo from '../../components/ModalInfo';

export default function Details() {
  return (
    <Container>
      <Header iconName="arrow-left" title="voltar" buttonExist />
      <Title>Descricao</Title>
      <ModalInfo />
    </Container>
  );
}
