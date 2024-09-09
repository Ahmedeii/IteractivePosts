
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
  
//       {/* ... etc. */}
//     </Route>
//   )
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

