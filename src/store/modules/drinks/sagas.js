import {call, put, all, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {
  commonLoadingActivity,
  commonSuccessAction,
  commonFailureAction,
} from '../common/actions';
import {addDetailDrink} from '../detail/actions';
import {navigate} from '../../../services/navigation';

function* DrinkRequest({payload}) {
  yield put(commonLoadingActivity('carregando drinks...'));
  const {id} = payload;

  try {
    const {data} = yield call(
      axios.get,
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const {
      drinks: [drinks],
    } = data;
    console.tron.log('aqui ta no ');
    console.tron.log(drinks);
    const ingredients = [
      {
        strIngredient: data.drinks[0].strIngredient1,
        strMeasure: data.drinks[0].strMeasure1,
      },
      {
        strIngredient: data.drinks[0].strIngredient2,
        strMeasure: data.drinks[0].strMeasure2,
      },
      {
        strIngredient: data.drinks[0].strIngredient3,
        strMeasure: data.drinks[0].strMeasure3,
      },
      {
        strIngredient: data.drinks[0].strIngredient4,
        strMeasure: data.drinks[0].strMeasure4,
      },
      {
        strIngredient: data.drinks[0].strIngredient5,
        strMeasure: data.drinks[0].strMeasure5,
      },
      {
        strIngredient: data.drinks[0].strIngredient6,
        strMeasure: data.drinks[0].strMeasure6,
      },
      {
        strIngredient: data.drinks[0].strIngredient7,
        strMeasure: data.drinks[0].strMeasure7,
      },
      {
        strIngredient: data.drinks[0].strIngredient8,
        strMeasure: data.drinks[0].strMeasure8,
      },
      {
        strIngredient: data.drinks[0].strIngredient9,
        strMeasure: data.drinks[0].strMeasure9,
      },
      {
        strIngredient: data.drinks[0].strIngredient10,
        strMeasure: data.drinks[0].strMeasure10,
      },
      {
        strIngredient: data.drinks[0].strIngredient11,
        strMeasure: data.drinks[0].strMeasure11,
      },
      {
        strIngredient: data.drinks[0].strIngredient12,
        strMeasure: data.drinks[0].strMeasure12,
      },
      {
        strIngredient: data.drinks[0].strIngredient13,
        strMeasure: data.drinks[0].strMeasure13,
      },
      {
        strIngredient: data.drinks[0].strIngredient14,
        strMeasure: data.drinks[0].strMeasure14,
      },
      {
        strIngredient: data.drinks[0].strIngredient15,
        strMeasure: data.drinks[0].strMeasure15,
      },
    ];
    const ingredientsInfo = ingredients.filter(
      (element, index) => element.strIngredient !== null
    );
    // console.tron.log(drinks['strDrinkZH-HANS']);

    yield put(addDetailDrink(drinks, ingredientsInfo));
    yield put(commonSuccessAction(''));
    navigate('Details');
  } catch (error) {
    if (error instanceof TypeError) {
      yield put(
        commonFailureAction(
          `erro de typagem de código linha:${error.line}, coluna:${error.column}`
        )
      );
    } else if (error instanceof RangeError) {
      yield put(
        commonFailureAction(
          `erro no tipo de variavel de código linha:${error.line}, coluna:${error.column}`
        )
      );
    } else if (error.message === 'Request failed with status code 404') {
      yield put(commonFailureAction(`Erro na API verifique a chamada`));
    } else if (error.message === 'Network Error') {
      yield put(commonFailureAction(`Erro de conexao verifique sua Internet`));
    } else {
      yield put(commonFailureAction(`Proximo Erro`));
    }
  }
}

export default all([takeLatest('@drinks/ADD_REQUEST', DrinkRequest)]);
