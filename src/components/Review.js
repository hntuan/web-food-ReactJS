import React, { Component } from 'react';
import { connect } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";

import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay]);


class Review extends Component {
    render() {
        var showReviews = this.props.review.map((review, index) => {
            return (
                <SwiperSlide key={index} className="slide">

                    <i className="fas fa-quote-right" />
                    <div className="user">
                        <img src={review.img} />
                        <div className="user-info">
                            <h3>{review.name}</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                    </div>
                    <p>
                        {review.content}
                    </p>
                </SwiperSlide>
            )
        })

        return (

            <section className="review" id="review">
                <h3 className="sub-heading"> Customer's Review </h3>
                <h1 className="heading"> What they say </h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": true
                    }}
                    className="review-slider"
                >
                    {showReviews}
                </Swiper>
            </section>


        );
    }
}
const mapStateToProps = (state) => {
    return {
        review: state.review,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Review);