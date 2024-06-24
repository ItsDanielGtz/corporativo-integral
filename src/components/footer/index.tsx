import { Separator } from "../ui/separator";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import { useTranslation } from "react-i18next";

function Footer() {
  const position: number[] = [21.112957, -101.668228];
  const coordsTuple: LatLngTuple = [position[0], position[1]];
  const { t } = useTranslation();
  return (
    <div>
      <footer className="bg-[#0C1235] text-white p-6 md:py-12 w-full">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold">{t("footer.title")}</h3>
          <Separator />
          <p className="py-4 ">{t("footer.description")}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:justify-between">
          <div className=" flex gap-3 md:gap-14 flex-col sm:flex-row">
            <div className="flex flex-col ">
              <label htmlFor="">CEO</label>
              <label htmlFor="">Karla González</label>
              <label htmlFor="" className="break-words">
                karlagonzalez@kmtrading.company
              </label>
              <label htmlFor="">+1 (52) 479 232 8158</label>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="">CFO</label>
              <label htmlFor="">Montserrat Soto</label>
              <label htmlFor="" className="break-words">
                montserratsoto@kmtrading.company
              </label>
              <label htmlFor="">+52 (477) 352 7292</label>
            </div>
          </div>
          <MapContainer
            center={coordsTuple}
            zoom={15}
            scrollWheelZoom={false}
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "300px",
              minHeight: "150px",
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
        </div>
      </footer>
    </div>
  );
}

export default Footer;
