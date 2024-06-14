import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import { Separator } from "../ui/separator";
import { Mail, Phone } from "lucide-react";

function Layout() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <main className="flex flex-1 ">
        <Outlet />
      </main>
      <footer className="bg-[#0C1235] text-white p-6 md:py-12 w-full">
        <div>
          <h3 className="text-2xl font-semibold">contact us</h3>
          <Separator />
          <p className="py-4 ">
            If you have questions, criticism or suggestions, please contact us
            directly.
          </p>
        </div>
        <div className="flex gap-16">
          <div className="flex  items-center  gap-3">
            <Phone className="w-9 h-9" />
            <div className="flex flex-col">
              <label htmlFor="">+1 (52) 477 352 7292</label>
              <label htmlFor="">+1 (52) 456 651 0257</label>
            </div>
          </div>
          <div className="flex  items-center  gap-3">
           
            <Mail className="w-9 h-9" />
            <div className="flex flex-col">
              <label htmlFor="">karlagonzalex@kmtrading.company</label>
              <label htmlFor="">monserratsoto@kmtrading.company</label>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
