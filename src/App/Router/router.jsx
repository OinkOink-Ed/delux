import { createBrowserRouter } from "react-router";
import {
  App,
  MainPage,
  ProjectEvopartByBenefitSochi,
  ProjectIsolator,
  ProjectKotelnaya,
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
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "project/evopartbybenefitsochi",
        element: <ProjectEvopartByBenefitSochi />,
      },
      {
        path: "project/isolator",
        element: <ProjectIsolator />,
      },
      {
        path: "project/kotelnaya",
        element: <ProjectKotelnaya />,
      },
    ],
    errorElement: <div>Такой страницы не существует</div>,
  },
]);
