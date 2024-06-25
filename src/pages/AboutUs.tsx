import { Separator } from "@/components/ui/separator";
import logo from "../assets/images/LogoKYM.webp";
import { useTranslation } from "react-i18next";
import Seo from "@/components/Seo";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <>
      <Seo
        title={t("seo.aboutUs.title")}
        description={t("seo.aboutUs.description")}
        keywords={[t("seo.aboutUs.keywords", {joinArrays: ","} )]}
      />
      <div className="flex flex-col flex-1 items-start p-5 md:w-full md:p-0 relative lg:items-center">
        <img src={logo} alt="Hero-Image" className="h-full w-full" />

        <div className="hidden md:block bg-gradient-to-r from-gray-900/50 md:absolute md:inset-0  " />
        <div className="text-azul pt-5 md:absolute w-full md:flex md:justify-end lg:grid lg:grid-cols-6 lg:gap-6">
          <div className="md:w-[400px] px-5 py-6 lg:col-start-4 lg:col-span-2 lg:w-full">
            <h1 className="text-4xl font-bold mb-1  ">{t("aboutUs.title")}</h1>
            <Separator className="bg-azul" />
            <p className="text-lg mb-8 font-semibold ">
              {t("aboutUs.description")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
