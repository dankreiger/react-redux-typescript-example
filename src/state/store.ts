import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';

import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';

let composeEnhancers;
let composedEnhancers;

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(invariant({ ignore: ['user'] }) as any);
  composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
  });
  composedEnhancers = composeEnhancers(applyMiddleware(...middleware));
} else {
  composedEnhancers = applyMiddleware(...middleware);
}

const store = createStore(rootReducer, composedEnhancers);
export default store;
