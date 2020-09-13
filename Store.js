import carReducer from './reducers/carReducer'
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  carReducer:carReducer
})

const configureStore = createStore(rootReducer);
export default configureStore;