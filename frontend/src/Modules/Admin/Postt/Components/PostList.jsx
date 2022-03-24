import React, { Component } from "react";


export class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
        }
    }

    componentDidMount() {
        this.fetchPostListApi();
    }

    fetchPostListApi = () => {
        fetch("https://coin99.azurewebsites.net/api/posts")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    postList: res
                });
            })
    }


    render() {
        const { postList } = this.state;

        return (
            <>
                <div className=" wrapper main-wrapper row">
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
                                                        <th>Title</th>
                                                        <th>Thumbnail</th>
                                                        <th>Category</th>
                                                        <th>Authorld</th>
                                                        <th>Status</th>
                                                        <th>Created At</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        postList.map((item, index) => {
                                                            return (
                                                                <tr key={item.Id}>
                                                                    <td>
                                                                        {item.Id}
                                                                    </td>
                                                                    <td>
                                                                        {item.Title}
                                                                    </td>
                                                                    <td>
                                                                        <img src={item.Thumbnail} />
                                                                        
                                                                    </td>                                                                   
                                                                    <td>
                                                                        {item.CategoryId}

                                                                    </td>
                                                                    <td>
                                                                        {item.Authorld}

                                                                    </td>
                                                                    <td>
                                                                        {item.Status}

                                                                    </td>
                                                                    <td>
                                                                        {item.CreateAt}
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
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