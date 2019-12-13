// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, select, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import {
  commonLoadingActivity,
  commonSuccessAction,
  commonFailureAction,
} from '../common/actions';
import {clearDetailSuccess} from './actions';
import {navigate} from '../../../services/navigation';
// generator
// é como se fosse um async
function* detailClearRequest() {
  yield put(commonLoadingActivity());
  yield put(clearDetailSuccess());
  yield put(commonSuccessAction());
  yield navigate('Drinks');
}

export default all([takeLatest('@detail/CLEAR_REQUEST', detailClearRequest)]);
