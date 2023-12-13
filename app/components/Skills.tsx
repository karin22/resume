import { RiVuejsFill, RiReactjsLine } from "react-icons/ri";
import { SiNuxtdotjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";

export default function Skills() {
  return (
    <section className="py-20 px-6 lg:mx-0 lg:h-screen grid place-items-center overflow-hidden">
      <div>
        <h1
          className="font-extrabold text-3xl sm:text-4xl text-gradient mb-6"
          data-aos="fade-zoom-in"
        >
          Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          <div
            className="text-green-700 w-20 h-20 lg:w-40 lg:h-40  border-4 grid place-items-center  border-primary dark:border-white rounded-full"
            data-aos="fade-right"
          >
            <RiVuejsFill className="text-[56px] w-14 lg:text-[80px] lg:w-20" />
          </div>
          <div
            className="text-green-700 w-20 h-20 lg:w-40 lg:h-40  border-4 grid place-items-center  border-primary dark:border-white rounded-full"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <SiNuxtdotjs className="text-[56px] w-14 lg:text-[80px] lg:w-20 " />
          </div>
          <div
            className="text-blue-400 w-20 h-20 lg:w-40 lg:h-40  border-4 grid place-items-center  border-primary dark:border-white rounded-full"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <RiReactjsLine className="text-[56px] w-14 lg:text-[80px] lg:w-20 " />
          </div>
          <div
            className="text-white w-20 h-20 lg:w-40 lg:h-40  border-4 grid place-items-center  border-primary dark:border-white rounded-full"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <TbBrandNextjs className="text-[56px] w-14 lg:text-[80px] lg:w-20 " />
          </div>
          <div
            className="text-blue-700 w-20 h-20 lg:w-40 lg:h-40  border-4 grid place-items-center  border-primary dark:border-white rounded-full"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <TbBrandTypescript className="text-[56px] w-14 lg:text-[80px] lg:w-20 " />
          </div>
        </div>
      </div>
    </section>
  );
}
