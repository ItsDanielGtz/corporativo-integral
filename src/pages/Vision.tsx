import { Separator } from "@/components/ui/separator";

function Vision() {
  return (
    <>
      <div
        className="relative h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-white "
        style={{
          backgroundImage: "url('./src/assets/images/vision-image-2.jpeg')",
        }}
      >
        <div className="bg-gradient-to-r from-gray-900/80 absolute inset-0" />


        <div className="text-white absolute max-w-2xl flex">
          <div className="px-5 py-6 w-full">
            <h1 className="text-5xl font-bold mb-1 text-center">Vision</h1>
            <Separator className="bg-azul" />
            <p className="text-lg mb-8 font-semibold">
              To Place the company as the number one in integral services in
              international commerce thanks to the commitment and
              professionalism that allows us to create long-term links with our
              clients.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col flex-1 items-start p-5 md:w-full md:p-0 relative lg:justify-center">
        <div className="flex w-full">
          <img
            src={vision}
            alt="Vision-Image"
            className="w-full h-[500px] object-cover"
            // width={1200}
            height={500}
          />
        </div>

        <div className="hidden md:block bg-gradient-to-r from-gray-900/50 md:absolute md:inset-0" />

        <div className="text-white pt-5 md:absolute w-full md:flex md:justify-end lg:grid lg:grid-cols-6 lg:gap-6">
          <div className="md:w-[400px] px-5 py-6 lg:col-start-4 lg:col-span-2 lg:w-full">
            <h1 className="text-4xl font-bold mb-1">Vision</h1>
            <Separator className="bg-azul" />
            <p className="text-lg mb-8 font-semibold">
              To Place the company as the number one in integral services in
              international commerce thanks to the commitment and
              professionalism that allows us to create long-term links with our
              clients.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Vision;
