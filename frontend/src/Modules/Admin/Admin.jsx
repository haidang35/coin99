import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LogIn } from "./Auth/Components/Login/LogIn";
import { Coins } from "./Coins/Coins";
import { Dashboard } from "./Dashboard/Components/Dashboard";
import { Post } from "./Post/Post";
import styles from "./Shared/Styles/Admin.scss";
import { Header } from "./Shared/Styles/Layouts/Header";
import { Sidebar } from "./Shared/Styles/Layouts/Sidebar";
import { Register } from "./Auth/Components/Register/Register";
import { CreateNewPost } from "./Post/Components/CreateNewPost/CreateNewPost";
import { PostCategory } from "./PostCategory/PostCategory";
import { CreatePostCategory } from "./PostCategory/Components/CreatePostCategory/CreatePostCategory";
import { useState } from "react";
import authService from "./Auth/Services/AuthService";
import UpdatePost from "./Post/Components/UpdatePost/UpdatePost";
import { TrashPost } from "./Post/Components/TrashPost/TrashPost";
import { User } from "./User/User";
import { NewUser } from "./User/Components/NewUser/NewUser";
import UserDetails from "./User/Components/UserDetails/UserDetails";

export function Admin() {
  const [currentUser, setCurrentUser] = useState({});
  useState(async () => {
    const accessToken = localStorage.getItem("access_token");
    await authService
      .getAuthUser(accessToken)
      .then(async (res) => {
        const currentUserData = res.data;
        localStorage.setItem("current_user_id", res.data.Id);
        setCurrentUser(currentUserData);
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />
      <div className="page-container row-fluid container-fluid">
        <Sidebar />
        <section id="main-content" className=" ">
          <Switch>
            <Route path="/admin" exact>
              <Redirect to="/admin/dashboard" />
            </Route>
            <Route path="/admin/coins" exact>
              <Coins />
            </Route>
            <Route path="/admin/dashboard" exact>
              <Dashboard />
            </Route>
            <Route path="/admin/posts" exact>
              <Post />
            </Route>
            <Route path="/admin/posts/trash" exact>
              <TrashPost />
            </Route>
            <Route path="/admin/posts/:id" exact>
              <UpdatePost />
            </Route>
            <Route path="/admin/newpost" exact>
              <CreateNewPost />
            </Route>
            <Route path="/admin/post-categories" exact>
              <PostCategory />
            </Route>
            <Route path="/admin/post-categories/create" exact>
              <CreatePostCategory />
            </Route>
            <Route path="/admin/users" exact>
              <User />
            </Route>
            <Route path="/admin/users/:id" exact>
              <UserDetails />
            </Route>
            <Route path="/admin/users/create" exact>
              <NewUser />
            </Route>
          </Switch>
        </section>
        <div className="page-chatapi hideit">
          <div className="search-bar">
            <input type="text" placeholder="Search" className="form-control" />
          </div>
          <div className="chat-wrapper">
            <h4 className="group-head">Favourites</h4>
            <ul className="contact-list">
              <li className="user-row " id="chat_user_1" data-user-id={1}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-1.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Joge Lucky</a>
                  </h4>
                  <span className="status available" data-status="available">
                    {" "}
                    Available
                  </span>
                </div>
                <div className="user-status available">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_2" data-user-id={2}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-2.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Folisise Chosiel</a>
                  </h4>
                  <span className="status away" data-status="away">
                    {" "}
                    Away
                  </span>
                </div>
                <div className="user-status away">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_3" data-user-id={3}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-3.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Aron Gonzalez</a>
                  </h4>
                  <span className="status busy" data-status="busy">
                    {" "}
                    Busy
                  </span>
                </div>
                <div className="user-status busy">
                  <i className="fa fa-circle" />
                </div>
              </li>
            </ul>
            <h4 className="group-head">More Contacts</h4>
            <ul className="contact-list">
              <li className="user-row " id="chat_user_4" data-user-id={4}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-4.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Chris Fox</a>
                  </h4>
                  <span className="status offline" data-status="offline">
                    {" "}
                    Offline
                  </span>
                </div>
                <div className="user-status offline">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_5" data-user-id={5}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-5.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Mogen Polish</a>
                  </h4>
                  <span className="status offline" data-status="offline">
                    {" "}
                    Offline
                  </span>
                </div>
                <div className="user-status offline">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_6" data-user-id={6}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-1.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Smith Carter</a>
                  </h4>
                  <span className="status available" data-status="available">
                    {" "}
                    Available
                  </span>
                </div>
                <div className="user-status available">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_7" data-user-id={7}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-2.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Amilia Gozenal</a>
                  </h4>
                  <span className="status busy" data-status="busy">
                    {" "}
                    Busy
                  </span>
                </div>
                <div className="user-status busy">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_8" data-user-id={8}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-3.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Tahir Jemyship</a>
                  </h4>
                  <span className="status away" data-status="away">
                    {" "}
                    Away
                  </span>
                </div>
                <div className="user-status away">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_9" data-user-id={9}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-4.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Johanson Wright</a>
                  </h4>
                  <span className="status busy" data-status="busy">
                    {" "}
                    Busy
                  </span>
                </div>
                <div className="user-status busy">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_10" data-user-id={10}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-5.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Loni Tindall</a>
                  </h4>
                  <span className="status away" data-status="away">
                    {" "}
                    Away
                  </span>
                </div>
                <div className="user-status away">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_11" data-user-id={11}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-1.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Natcho Herlaey</a>
                  </h4>
                  <span className="status idle" data-status="idle">
                    {" "}
                    Idle
                  </span>
                </div>
                <div className="user-status idle">
                  <i className="fa fa-circle" />
                </div>
              </li>
              <li className="user-row " id="chat_user_12" data-user-id={12}>
                <div className="user-img">
                  <a href="#">
                    <img src="../data/profile/avatar-2.png" alt="" />
                  </a>
                </div>
                <div className="user-info">
                  <h4>
                    <a href="#">Shakira Swedan</a>
                  </h4>
                  <span className="status idle" data-status="idle">
                    {" "}
                    Idle
                  </span>
                </div>
                <div className="user-status idle">
                  <i className="fa fa-circle" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="chatapi-windows "></div>
      </div>
    </BrowserRouter>
  );
}
