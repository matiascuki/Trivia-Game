import { createStore,applyMiddleware, compose } from 'redux';
import rootReducers from './reducers';


const logger = (store) => (next) => (action) => {
next(action)


} 


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store =  createStore(
    rootReducers,
    composeEnhancers(
      applyMiddleware(logger))
    )

export default store;