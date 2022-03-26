import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Admin } from "./Modules/Admin/Admin";
import { Public } from "./Modules/Public/Public";
<<<<<<< HEAD
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { UploadFile } from "./Modules/Admin/Postt/Tests/UploadFile";
import { CreateNewPost } from "./Modules/Admin/Postt/Components/CreateNewPost/CreateNewPost";
import { Editor } from "./Modules/Admin/Postt/Tests/Editor";
=======
import { LogIn } from "./Modules/Admin/Auth/Components/Login/LogIn";
import { Register } from "./Modules/Admin/Auth/Components/Register/Register";

const isLogged =
  localStorage.getItem("access_token") !== null &&
  localStorage.getItem("access_token") !== "";
>>>>>>> development


function App() {
  return (
    <>
    <Admin />
    {/* <Public /> */}
      {/* <BrowserRouter>
        <Switch>
          <Route path="/admin">
            {isLogged ? <Admin /> : <Redirect to="/admin-login" />}
          </Route>
          <Route path="/admin-login">
            {isLogged ? <Redirect to="/admin" /> : <LogIn />}
          </Route>
          <Route path="/admin-register">
            <Register />
          </Route>
          <Route path="/">
            <Public />
          </Route>
        </Switch>
      </BrowserRouter> */}
   
      
    </>
  );
}

export default App;
