import { Accounts, Logins } from "./Modules/Admin/Account/Accounts";
import { Admin } from "./Modules/Admin/Admin";
import { Dashboard } from "./Modules/Admin/Dashboard/Components/Dashboard";
import { NewBlog } from "./Modules/Admin/Postt/Components/NewBlog";
import { PostList } from "./Modules/Admin/Postt/Components/PostList";

import { Post } from "./Modules/Admin/Postt/Post";
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
      {/* <Admin />  */}
      {/* <Public /> */}
      {/* <PostList /> */}
      {/* <NewBlog /> */}

      {/* <h2>Using CKEditor 5 build in React</h2> */}
                {/* <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /> */}
    <UploadFile />
   </>
  );
}

export default App;
