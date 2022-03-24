
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Admin } from "./Modules/Admin/Admin";
import { LogIn } from "./Modules/Admin/Auth/Components/Login/LogIn";
import { Register } from "./Modules/Admin/Auth/Components/Register/Register";
import { Dashboard } from "./Modules/Admin/Dashboard/Components/Dashboard";
import { NewBlog } from "./Modules/Admin/Postt/Components/NewBlog";

import { Post } from "./Modules/Admin/Postt/Post";
import { Abouts } from "./Modules/Public/About/Abouts";
import { Contact } from "./Modules/Public/Contact/Contact";
import { CoinList } from "./Modules/Public/Home/Components/CoinList/CoinList";
import { Public } from "./Modules/Public/Public";



function App() {
  return (
   <>
   
      {/* <Public /> */}
     
      {/* <Post /> */}
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
