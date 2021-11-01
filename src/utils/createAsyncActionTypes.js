const createAsyncActionTypes = (actionTypeName) => ({
  RESET: `${actionTypeName}_RESET`,
  REQUEST: `${actionTypeName}_REQUEST`,
  SUCCESS: `${actionTypeName}_SUCCESS`,
  FAILURE: `${actionTypeName}_FAILURE`,
});

export const createAsyncActionTypesArray = (actionTypeName) => Object.values(createAsyncActionTypes(actionTypeName));

export default createAsyncActionTypes;
