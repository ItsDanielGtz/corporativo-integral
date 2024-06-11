import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

function Layout() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <section className="flex flex-1">
        <Outlet />
      </section>
    </div>
  );
}

export default Layout;
