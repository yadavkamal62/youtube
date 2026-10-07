import React from "react";
import { Provider } from "react-redux"; // Added missing import
import Body from "./comonents/Body";
import Head from "./comonents/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./comonents/MainContainer";
import Watchpage from "./comonents/Watchpage";

const appRouter =createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    
    {
      path:"/",
      element:<MainContainer/>,
      
    },{
      path:"watch",
      element:<Watchpage/>
    }

  ]
}])

function App() {
  return (
    <Provider store={store}>
      <Head />
     <RouterProvider router ={appRouter}/>
    </Provider>
  );
}

export default App;