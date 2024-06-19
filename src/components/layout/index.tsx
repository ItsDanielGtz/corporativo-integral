import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import { Separator } from "../ui/separator";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

function Layout() {
  const position: number[] = [21.112957, -101.668228];
  const coordsTuple: LatLngTuple = [position[0], position[1]];
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
          <div className="flex items-center col-span-12 md:col-span-6 lg:col-span-4 gap-3">
            <div className="flex flex-col">
              <label htmlFor="">CEO</label>
              <label htmlFor="">Karla González</label>
              <label htmlFor="">karlagonzalez@kmtrading.company</label>
              <label htmlFor="">+1 (52) 479 232 8158</label>
            </div>
          </div>
          <div className="flex  items-center col-span-12 md:col-span-6 lg:col-span-4   gap-3">
            <div className="flex flex-col">
              <label htmlFor="">CFO</label>
              <label htmlFor="">Montserrat Soto</label>
              <label htmlFor="">montserratsoto@kmtrading.company</label>
              <label htmlFor="">+52 (477) 352 7292</label>
            </div>
          </div>
          <div className="col-span-11 md:col-span-11 lg:col-span-4 gap-3">
            {/* <div className="flex justify-center items-center overflow-hidden w-full"> */}
            <MapContainer
              center={coordsTuple}
              zoom={13}
              scrollWheelZoom={false}
              style={{
                height: "100%",
                width: "100%",
                maxWidth: "300px",
                minHeight: "100px",
                display: "flex",
              }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={coordsTuple}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            {/* </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
