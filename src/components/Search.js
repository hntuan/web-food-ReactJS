import React, { Component } from 'react'

export default class Search extends Component {

    onClose = () => {
        document.querySelector('#search-form').classList.toggle('active');
    }
    render() {
        return (
            <form id="search-form">
                <input type="search" placeholder="Search Here..." id="search-box" />
                <label htmlFor="search-box" className="fas fa-search" />
                <i onClick={this.onClose} className="fas fa-times" id="close" />
            </form>
        )
    }
}
