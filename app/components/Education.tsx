"use client";

import { Timeline } from "flowbite-react";
import React, { useState } from "react";
export default function Education() {
  const [list, setList] = useState([
    {
      year: "2017-2020",
      title: " Prince of Songkla University,Phuket Campus",
      label:
        "S.Bc. Software engineering, Prince of Songkla University,Phuket Campus,2017-2020",
    },
  ]);

  return (
    <section className="pt-20 px-4 lg:mx-0 grid place-items-center overflow-hidden container">
      <div className="w-full">
        <h1
          className="font-extrabold text-3xl sm:text-4xl text-gradient mb-6"
          data-aos="fade-zoom-in"
        >
          Education
        </h1>

        <Timeline className="border-gray-700 w-full mx-2">
          {list.map((x, index) => {
            return (
              <React.Fragment key={x.year}>
                <Timeline.Item>
                  <div>
                    <div className="absolute -left-[1.9rem] mt-1.5 h-3 w-3 rounded-full border  bg-gray-200 border-gray-900 dark:bg-gray-700"></div>
                  </div>
                  <Timeline.Content
                    data-aos={index % 2 ? "fade-right" : "fade-left"}
                  >
                    <Timeline.Time>{x.year}</Timeline.Time>
                    <Timeline.Title>{x.title}</Timeline.Title>
                    <Timeline.Body>{x.label}</Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              </React.Fragment>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}
