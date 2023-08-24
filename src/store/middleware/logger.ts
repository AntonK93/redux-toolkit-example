import { Middleware } from 'redux';

const loggerMiddleware: Middleware = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Updated State:', store.getState());
  return result;
};

export default loggerMiddleware;