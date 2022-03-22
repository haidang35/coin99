import React, { Component } from "react";

export class CoinsListAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="col-lg-12">
                    <section className="box">
                        <header className="panel_header">
                            <h2 className="title pull-left">Transactions History</h2>
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
                                    <div className="table-responsive" data-pattern="priority-columns">
                                        <table
                                            id="tech-companies-1"
                                            className="table vm trans table-small-font no-mb table-bordered table-striped"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Crypto Trade</th>
                                                    <th>Time</th>
                                                    <th>Status</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin1.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Bitcoin</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">10:23:45</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge  w-70 round-success">completed</span>
                                                    </td>
                                                    <td className="green-text boldy">+0,041BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin8.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Litecoin</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">12:53:25</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge w-70 round-warning">Pending</span>
                                                    </td>
                                                    <td className="red-text boldy">-1,176LTC</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin2.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Ethereum</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">04:03:25</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge w-70 round-primary">exchanged </span>
                                                    </td>
                                                    <td className="blue-text boldy">0.023ETH</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin4.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Ripple</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted"> 09:33:02</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge w-70 round-danger">Canceled</span>
                                                    </td>
                                                    <td className="green-text boldy">+107,0XRP</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin1.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Bitcoin</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">10:23:45</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge  w-70 round-warning">pending</span>
                                                    </td>
                                                    <td className="green-text boldy">-0,098BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin3.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Dashcoin</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">09:33:02</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge w-70 round-success">Completed</span>
                                                    </td>
                                                    <td className="red-text boldy">-2,76DAH</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin5.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Bitdash</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">09:33:02</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge w-70 round-success">Completed</span>
                                                    </td>
                                                    <td className="green-text boldy">+1,429DAH</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            </>
        )
    }
}