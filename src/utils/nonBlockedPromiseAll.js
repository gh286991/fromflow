import * as R from 'ramda';
import {
  all,
} from 'redux-saga/effects';

/** This is a function to resolve multiple promises in parallel like
 *  Promise.all(), but without blocking each others when error occur.
 *  */
const nonBlockedPromiseAll = async (promises) => Promise.all(promises.map(async (promise) => {
  try {
    const result = await promise;
    return result;
  } catch (error) {
    return error;
  }
}));

export default nonBlockedPromiseAll;

/** This is a function to resolve multiple promises in parallel like
 *  Promise.all(), but without blocking each others when error occur.
 *  except promises is in object type and return type should be object as well
 *  */
export const objNonBlockedPromiseAll = async (promiseObj) => R.fromPairs(R.zip(
  R.keys(promiseObj),
  await R.pipe(
    R.values,
    await nonBlockedPromiseAll,
  )(promiseObj),
));

/** This is a Saga version of function to resolve multiple saga tasks in parallel like
 *  yield all(...), but without blocking each others when error occur.
 *  The usage should be:
     yield call(nonBlockedSagaAll,[
       call(...),
       call(...),
     ]);
 *  */
export function* nonBlockedSagaAll(tasks) {
  const innerTaskError = new Error('inner task error');
  const overallResult = yield all(tasks.map(function* innerTask(task) {
    try {
      return yield task;
    } catch (error) {
      console.error(error); //eslint-disable-line
      return innerTaskError;
    }
  }));
  if (overallResult.find((result) => result === innerTaskError)) throw innerTaskError;
  return overallResult;
}
