import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        name: 'Delicious food',
        price: 15.99,
        img: './img/menu-1.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, aspernatur.'
    },
    {
        name: 'Delicious food',
        price: 16.99,
        img: './img/menu-2.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, aspernatur.'
    },
    {
        name: 'Delicious food',
        price: 17.99,
        img: './img/menu-3.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, aspernatur.'
    },
    {
        name: 'Delicious food',
        price: 18.99,
        img: './img/menu-4.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, aspernatur.'
    },
    {
        name: 'Delicious food',
        price: 19.99,
        img: './img/menu-5.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, aspernatur.'
    },
    {
        name: 'Delicious food',
        price: 20.99,
        img: './img/menu-6.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, aspernatur.'
    },
    {
        name: 'Delicious food',
        price: 21.99,
        img: './img/menu-7.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, aspernatur.'
    },
    {
        name: 'Delicious food',
        price: 22.99,
        img: './img/menu-8.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, aspernatur.'
    },
    {
        name: 'Delicious food',
        price: 23.99,
        img: './img/menu-9.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, aspernatur.'
    },
     
];

var menu = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default menu;