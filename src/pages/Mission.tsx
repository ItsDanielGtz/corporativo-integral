import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

function Mission() {

  const {t, i18n} = useTranslation()

  return (
    <>
      <div
        className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white "
        style={{
          backgroundImage: "url('./src/assets/images/mision-image.jpg')",
        }}
      >
        <div className=" bg-gradient-to-r from-gray-900/50 absolute inset-0" />

        <div className="text-white absolute max-w-2xl flex ">
          <div className=" px-5 py-6  w-full">
            <h1 className="text-5xl font-bold mb-1 text-center">{t("mission.title")}</h1>
            <Separator className="bg-azul" />
            <p className="text-lg mb-8 font-semibold">
              {t("mission.description")}
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col flex-1 items-start p-5 md:w-full md:p-0 relative lg:items-center">
        <img
          src={logo}
          alt="Hero-Image"
          className="h-full "
          // width={1920}
          // height={1080}
        />

        <div className="hidden md:block bg-gradient-to-r from-gray-900/50 md:absolute md:inset-0  " />
        <div className="text-azul pt-5 md:absolute w-full md:flex md:justify-end lg:grid lg:grid-cols-6 lg:gap-6">
          <div className="md:w-[400px] px-5 py-6 lg:col-start-4 lg:col-span-2 lg:w-full">
            <h1 className="text-4xl font-bold mb-1  ">Mission</h1>
            <Separator className="bg-azul" />
            <p className="text-lg mb-8 font-semibold ">
              To Provide international markets with Mexican products of the
              highest quality through planning, coordination and professional
              logistic systems.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Mission;
