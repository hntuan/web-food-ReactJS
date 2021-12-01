import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        title: 'Our special dishes',
        name: 'Spicy noodles',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, delectus?',
        img: './img/home-img-1.png',
    },
    {
        title: 'Our special dishes',
        name: 'Fried chicken',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, delectus?',
        img: './img/home-img-2.png',
    },
    {
        title: 'Our special dishes',
        name: 'Hot pizza',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, delectus?',
        img: './img/home-img-3.png',
    },
    
];

var home = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default home;