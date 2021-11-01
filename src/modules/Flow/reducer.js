import { handleActions, combineActions } from 'redux-actions';
import update from 'immutability-helper';
import ReduxStatus from '../../constants/ReduxStatus';
import ActionCreator from './ActionCreator';

const {
  getTagFlowRequest,
  getTagFlowSuccess,
  getTagFlowFailure,
} = ActionCreator;

const initialState = {
  reduxStatus: ReduxStatus.STATUS_INITIAL,
  error: null,
  data: null,
};

export default handleActions({

  [combineActions(
    getTagFlowRequest,
  )]: (state) => update(state, {
    reduxStatus: { $set: ReduxStatus.STATUS_LOADING },
    error: { $set: null },
  }),

  [combineActions(
    getTagFlowFailure,
  )]: (state, { payload }) => update(state, {
    reduxStatus: { $set: ReduxStatus.STATUS_ERROR },
    error: { $set: payload },
  }),

  [getTagFlowSuccess]: (state, { payload }) => update(state, {
    reduxStatus: { $set: ReduxStatus.STATUS_NORMAL },
    data: { $set: payload },
    error: { $set: null },
  }),

}, initialState);
