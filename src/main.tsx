import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './i18n';
import './index.css'
import LessonChooser from './lesson/LessonChooser.tsx';
import LessonRoute from './lesson/LessonRoute.tsx';
import { AppContextProvider } from './AppContext.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LessonChooser />,
      },
      {
        path: "/lesson/:lessonPath",
        element: <LessonRoute></LessonRoute>,
      },

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>,
)
