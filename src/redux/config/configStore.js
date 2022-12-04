import {createStore} from "redux";
import {combineReducers} from "redux";

import item from '../modules/item';

const rootReducer = combineReducers({
    item,
});
const store = createStore(rootReducer);

export default store;