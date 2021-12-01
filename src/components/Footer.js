import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>Locations</h3>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> India
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Japan
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Russia
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> USA
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> France
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> VietNam
                        </a>
                    </div>
                    <div className="box">
                        <h3>Quick links</h3>
                        <a href="#home">
                            {" "}
                            <i className="fas fa-arrow-right" /> Home
                        </a>
                        <a href="#dishes">
                            {" "}
                            <i className="fas fa-arrow-right" /> Dishes
                        </a>
                        <a href="#about">
                            {" "}
                            <i className="fas fa-arrow-right" /> About
                        </a>
                        <a href="#menu">
                            {" "}
                            <i className="fas fa-arrow-right" /> Menu
                        </a>
                        <a href="#review">
                            {" "}
                            <i className="fas fa-arrow-right" /> Review
                        </a>
                        <a href="#order">
                            {" "}
                            <i className="fas fa-arrow-right" /> Order
                        </a>
                    </div>
                    <div className="box">
                        <h3>Contact info</h3>
                        <a href="#">
                            {" "}
                            <i className="fas fa-phone" /> +123-456-789
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-phone" /> +111-222-333
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-envelope" /> hotuantd@gmail.com
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-envelope" /> abcxyzht@gmail.com
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Hanoi, Vietnam
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> Hatinh, Vietnam
                        </a>
                    </div>
                    <div className="box">
                        <h3>Follow us</h3>
                        <a href="#">
                            {" "}
                            <i className="far fa-comment" /> Zalo
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fas fa-envelope" /> Gmail
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fab fa-facebook-f" /> Facebook{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fab fa-twitter" /> Twitter{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fab fa-instagram" /> Instagram{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <i className="fab fa-linkedin" /> LinkedIn{" "}
                        </a>
                    </div>
                </div>
                <div className="credit">
                    Copyright @ 2021 by <span>Mr. Web designer</span> | all rights reserved
                </div>
            </section>

        )
    }
}
