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
              <label htmlFor="">COO</label>
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
          <div className="flex justify-center ">
            <iframe
              title="ubicación"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3721.910931155201!2d-101.65876700503703!3d21.116116884774332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses-419!2sca!4v1720043509009!5m2!1ses-419!2sca"
              style={{ border: "0" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
