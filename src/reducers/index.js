import { combineReducers } from "redux";
import home from './home';
import dishes from './dishes';
import menu from './menu';
import review from "./review";
const webReducers = combineReducers({ 
    home: home,
    dishes: dishes,
    menu: menu,
    review: review,
})

export default webReducers;