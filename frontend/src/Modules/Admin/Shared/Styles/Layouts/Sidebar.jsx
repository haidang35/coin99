import React, { Component } from "react";

export class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state ={}

    }
    render() {
        return(
            <>
        <div className="page-sidebar fixedscroll">
          {/* MAIN MENU - START */}
          <div className="page-sidebar-wrapper crypto" id="main-menu-wrapper">
            <ul className="wraplist">
              <li className="menusection">Main</li>
              <li className="">
                <a href="index-crypto-dashboard.html">
                  <i className="img relative crypto-ic ">
                    <img
                      src="../data/crypto-dash/icons/1.png"
                      alt=""
                      className="ic1 width-20"
                    />
                  </i>
                  <span className="title">Dashboard</span>
                </a>
              </li>
              <li className="">
                <a href="crypto-wallet.html">
                  <i className="img">
                    <img
                      src="../data/crypto-dash/icons/2.png"
                      alt=""
                      className="width-20"
                    />
                  </i>
                  <span className="title">Coins</span>
                </a>
              </li>
              <li className="">
                <a href="crypto-buy-sell.html">
                  <i className="img">
                    <img
                      src="../data/crypto-dash/icons/6.png"
                      alt=""
                      className="width-20"
                    />
                  </i>
                  <span className="title">Users</span>
                </a>
              </li>
              <li className="">
                <a href="crypto-ico-admin.html">
                  <i className="img">
                    <img
                      src="../data/crypto-dash/icons/4.png"
                      alt=""
                      className="width-20"
                    />
                  </i>
                  <span className="title">Posts</span>
                  <span className="label label-accent">HOT</span>
                </a>
              </li>
              <li className="">
                <a href="crypto-affiliate.html">
                  <i className="img">
                    <img
                      src="../data/crypto-dash/icons/8.png"
                      alt=""
                      className="width-20"
                    />
                  </i>
                  <span className="title">Setting</span>
                </a>
                </li>
            </ul>
          </div>
        </div>
           </>

            
        )
    }
}