

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Dashboard from './Dashboard'
import Home from './Home'
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path: "/about",
        element:<About></About>,
      },
      {
        path: "/home",
        element:<Home></Home>,
      },
      {
        path: "/countries",
        element:<Dashboard></Dashboard>,
      },
      
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router}/>
);

reportWebVitals();
