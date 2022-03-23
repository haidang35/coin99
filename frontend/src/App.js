import { Admin } from "./Modules/Admin/Admin";
import { Dashboard } from "./Modules/Admin/Dashboard/Components/Dashboard";
import { Abouts } from "./Modules/Public/About/Abouts";
import { Account } from "./Modules/Public/Account/Account";
import { LogIn } from "./Modules/Public/Account/Components/LogIn";
import { Contact } from "./Modules/Public/Contact/Contact";
import { CoinList } from "./Modules/Public/Home/Components/CoinList/CoinList";
import { Public } from "./Modules/Public/Public";


function App() {
  return (
   <>
      {/* <Admin />  */}
      <Public />
      
   </>
  );
}

export default App;
