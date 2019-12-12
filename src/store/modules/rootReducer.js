import {combineReducers} from 'redux';
import {reducer as offline} from 'redux-offline-queue';
import category from './category/reducer';
import detail from './detail/reducer';
import drinks from './drinks/reducer';
import common from './common/reducer';

export default combineReducers({
  offline,
  common,
  category,
  detail,
  drinks,
});
