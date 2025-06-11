import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./App/Router/router.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
