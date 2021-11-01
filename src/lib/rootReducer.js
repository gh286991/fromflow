import { combineReducers } from 'redux';
import flow from '../modules/Flow/reducer';

const appReducer = combineReducers({
  flow,
});

// NOTE: reset reducers after sign out.
const rootReducer = (state, action) => (appReducer(state, action));

export default rootReducer;
