import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import imgMission from "@/assets/images/mision-image.webp"

function Mission() {
  const { t } = useTranslation();

  return (
    <>
      <link rel="preload" href="./src/assets/images/mision-image.webp" as="image" />
      <div
        className="relative h-screen w-full bg-cover  bg-center flex flex-col justify-center items-center text-white "
        style={{
          backgroundImage: `url(${imgMission})`,
        }}
      >
        <div className=" bg-gradient-to-r from-gray-900/50 absolute inset-0" />

        <div className="text-white absolute max-w-2xl flex ">
          <div className=" px-5 py-6  w-full">
            <h1 className="text-5xl font-bold mb-1 text-center">
              {t("mission.title")}
            </h1>
            <Separator className="bg-azul" />
            <p className="text-lg mb-8 font-semibold">
              {t("mission.description")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
