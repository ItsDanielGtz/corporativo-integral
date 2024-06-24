import containerImg from "@/assets/images/Carrousel2.webp";
import { services } from "@/constants";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col  py-8 px-12 lg:gap-16 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-5 ">
        <img
          src={containerImg}
          alt="container-img"
          className="object-contain items-center justify-center"
        />
      </div>
      <div className="grid grid-cols-2 gap-x-4 pt-4 lg:col-span-7 lg:flex lg:flex-col lg-w-full">
        {services.map((service, index) => (
          <div key={Object.keys(service)[index]}>
            {Object.keys(service).map((key) => {
              const Icon = service[key as keyof typeof service].icon;
              return (
                <div
                  key={key}
                  className=" flex border-b border-azul py-5  lg:first:pt-0 lg:py-5"
                >
                  <div className="text-amarillo font-bold pl-3 pr-6">
                    <Icon />
                  </div>
                  <div className=" flex-1">
                    {t(`services.${key}.description`)}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
