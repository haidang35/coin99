import React, { Component } from "react";

export class NewBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>

                <div className="col-lg-12">
                    <div className="panel-heading " >
                        <h1 >New Blog</h1>
                        <td className="">
                            <h2>TiTle</h2>
                            <input className="Name" type="name" />
                        </td>

                        <div className="box nobox ">

                            <div className="content-body">
                                <div className="row">
                                    <div className="col-md-8 ">
                                    </div>
                                    <div className="col-md-3 ">

                                        <div className="mail_content">
                                            <div className="row">
                                                <div className="col-xs-8">
                                                    <div className="pull-left">
                                                    </div>
                                                </div>
                                                <div className="mail_list col-xs-8">
                                                    <h2>TiTle</h2>
                                                    <input className="Name" type="name" />
                                                </div>
                                                <div className="mail_list col-xs-8">
                                                    <h2>Read Time</h2>
                                                    <input className="Name" type="name" />
                                                    <button className="btn btn-primary">Publisch</button>

                                                </div>

                                            </div>
                                        </div>
                                        <h3>Up Load Image</h3>
                                        <div className="col-lg-21 col-md-21 ">
                                            <div
                                                className="img-affa-wrapper text-center no-mb mt-15"
                                                style={{ padding: "50px 25px" }}>

                                                <div className="">
                                                    <a href="#myModal" data-toggle="modal">
                                                        <h4 className="no-mb mt-30">Up Load Image</h4>
                                                    </a>
                                                </div>
                                            </div>
                                            <div
                                                aria-hidden="true"
                                                role="dialog"
                                                tabIndex={-1}
                                                id="myModal"
                                                className="modal fade"
                                                style={{ display: "none" }}
                                            >
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header gradient-blue">
                                                            <button
                                                                aria-hidden="true"
                                                                data-dismiss="modal"
                                                                className="close"
                                                                type="button"
                                                            >
                                                                ×
                                                            </button>
                                                            <h4 className="modal-title w-text"></h4>
                                                        </div>
                                                        <div className="modal-body text-left">
                                                            <form>
                                                                <div className="form-group">
                                                                    <label htmlFor="modalname1" className="form-label">
                                                                        Coin Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="modalname1"
                                                                        placeholder="Enter crypto coin name"
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="form-label">Coin Market</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="modalwallet1"
                                                                        placeholder="Enter wallet address"
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="modalfile3" className="form-label">
                                                                        Upload coin icon
                                                                    </label>
                                                                    <input type="file" id="modalfile3" />
                                                                </div>
                                                                <button type="submit" className="btn btn-primary">
                                                                    Add to Watchlist
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}