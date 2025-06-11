import { createBrowserRouter } from "react-router";
import {
  App,
  MainPage,
  // MeetTheTeam,
  Project,
  Projects,
} from "./indexLazyImport";
import { SpinnerLoad } from "../ui/SpinnerLoad";
import { Suspense } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<SpinnerLoad></SpinnerLoad>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      // {
      //   path: "meet-the-team",
      //   element: <MeetTheTeam />,
      // },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "project/:id",
        element: <Project />,
      },
    ],
    errorElement: <div>Такой страницы не существует</div>,
  },
]);
