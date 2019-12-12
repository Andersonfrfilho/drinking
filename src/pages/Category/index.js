import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Loading} from './styles';
import * as CategoryActions from '../../store/modules/category/actions';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import List from '../../components/List';

export default function Category() {
  const {loading, error, message} = useSelector(state => state.common);
  const {categorys} = useSelector(state => state.category);
  // const [stateUsername, setStateUsername] = useState('');
  // useEffect(() => {}, []);
  const dispatch = useDispatch();
  function handleButton(link, name) {
    dispatch(CategoryActions.categoryDrinkRequest(link, name));
  }
  return (
    <Container>
      <Header buttonExist={false} />
      <Logo message={message} error={error} />
      {loading ? (
        <Loading size="large" color="#571FB0" />
      ) : (
        <List
          data={categorys}
          functionOnPress={(link, name) => handleButton(link, name)}
        />
      )}
    </Container>
  );
}
