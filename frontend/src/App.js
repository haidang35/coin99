import { Admin } from "./Modules/Admin/Admin";
import { Coins } from "./Modules/Admin/Coins/Coins";
import { Abouts } from "./Modules/Public/About/Abouts";
import { Account } from "./Modules/Public/Account/Account";
import { Contact } from "./Modules/Public/Contact/Contact";
import { CoinList } from "./Modules/Public/Home/Components/CoinList/CoinList";
import { Public } from "./Modules/Public/Public";


function App() {
  return (
   <>
      {/* <Admin /> 
      <Public /> */}
      <Coins />

      
      
   </>
  );
}

export default App;
