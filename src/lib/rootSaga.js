import { all } from 'redux-saga/effects';
import tagSaga from '../modules/Flow/saga';

export default function* rootSaga() {
  yield all([
    ...tagSaga,
  ]);
}
