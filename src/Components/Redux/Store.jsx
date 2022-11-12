import { applyMiddleware } from 'redux'
import {combineReducers} from "redux"
import { createStore } from 'redux';
import { DrawerReducer } from './DrawerReducer';

const reducer = combineReducers({
    drawerReducer:DrawerReducer
})

const store = createStore(reducer)

export default store