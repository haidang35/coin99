import { Accounts, Logins } from "./Modules/Admin/Account/Accounts";
import { Admin } from "./Modules/Admin/Admin";
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
      {/* <Admin />  */}
      {/* <Public /> */}
     
      {/* <Post /> */}
      {/* <NewBlog /> */}
      {/* <Logins /> */}
      <Accounts />
     
      
   </>
  );
}

export default App;
