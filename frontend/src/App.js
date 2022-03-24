
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Admin } from "./Modules/Admin/Admin";
import { LogIn } from "./Modules/Admin/Auth/Components/Login/LogIn";
import { Register } from "./Modules/Admin/Auth/Components/Register/Register";
import { Dashboard } from "./Modules/Admin/Dashboard/Components/Dashboard";
import { PostList } from "./Modules/Admin/Postt/Components/PostList";


import { Abouts } from "./Modules/Public/About/Abouts";
import { Contact } from "./Modules/Public/Contact/Contact";
import { CoinList } from "./Modules/Public/Home/Components/CoinList/CoinList";
import { Public } from "./Modules/Public/Public";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UploadFile } from "./Modules/Admin/Postt/Tests/UploadFile";


function App() {
  return (
   <>
   
      {/* <Public /> */}
      {/* <PostList /> */}
      {/* <NewBlog /> */}
      {/* <Logins /> */}
     
      <BrowserRouter>
      <Admin />
      <Switch>
        <Route path="/admin/login">
          <LogIn /> 

        </Route>
      <Route path="/admin/register" exact>
              <Register />
            </Route>
      </Switch>
      </BrowserRouter>
   </>
  );
}

export default App;
