import { Separator } from "@/components/ui/separator";
import logo from "../assets/images/LogoKYM.png";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Mission() {
  return (
    <>
      <div className="flex flex-col flex-1 items-start p-5 md:w-full md:p-0 relative lg:items-center">
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
      </div>
      {/* <div className="fixed h-full w-full">
        <img
          src={logo}
          alt="Hero-Image"
          className="lg:hidden h-full w-full lg:object-contain items-start "
          width={1920}
          height={1080}
        />
        <div className="hidden absolute inset-0 bg-gray-900/40 from-gray-900/50 to-transparent" />
        <div className="absolute top-0 lg:w-[30%] left-0 transform py-8 px-5 text-azul h-full">
          <div className="flex flex-col md:w-1/2">
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
