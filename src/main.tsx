import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SearchBooks from "./search-books.tsx";
import { RouterProvider, createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        index: true,
        element: <h1 className="text-3xl text-center">Välkommen</h1>,
      },
      {
        path: "search",
        Component: SearchBooks,
      },
      {
        path: "view-books",
        element: <h1 className="text-3xl text-center">View Books</h1>,
      },
      {
        path: "*",
        element: <h1 className="text-3xl text-center">Page not found</h1>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
