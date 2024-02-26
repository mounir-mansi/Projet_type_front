import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/biblioteque_electronique",
    element: <h1>Apropos</h1>,
  },
  {
    path: "/memoire_et_histoire",
    element: <h1>Apropos</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
