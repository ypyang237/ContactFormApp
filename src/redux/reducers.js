import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import enquiries from './enquiries.js';

const reducers = combineReducers({
  enquiries,
  form: formReducer
});

export default reducers;
