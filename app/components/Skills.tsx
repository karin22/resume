import { RiVuejsFill, RiReactjsLine } from "react-icons/ri";
import { SiNuxtdotjs } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import React, { useState } from "react";

const IconSkill = "text-[56px] w-14 lg:text-[80px] lg:w-20";
export default function Skills() {
  const [list, setList] = useState([
    {
      name: "VueJS",
      icon: <RiVuejsFill className={IconSkill} />,
      color: "text-green-700",
    },
    {
      name: "NuxtJS",
      icon: <SiNuxtdotjs className={IconSkill} />,
      color: "text-green-700",
    },
    {
      name: "ReactJS",
      icon: <RiReactjsLine className={IconSkill} />,
      color: "text-blue-400",
    },
    {
      name: "NextJS",
      icon: <TbBrandNextjs className={IconSkill} />,
      color: "text-white",
    },
    {
      name: "Typescript",
      icon: <TbBrandTypescript className={IconSkill} />,
      color: "text-blue-700",
    },
  ]);
  return (
    <section className="lg:py-40 py-20 px-6 lg:mx-0  grid place-items-center overflow-hidden">
      <div>
        <h1
          className="font-extrabold text-3xl sm:text-4xl text-gradient mb-6"
          data-aos="fade-zoom-in"
        >
          Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {list.map((x, ind) => {
            return (
              <React.Fragment key={x.name}>
                <div
                  className={`${x.color} w-20 h-20 lg:w-40 lg:h-40  border-4 grid place-items-center  border-primary dark:border-white rounded-full`}
                  data-aos="fade-right"
                  data-aos-delay={100 * (ind * 2)}
                >
                  {x.icon}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
