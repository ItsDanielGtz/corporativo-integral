import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import imgVision from "@/assets/images/vision-image-2.webp"


function Vision() {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white "
        style={{
          backgroundImage: `url(${imgVision})`,
        }}
      >
        <div className="bg-gradient-to-r from-gray-900/80 absolute inset-0" />

        <div className="text-white absolute max-w-2xl flex">
          <div className="px-5 py-6 w-full">
            <h1 className="text-5xl font-bold mb-1 text-center">
              {t("vision.title")}
            </h1>
            <Separator className="bg-azul" />
            <p className="text-lg mb-8 font-semibold">
              {t("vision.description")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vision;
