import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import ProjectPage from './pages/ProjectPage';
import HeroPage from './pages/HeroPage';
import MainPage from './pages/MainPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter( [
  { 
    path: '/',
    element: <HeroPage/>
  },
  {
    path:'/home',
    element:<MainPage/>
  },
  {
    path:"/projects",
    element: <ProjectPage/>
  },
  {
    path:'/about',
    element:<MainPage/>
  },
  {
    path: '/blog',
    element:<MainPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
