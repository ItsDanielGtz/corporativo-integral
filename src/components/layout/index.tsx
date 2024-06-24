import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

import "leaflet/dist/leaflet.css";
import Footer from "../footer";

function Layout() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <main className="flex flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
