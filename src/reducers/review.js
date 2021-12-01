import * as types from '../constants/ActionTypes';

var initialState =  [
    {
        name: 'John Deo',
        img: './img/pic-1.png',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit, neque, ea suscipit nobis debitis voluptates natus quia quae incidunt nisi ullam placeat, iste tenetur ratione vel! Dignissimos, ratione sit.'
    },
    {
        name: 'John Deo',
        img: './img/pic-2.png',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit, neque, ea suscipit nobis debitis voluptates natus quia quae incidunt nisi ullam placeat, iste tenetur ratione vel! Dignissimos, ratione sit.'
    },
    {
        name: 'John Deo',
        img: './img/pic-3.png',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit, neque, ea suscipit nobis debitis voluptates natus quia quae incidunt nisi ullam placeat, iste tenetur ratione vel! Dignissimos, ratione sit.'
    },
    {
        name: 'John Deo',
        img: './img/pic-4.png',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit, neque, ea suscipit nobis debitis voluptates natus quia quae incidunt nisi ullam placeat, iste tenetur ratione vel! Dignissimos, ratione sit.'
    },
   
     
];

var review = (state = initialState, action) => {
   
    switch (action.type) {
        
        default: return [...state];
    }
}

export default review;