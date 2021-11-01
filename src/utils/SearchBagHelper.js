import * as R from 'ramda';
import QueryString from 'query-string';

export const getCurrentFilterConditionFromQuery = (location) => (
  JSON.parse((R.pathOr('{}', ['search'], QueryString.parse(R.pathOr({}, ['search'], location)))))
);

export const getQueryStringFromFilterCondition = (filterCondition) => {
  if (!filterCondition || R.isEmpty(filterCondition)) return '';
  return `?search=${JSON.stringify(filterCondition)}`;
};

export const getPath = (location) => (
  QueryString.parse(R.pathOr('{}', ['search'], location))
);
