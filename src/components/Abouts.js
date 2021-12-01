import React, { Component } from 'react';

class Abouts extends Component {
    render() {
        return (
            <section id="about" className="about">
                <h3 className="sub-heading"> About Us </h3>
                <h1 className="heading"> Why choose us? </h1>
                <div className="row">
                    <div className="image">
                        <img src="./img/about-img.png" />
                    </div>
                    <div className="content">
                        <h3>Best food in the country</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                            distinctio aliquid blanditiis dolore, aliquam dolores vero iure
                            exercitationem eligendi fugit reiciendis, libero minus doloremque
                            voluptates eaque cumque tempora eveniet! Tenetur.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit repellat
                            dolorum quod facilis dolore optio incidunt recusandae, totam soluta
                            blanditiis!
                        </p>
                        <div className="icons-container">
                            <div className="icons">
                                <i className="fas fa-shipping-fast" />
                                <span>Free delivery</span>
                            </div>
                            <div className="icons">
                                <i className="fas fa-dollar-sign" />
                                <span>Easy payments</span>
                            </div>
                            <div className="icons">
                                <i className="fas fa-headset" />
                                <span>24/7 Service</span>
                            </div>
                        </div>
                        <a href="#" className="btn">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>

        );
    }
}

export default Abouts;