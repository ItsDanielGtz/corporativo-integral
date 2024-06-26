import containerImg from "@/assets/images/Carrousel2.webp";
import Seo from "@/components/Seo";
import { services } from "@/constants";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t("seo.services.title")}
        description={t("seo.services.description")}
        keywords={[t("seo.services.keywords", { joinArrays: "," })]}
      />
      <div className="flex flex-col  py-5 px-5 lg:px-12 lg:py-8 lg:gap-16 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-5 ">
          <img
            src={containerImg}
            alt="container-img"
            className="object-contain items-center justify-center"
          />
        </div>
        <div className="pt-4 lg:col-span-7 lg:flex lg:flex-col lg-w-full">
          {services.map((service, index) => (
            <div
              key={Object.keys(service)[index]}
              className="grid grid-cols-2 gap-3 lg:flex lg:flex-col lg:gap-0"
            >
              {Object.keys(service).map((key) => {
                const Icon = service[key as keyof typeof service].icon;
                return (
                  <div
                    key={key}
                    className=" flex border-b border-azul py-5  lg:first:pt-0 lg:py-5 "
                  >
                    <div className="text-amarillo font-bold pl-3 pr-6">
                      <Icon />
                    </div>
                    <p className=" flex-1 ">
                      {t(`services.${key}.description`)}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
