import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./hoc/AuthProvider";
import  router from './router';

function App() {
    // перезагрузка
  //   window.addEventListener('beforeunload', (event) => {
  //     event.preventDefault();
  //     event.returnValue = '';
  //   });
  
  
    
    return (
      <>
      <div>
        <h1>Get start with React-Router 6</h1>
      </div>
  
      <AuthProvider>
        {/* монтируем наш новый роутер */}
          <RouterProvider router={router}/>
      </AuthProvider>
      
      {/* <a href='/page'>ссылка на page = перезагрузка</a> */}
      </>
    )
  }

  export default App;