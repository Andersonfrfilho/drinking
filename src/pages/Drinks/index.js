import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Title, Loading} from './styles';
import * as DrinksActions from '../../store/modules/drinks/actions';
import Header from '../../components/Header';
import ListDrinks from '../../components/ListDrinks';
import InputIcon from '../../components/InputIcon';
import {navigate} from '../../services/navigation';

export default function Drinks() {
  const {loading, error, message} = useSelector(state => state.common);
  const {title, drinks} = useSelector(state => state.drinks);

  const [stateListDrink, setStateListDrink] = useState([]);
  const [stateFindDrink, setStateFindDrink] = useState('');
  useEffect(() => {
    setStateListDrink(drinks);
  }, []);// eslint-disable-line
  const dispatch = useDispatch();
  function handleDrink(link) {
    dispatch(DrinksActions.DrinkRequest(link));
  }
  useEffect(() => {
    const data = stateListDrink
      .map(drink => {
        return drink;
      })
      .filter(drink => {
        return (
          drink.strDrink.toLowerCase().indexOf(stateFindDrink.toLowerCase()) !==
          -1
        );
      });
    if (stateFindDrink === '') {
      setStateListDrink(drinks);
    } else {
      setStateListDrink(data);
    }
  }, [stateFindDrink]);// eslint-disable-line
  return (
    <Container>
      <Header
        iconName="arrow-left"
        title="voltar"
        buttonExist
        functionOnPress={() => navigate('Category')}
      />
      <Title>{title}</Title>
      <InputIcon
        placeholder="digite o nome do drink"
        value={stateFindDrink}
        functionOnChangeText={text => setStateFindDrink(text)}
      />

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
