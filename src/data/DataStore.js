import { createStore } from 'redux';
import { MartReducer } from './MartReducer';
import { CartReducer } from './CartReducer';
import { CommonReducer } from './CommonReducer';

export const AgroMartDataStore = createStore(CommonReducer(MartReducer, CartReducer));