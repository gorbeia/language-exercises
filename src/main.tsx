import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './i18n';
import './index.css'
import LessonChooser from './lesson/LessonChooser.tsx';
import Practice from './lesson/Lesson.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LessonChooser />,
      },
      {
        path: "/practice/:practice",
        element: <Practice></Practice>,
      },

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
