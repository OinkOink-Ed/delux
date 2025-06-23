import { lazy } from "react";

export const App = lazy(() => import("../App"));
export const MainPage = lazy(() => import("../Pages/MainPage"));
export const MeetTheTeam = lazy(() => import("../Pages/MeetTheTeam"));
export const Projects = lazy(() => import("../Pages/Projects"));
export const ProjectEvopartByBenefitSochi = lazy(
  () => import("../Pages/ProjectEvopartByBenefitSochi")
);
export const ProjectIsolator = lazy(() => import("../Pages/ProjectIsolator"));
export const ProjectKotelnaya = lazy(() => import("../Pages/ProjectKotelnaya"));
