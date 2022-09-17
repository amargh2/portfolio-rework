import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProjectPage from './components/ProjectPage';
import HeroPage from './components/hero-page';
import MainPage from './components/MainPage';

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
