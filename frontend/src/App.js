
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Admin } from "./Modules/Admin/Admin";
import { Register } from "./Modules/Admin/Auth/Components/Register/Register";
import { PostList } from "./Modules/Admin/Postt/Components/PostList";
import { Abouts } from "./Modules/Public/About/Abouts";
import { Contact } from "./Modules/Public/Contact/Contact";
import { CoinList } from "./Modules/Public/Home/Components/CoinList/CoinList";
import { Public } from "./Modules/Public/Public";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UploadFile } from "./Modules/Admin/Postt/Tests/UploadFile";
import { CreateNewPost } from "./Modules/Admin/Postt/Components/CreateNewPost/CreateNewPost";
import { Editor } from "./Modules/Admin/Postt/Tests/Editor";
import { Load } from "./Modules/Admin/Postt/Tests/Load";



function App() {
  return (
   <>
   
      {/* <Public /> */}
      
     <Admin />
      
{/*      
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
      </BrowserRouter> */}
      {/* <PostList /> */}
      
   </>
  );
}

export default App;
