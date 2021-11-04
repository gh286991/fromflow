import * as R from 'ramda';
import { createSelector } from 'reselect';
import { tagStateSelector } from '../../lib/rootSelector';

export const reduxStatusSelector = createSelector(
  tagStateSelector,
  (result) => R.path(['reduxStatus'], result),
);

export const reduxErrorSelector = createSelector(
  tagStateSelector,
  (result) => R.path(['error', 'message'], result),
);

export const tagListSelector = createSelector(
  tagStateSelector,
  (result) => R.path(['data'], result),
);
