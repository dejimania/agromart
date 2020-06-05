import { createStore } from 'redux';
import { MartReducer } from './MartReducer';

export const AgroMartDataStore = createStore(MartReducer);