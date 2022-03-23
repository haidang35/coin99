import { Admin } from "./Modules/Admin/Admin";
import { Dashboard } from "./Modules/Admin/Dashboard/Components/Dashboard";
import { Abouts } from "./Modules/Public/About/Abouts";
import { Account } from "./Modules/Public/Account/Account";
import { LogIn } from "./Modules/Admin/Login/LogIn";
import { Contact } from "./Modules/Public/Contact/Contact";
import { CoinList } from "./Modules/Public/Home/Components/CoinList/CoinList";
import { Public } from "./Modules/Public/Public";
import { Logins } from "./Modules/Admin/Login/Logins";


function App() {
  return (
   <>
      {/* <Admin />  */}
      {/* <Public /> */}
      <Logins />
      
   </>
  );
}

export default App;
