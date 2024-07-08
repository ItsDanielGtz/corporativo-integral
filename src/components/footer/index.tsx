import { Separator } from "../ui/separator";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <footer className="bg-[#0C1235] text-white p-6 md:py-12 w-full">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold">{t("footer.title")}</h2>
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
          <div className="flex justify-center lg:max-w-96 w-full">
            <iframe
            className="w-full h-full "
            title="ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.909902594692!2d-101.66128392575814!3d21.116157884773035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbe5506730ee9%3A0x75c575d814b540d6!2sBlvd.%20Adolfo%20L%C3%B3pez%20Mateos%201702%2C%20Zona%20Recreativa%20y%20Cultural%2C%2037500%20Le%C3%B3n%20de%20los%20Aldama%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1720299443902!5m2!1ses-419!2smx"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
