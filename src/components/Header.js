import React, { Component } from 'react';

class Header extends Component {

    showMenu = () => {
        let menu = document.querySelector('#bars-icon');
        let navbar = document.querySelector('.navbar');
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');

    }

    showSearch = () => {
        document.querySelector('#search-form').classList.toggle('active');
    }

    

    render() {
        return (
            <header className="header">
                <a href="#" className="logo">
                    <i className="fas fa-utensils" />
                    Resto.
                </a>
                <nav className="navbar" onScroll={this.onScroll}>
                    <a className="active" href="#home">
                        Home
                    </a>
                    <a href="#dishes">Dishes</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#review">Review</a>
                    <a href="#order">Order</a>
                </nav>
                <div className="icons">
                    <i onClick={this.showSearch} className="fas fa-search" id="search-icon" />
                    <a href="#" className="fas fa-heart" id="heart-icon" />
                    <a href="#" className="fas fa-shopping-cart" id="cart-icon" />
                    <i onClick={this.showMenu} className="fas fa-bars" id="bars-icon" />
                </div>
            </header>
        );
    }
}

export default Header;