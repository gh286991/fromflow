import { call, put, takeLatest } from 'redux-saga/effects';
import ActionCreator from './ActionCreator';
import API from './API';

const {
  getTagRequest,
  getTagSuccess,
  getTagFailure,

  getTagFlowRequest,
  getTagFlowSuccess,
  getTagFlowFailure,
} = ActionCreator;

// ---------- TASKS ----------
export function* getTag(data) {
  yield put(getTagRequest(data));
  try {
    const result = yield call(API.getFlowList);
    yield put(getTagSuccess(result.data));
    return result;
  } catch (error) {
    yield put(getTagFailure(error));
    throw error;
  }
}

// ---------- FLOWS ----------
export function* getTagFlow({ payload }) {
  console.log('getSaga');
  try {
    const tags = yield call(getTag, payload);

    yield put(
      getTagFlowSuccess({
        tags,
      }),
    );
  } catch (error) {
    yield put(getTagFlowFailure(error));
  }
}

export default [takeLatest(getTagFlowRequest, getTagFlow)];
