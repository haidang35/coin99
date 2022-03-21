import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Shared/Components/Layouts/Footer";
import { Slider } from "../Shared/Components/Slider/Slider";
import { } from "../Shared/Styles/Public.scss"

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Slider />
                <div className="contact_content">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-5 p_r_40">
                                        <h1 className="contact_title">Contact</h1>
                                        <div className="contacts_info">
                                            <div className="address">
                                                <p> Số 8 Tôn Thất Thuyết, Cầu Giấy, Hà Nội, Việt Nam </p>
                                            </div>
                                            <div className="phone_fax">
                                                <div>
                                                    <p>Phone</p>
                                                    <p>Fax</p>
                                                </div>
                                                <div>
                                                    <a href="#">0931789JQK</a>
                                                    <a href="#">0931789QKA</a>
                                                </div>
                                            </div>
                                            <ul className="opening_hours">
                                                <li>
                                                    <p>Monday-Wednesday</p>
                                                    <p>10 am - 6 pm</p>
                                                </li>
                                                <li>
                                                    <p>Thursday-Friday</p>
                                                    <p>10 am - 9 pm</p>
                                                </li>
                                                <li>
                                                    <p>Saturday</p>
                                                    <p>9:30 am - 5 pm</p>
                                                </li>
                                                <li>
                                                    <p>Sunday</p>
                                                    <p>12 pm - 5 pm</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 p_l_40">
                                        <div className="map_widget">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0968414913846!2d105.78049781478447!3d21.02881079315276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea31563511af2e54!2zOCBUw7RuIFRo4bqldCBUaHV54bq_dCwgTeG7uSDEkMOsbmgsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1647665488211!5m2!1svi!2s"
                                                width={750}
                                                height={600}
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <form className="contact_form">
                                        <h1 className="contact_title">By email</h1>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" id="f_name" />
                                                    <p className="help-block">First Name</p>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" id="l_name" />
                                                    <p className="help-block">Last Name</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Company</label>
                                            <input type="text" className="form-control" id="company" />
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label>Email*</label>
                                                    <input type="email" className="form-control" id="email" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label>Phone</label>
                                                    <input type="text" className="form-control" id="phone" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Tell Us About Your Project*</label>
                                            <textarea
                                                className="form-control"
                                                rows={7}
                                                id="comment"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-default">
                                            Get In Touch
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <Footer />
            </>
        )
    }
}