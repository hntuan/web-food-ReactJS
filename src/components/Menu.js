import React, { Component } from "react";
import { connect } from "react-redux";
class Menu extends Component {
    render() {
        var showMenu = this.props.menu.map((item, index) => {
            return (
                <div key={index}className="box">
                    <div className="image">
                        <img src={item.img} />
                        <a href="#" className="fas fa-heart" />
                    </div>
                    <div className="content">
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                        </div>
                        <h3>{item.name}</h3>
                        <p>
                            {item.content}
                        </p>
                        <a href="#" className="btn">
                            Add to cart
                        </a>
                        <span className="price">${item.price}</span>
                    </div>
                </div>
            );
        });
        return (
            <section id="menu" className="menu">
                <h3 className="sub-heading"> Our menu </h3>
                <h1 className="heading"> Today's speciality </h1>
                <div className="box-container">
                    {showMenu}
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        menu: state.menu,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
