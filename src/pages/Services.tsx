import containerImg from "@/assets/images/image1.webp";

import { services } from "@/constants";

function Services() {
  return (
    <div className="flex flex-col  py-8 px-12 lg:gap-16 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-5 ">
        <img
          src={containerImg}
          alt="container-img"
          className="object-contain"
        />
      </div>
      <div className="grid grid-cols-2 gap-x-4 pt-4 lg:col-span-7 lg:flex lg:flex-col lg-w-full">
        {services.map((service, index) => {
          return (
            <div key={index} className=" flex border-b border-azul py-5  lg:first:pt-0 lg:py-5">
              <div className="text-amarillo font-bold pl-3 pr-6">
                <service.icon />
              </div>
              <div className=" flex-1">{service.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Services