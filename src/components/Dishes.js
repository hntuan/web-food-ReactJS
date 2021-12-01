import React, { Component } from 'react';
import { connect } from "react-redux";

class Dishes extends Component {
    render() {

        var showDishes = this.props.dishes.map((item, index) => {
            return (
                <div key={index} className="box">
                    <a href="#" className="fas fa-heart" />
                    <a href="#" className="fas fa-eye" />
                    <img src={item.img} />
                    <h3>{item.name}</h3>
                    <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                    </div>
                    <span>${item.price}</span>
                    <a href="#" className="btn">
                        Add to cart
                    </a>
                </div>
            )
        })
        return (
            <section id="dishes" className="dishes">
                <h3 className="sub-heading"> Our Dishes </h3>
                <h1 className="heading"> Popular Dishes </h1>
                <div className="box-container">

                    {showDishes}
                </div>
            </section>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dishes);