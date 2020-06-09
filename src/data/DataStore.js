import { createStore, applyMiddleware } from 'redux';
import { MartReducer } from './MartReducer';
import { CartReducer } from './CartReducer';
import { CommonReducer } from './CommonReducer';
import { asyncActions } from './AsyncMiddleware'

export const AgroMartDataStore
  = createStore(CommonReducer(MartReducer, CartReducer),
    applyMiddleware(asyncActions));