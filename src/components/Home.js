import React, { Component } from 'react';
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css';

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

class Home extends Component {
    render() {
        var showSlide = this.props.home.map((slide, index) => {
            return (
                <SwiperSlide key={index} className="slide">
                    <div className="content">
                        <span>{slide.title}</span>
                        <h3>{slide.name}</h3>
                        <p>
                            {slide.content}
                        </p>
                        <a href="#" className="btn">
                            Order Now
                        </a>
                    </div>
                    <div className="image">
                        <img src={slide.img} />
                    </div>
                </SwiperSlide>
            )
        })
        return (
            <section id="home" className="home">
                <Swiper
                    pagination={true}
                    className="home-slider"
                    loop={true}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": true
                    }}
                >

                    {showSlide}
                </Swiper>
            </section>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
