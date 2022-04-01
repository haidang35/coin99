import { async } from "@firebase/util";
import axios from "axios";
import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./PostCategory.scss";
import postCategoryService from "./Services/PostCategoryService";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export class PostCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postCategoryList: [],
      isOpenDiaglog: false,
      choosedDeleteCategory: "",
      message: {
        type: '',
        content: '',
        isDisplay: false
      }
    };
  }

  componentDidMount() {
    this.getPostCategoryList();
  }

  getPostCategoryList = async () => {
    await postCategoryService
      .getList()
      .then((res) => {
        this.setState({
          postCategoryList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onChooseDeleteCategory = (category) => {
    this.setState({
      choosedDeleteCategory: category,
      isOpenDiaglog: true
    });
  }

  handleClose = () => {
    this.setState({
      isOpenDiaglog: false
    })
  }

  onDeleteCategory = async () => {
    const { choosedDeleteCategory } = this.state;
    await postCategoryService.deleteCategory(choosedDeleteCategory.Id)
      .then((res) => {
         let { message } = this.state;
         this.setState({
           isOpenDiaglog: false
         });
         this.getPostCategoryList();
      })
  }

  render() {
    const { postCategoryList, isOpenDiaglog, choosedDeleteCategory } = this.state;
    return (
      <>
        <div id="post-category">
          <div className=" wrapper main-wrapper row">
            <div className="col-lg-12">
              <section className="box">
                <header className="panel_header">
                  <h2 className="title pull-left">Post Category List</h2>
                  <div className="actions panel_actions pull-right">
                    <Link to={"/admin/post-categories/create"}>
                      <button className="btn btn-sm btn-primary">
                        Create New
                      </button>
                    </Link>
                  </div>
                </header>
                <div className="content-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <table
                          id="tech-companies-1"
                          className="table table-bordered table-striped"
                        >
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Type</th>
                              <th>Status</th>
                              <th>Created At</th>
                              <th>Updated At</th>
                            </tr>
                          </thead>
                          <tbody>
                            {postCategoryList.map((category, index) => {
                              return (
                                <tr key={category.Id}>
                                  <td>{category.Id}</td>
                                  <td>{category.Name}</td>
                                  <td>
                                    {category.CategoryType === 1
                                      ? "Free"
                                      : "Premium"}
                                  </td>
                                  <td>
                                    {category.Status === 1
                                      ? "Active"
                                      : "Deactive"}
                                  </td>
                                  <td>{category.CreatedAt}</td>
                                  <td>{category.UpdatedAt}</td>
                                  <td>
                                    <Link
                                      to={`/admin/post-categories/${category.Id}`}
                                    >
                                      <button className="btn btn-sm btn-primary">
                                        Update
                                      </button>
                                    </Link>
                                    <button onClick={() => this.onChooseDeleteCategory(category)} className="btn btn-sm btn-danger">
                                      Delete
                                    </button>
                                  </td>
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
        </div>
        <Dialog
          open={isOpenDiaglog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure delete category: {choosedDeleteCategory.Name}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Disagree</Button>
            <Button onClick={this.onDeleteCategory} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
