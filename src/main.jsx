import React from "react";
import ReactDOM from "react-dom/client";
import EditContact, { loader, action as editAction} from "./routes/edit";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from "./errorpage";
import Contact,{loader as contactLoader} from "./routes/contact";
import Root ,{loader as rootLoader, action as rootAction} from './routes/root';
import { action } from "./routes/edit";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    loader : rootLoader,
    action : rootAction,
    children : [
      {
        path : "contacts/:contactId",
        element : <Contact></Contact>,
        loader : contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element:<EditContact/>,
        loader:contactLoader,
        action:editAction,
      },     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);