import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        name: 'Tasty Food',
        price: 15.99,
        img: './img/dish-1.png',
    },
    {
        name: 'Tasty Food',
        price: 16.99,
        img: './img/dish-2.png',
    },
    {
        name: 'Tasty Food',
        price: 17.99,
        img: './img/dish-3.png',
    },
    {
        name: 'Tasty Food',
        price: 18.99,
        img: './img/dish-4.png',
    },
    {
        name: 'Tasty Food',
        price: 19.99,
        img: './img/dish-5.png',
    },
    {
        name: 'Tasty Food',
        price: 20.99,
        img: './img/dish-6.png',
    },
    
    
];

var dishes = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default dishes;