import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Admin } from "./Modules/Admin/Admin";
import { Public } from "./Modules/Public/Public";
import { LogIn } from "./Modules/Admin/Auth/Components/Login/LogIn";
import { Register } from "./Modules/Admin/Auth/Components/Register/Register";
import "./Shared/Styles/App.scss";
import { useEffect } from "react";
import authService from "./Modules/Admin/Auth/Services/AuthService";
import { useState } from "react";

let isLogged =
  localStorage.getItem("access_token") !== null &&
  localStorage.getItem("access_token") !== "";

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(async () =>  {
    const accessToken = localStorage.getItem("access_token");
    await authService.getUserRoles(accessToken)
      .then((res) => {
        const userRoles = res.data;
        userRoles.forEach((userRole) => {
            if(userRole.RoleId === 1 || userRole.RoleId === 2) {
              setIsAdmin(true);
            }
        });
      })
  }, []);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/admin">
            {isLogged && isAdmin ? <Admin /> : <Redirect to="/admin-login" />}
          </Route>
          <Route path="/admin-login">
            {isLogged && isAdmin ? <Redirect to="/admin" /> : <LogIn />}
          </Route>
          <Route path="/admin-register">
            <Register />
          </Route>
          <Route path="/">
            <Public />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
