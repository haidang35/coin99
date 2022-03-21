import { Admin } from "./Modules/Admin/Admin";
import { BuySell } from "./Modules/Admin/Dashboard/BuySell";
import { Coin99List } from "./Modules/Admin/Dashboard/Coin99List";
import { Dashboard } from "./Modules/Admin/Dashboard/Dashboard";
import { Abouts } from "./Modules/Public/About/Abouts";
import { Account } from "./Modules/Public/Account/Account";
import { Contact } from "./Modules/Public/Contact/Contact";
import { Page } from "./Modules/Public/Page/Page";
import { Public } from "./Modules/Public/Public";


function App() {
  return (
   <>
      <Admin /> 
      <Public />

      
      
   </>
  );
}

export default App;
