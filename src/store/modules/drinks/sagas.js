import {call, put, all, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {
  commonLoadingActivity,
  commonSuccessAction,
  commonFailureAction,
} from '../common/actions';
import {addToRepositoriesSuccess} from './actions';
import {navigate} from '../../../routes';

function* DrinkRequest({payload}) {
  yield put(commonLoadingActivity('carregando drinks...'));
  const {link} = payload;
  console.log(link);
  try {
    const {data} = yield call(axios.get, `${link}`);
    console.log(data);
    yield put(commonSuccessAction(''));
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

export default all([takeLatest('@drinks/DRINK_REQUEST', DrinkRequest)]);
