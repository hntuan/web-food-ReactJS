import React, { Component } from 'react';

class Order extends Component {
    render() {
        return (
            <section id="order" className="order">
                <h3 className="sub-heading"> Order Now </h3>
                <h1 className="heading"> Free and fast </h1>
                <form >
                    <div className="inputBox">
                        <div className="input">
                            <span>Your name</span>
                            <input type="text" placeholder="Enter Your name" />
                        </div>
                        <div className="input">
                            <span>Your number</span>
                            <input type="number" placeholder="Enter Your number" />
                        </div>
                    </div>
                    <div className="inputBox">
                        <div className="input">
                            <span>Your order</span>
                            <input type="text" placeholder="Enter Food name" />
                        </div>
                        <div className="input">
                            <span>Additional food</span>
                            <input type="test" placeholder="Extra with food" />
                        </div>
                    </div>
                    <div className="inputBox">
                        <div className="input">
                            <span>How musch</span>
                            <input type="number" placeholder="How many orders" />
                        </div>
                        <div className="input">
                            <span>Date and time</span>
                            <input type="datetime-local" />
                        </div>
                    </div>
                    <div className="inputBox">
                        <div className="input">
                            <span>Your Address</span>
                            <textarea
                                placeholder="Enter your Address"
                                cols={30}
                                rows={10}
                                defaultValue={""}
                            />
                        </div>
                        <div className="input">
                            <span>Your Message</span>
                            <textarea
                                placeholder="Enter your Message"
                                cols={30}
                                rows={10}
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    <input type="submit" defaultValue="order now" className="btn" />
                </form>
            </section>

        );
    }
}

export default Order;