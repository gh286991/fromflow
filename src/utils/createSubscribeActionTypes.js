const createSubscribeActionTypes = (actionTypeName) => ({
  SUBSCRIBE: `${actionTypeName}_SUBSCRIBE`,
  UNSUBSCRIBE: `${actionTypeName}_UNSUBSCRIBE`,
  UPDATED: `${actionTypeName}_UPDATED`,
});

export const createSubscribeActionTypesArray = (actionTypeName) => Object.values(createSubscribeActionTypes(actionTypeName));

export default createSubscribeActionTypes;
