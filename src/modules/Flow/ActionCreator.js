import { createActions } from 'redux-actions';
import { createAsyncActionTypesArray } from '../../utils/createAsyncActionTypes';

export default createActions(
  // ----- TASKS -----
  ...createAsyncActionTypesArray('GET_TAG'),

  // ----- FLOWS -----
  ...createAsyncActionTypesArray('GET_TAG_FLOW'),

  // ----- STATUS -----
  'RESET_STATUS',

  { prefix: 'TAG' },
);
