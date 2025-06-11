import { Outlet, ScrollRestoration } from "react-router";
import { NavBar } from "./ui/NavBar";
import { Footer } from "./ui/Footer";

export default function App() {
  return (
    <>
      <ScrollRestoration />
      <main className="flex flex-col w-full h-auto">
        <NavBar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
