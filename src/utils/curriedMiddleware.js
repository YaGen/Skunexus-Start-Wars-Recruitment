const curriedMiddleware = (actionTypes) => (store) => (next) => (action) => {
  const result = next(action);

  if (actionTypes[action.type]) {
    actionTypes[action.type](action, store.getState(), store.dispatch);
  }

  return result;
};

export default curriedMiddleware;
