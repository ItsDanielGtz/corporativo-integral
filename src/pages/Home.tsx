import Seo from "@/components/Seo";
import { CarouselHome } from "@/components/carruselHome";
import { useTranslation } from "react-i18next";

function Home() {
  const {t} = useTranslation()
  return (
    <>
      <Seo
        title={t("seo.home.title")}
        description={t("seo.home.description")}       
        keywords={[t("seo.home.keywords", {joinArrays: ","} )]}
      />
      <div className="flex w-full">
        <CarouselHome />
      </div>
    </>
  );
}

export default Home;
