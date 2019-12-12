import {all} from 'redux-saga/effects';

import category from './category/sagas';
import detail from './detail/sagas';
import drinks from './drinks/sagas';

export default function* rootSaga() {
  return yield all([
    category,
    detail,
    drinks,
    // adicione mais sagas
  ]);
}
