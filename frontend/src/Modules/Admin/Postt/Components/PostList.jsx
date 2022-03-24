import React, { Component } from "react";


export class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
            <div class=" wrapper main-wrapper row">
                <div className="col-lg-12">
                    <section className="box">
                        <header className="panel_header">
                            <h2 className="title pull-left">Post List</h2>
                            <div className="actions panel_actions pull-right">
                                <a className="box_toggle fa fa-chevron-down" />
                                
                                <a className="box_close fa fa-times" />
                            </div>
                        </header>
                        <div className="content-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive" data-pattern="priority-columns">
                                        <table
                                            id="tech-companies-1"
                                            className="table table-bordered table-striped"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>ThumNail</th>
                                                    <th>Crypto Trade</th>
                                                    <th>Sender ID</th>
                                                    <th>Transaction ID</th>
                                                    <th>Time</th>
                                                    <th>Status</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        1

                                                    </td>
                                                    <td>
                                                        2

                                                    </td>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin1.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Bitcoin</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">gdh-34um3bbj</small>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">HJD9R034JNN3N43</small>
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
                                                        

                                                    </td>
                                                    <td>
                                                        

                                                    </td>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin1.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Bitcoin</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">gdh-34um3bbj</small>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">HJD9R034JNN3N43</small>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">10:23:45</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge  w-70 round-success">completed</span>
                                                    </td>
                                                    <td className="green-text boldy">+0,041BTC</td>
                                                </tr> 
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
                
                
    
            </>
        )
    }
}