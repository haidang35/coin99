import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BASE_URL_SERVER } from "../../../../Configs/server";

export class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
    };
  }

  componentDidMount() {
    this.fetchPostListApi();
  }

  fetchPostListApi = () => {
    fetch("https://coin99.azurewebsites.net/api/posts")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          postList: res,
        });
      });
  };

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
                  <Link to={"/admin/newpost"}>
                    <button className="btn btn-sm btn-primary">
                      Create New
                    </button>
                  </Link>
                </div>
              </header>
              <div className="content-body">
                <div className="row">
                  <div className="col-md-12">
                    <div
                      className="table-responsive"
                      data-pattern="priority-columns"
                    >
                      <table
                        id="tech-companies-1"
                        className="table table-bordered table-striped"
                      >
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Thumbnail</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Authorld</th>
                            <th>Status</th>
                            <th>Created At</th>
                          </tr>
                        </thead>
                        <tbody>
                          {postList.map((item, index) => {
                            return (
                              <tr key={item.Id}>
                                <td>{item.Id}</td>
                                <td>
                                  <img src={BASE_URL_SERVER + item.Thumbnail} />
                                </td>
                                <td>{item.Title}</td>

                                <td>{item.CategoryId}</td>
                                <td>{item.Authorld}</td>
                                <td>{item.Status}</td>
                                <td>{item.CreateAt}</td>
                              </tr>
                            );
                          })}
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
    );
  }
}
