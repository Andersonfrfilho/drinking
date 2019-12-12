import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Title, Loading} from './styles';
import * as DrinksActions from '../../store/modules/drinks/actions';
import Header from '../../components/Header';
import ListDrinks from '../../components/ListDrinks';

export default function Drinks() {
  const {loading, error, message} = useSelector(state => state.common);
  const {title, drinks} = useSelector(state => state.drinks);

  const [stateListDrink, setStateListDrink] = useState([]);
  useEffect(() => {
    setStateListDrink(drinks);
  }, [drinks]);// eslint-disable-line
  const dispatch = useDispatch();
  function handleDrink(link) {
    dispatch(DrinksActions.DrinkRequest(link));
  }
  console.tron.log(drinks);
  return (
    <Container>
      <Header iconName="arrow-left" title="voltar" buttonExist />
      <Title>{title}</Title>
      {loading ? (
        <Loading />
      ) : (
        <ListDrinks
          data={stateListDrink}
          functionOnPress={link => handleDrink(link)}
        />
      )}
    </Container>
  );
}
