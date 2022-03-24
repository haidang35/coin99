import React, { Component } from "react";

export class ShowCoin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="wrapper main-wrapper row" style={{}}>
                    <div className="clearfix" />
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="statistics-box ref-bg1 mt-15" style={{ background: 'url(../../../../Assets/Admin/data/crypto-dash/icons/ref-bg1.png)'}}>
                            <div className="mb-15">
                                <div className="real-earn">
                                    <h2 className="w-text boldy mb-5">$1,456.98</h2>
                                    <span className="g-text">Referal Earnings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="statistics-box ref-bg2 mt-15">
                            <div className="mb-15">
                                <div className="real-earn">
                                    <h2 className="w-text boldy mb-5">$1,017.24</h2>
                                    <span className="g-text">Pending Earnings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                        <div className="statistics-box ref-bg3 mt-15">
                            <div className="mb-15">
                                <div className="real-earn">
                                    <h2 className="w-text boldy mb-5">$734.02</h2>
                                    <span className="g-text">Ready to Payout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-lg-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title pull-left">Total Referral Earnings</h2>
                                <div className="actions panel_actions pull-right">
                                    <a className="box_toggle fa fa-chevron-down" />
                                    <a
                                        className="box_setting fa fa-cog"
                                        data-toggle="modal"
                                        href="#section-settings"
                                    />
                                    <a className="box_close fa fa-times" />
                                </div>
                            </header>
                            <div className="content-body">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div id="morris-area-chart" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="clearfix" />
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="ref-num-box statistics-box text-center mt-15">
                            <div className="mb-15">
                                <h3 className="bold mb-5">310</h3>
                                <img
                                    src="../data/crypto-dash/ref1.png"
                                    className="ico-icon-o mt-10 mb-10"
                                    alt=""
                                />
                                <p className="mb-0">Referral Signups</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="ref-num-box statistics-box text-center mt-15">
                            <div className="mb-15">
                                <h3 className="bold mb-5">250</h3>
                                <img
                                    src="../data/crypto-dash/ref2.png"
                                    className="ico-icon-o mt-10 mb-10"
                                    alt=""
                                />
                                <p className="mb-0">Successful Referrals</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="ref-num-box statistics-box text-center mt-15">
                            <div className="mb-15">
                                <h3 className="bold mb-5">$934.47</h3>
                                <img
                                    src="../data/crypto-dash/ref3.png"
                                    className="ico-icon-o mt-10 mb-10"
                                    alt=""
                                />
                                <p className="mb-0">Creadit Earned</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="ref-num-box statistics-box text-center mt-15">
                            <div className="mb-15">
                                <h3 className="bold mb-5">0.03837 BTC</h3>
                                <img
                                    src="../data/crypto-dash/ref4.png"
                                    className="ico-icon-o mt-10 mb-10"
                                    alt=""
                                />
                                <p className="mb-0">Crypto Exchanged</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}