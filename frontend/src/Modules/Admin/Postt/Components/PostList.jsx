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
                <div className="container">
                    <div className="panel panel-success">
                        <div className="panel-heading">Blog List</div>
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th style={{ width: '20%' }} className="text-center">#</th>
                                    <th>Name</th>
                                    <th style={{ width: '20%' }} className="text-center">Level</th>
                                    <th style={{ width: '20%' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td>Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết</td>
                                    <td className="text-center"><span className="label label-danger">High</span></td>
                                    <td>
                                        <button type="button" className="btn btn-danger btn-sm">Edit</button>
                                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">2</td>
                                    <td>Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018</td>
                                    <td className="text-center"><span className="label label-default">Small</span></td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-sm">Edit</button>
                                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td>Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo</td>
                                    <td className="text-center">
                                        <span className="label label-info">
                                            Medium
                                        </span>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-sm">Edit</button>
                                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">4</td>
                                    <td>Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết</td>
                                    <td className="text-center"><span className="label label-info">Medium</span></td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-sm">Edit</button>
                                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">5</td>
                                    <td>VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết</td>
                                    <td className="text-center"><span className="label label-info">Medium</span></td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-sm">Edit</button>
                                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </>
        )
    }
}