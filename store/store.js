import { createStore, combineReducers } from 'redux';
import hotel from './../reducers/hotel';
import search from './../reducers/search';
import details from './../reducers/details';

const reducers = combineReducers({ search, hotel, details });
export const store = createStore(reducers);
