"use client";

import { Timeline } from "flowbite-react";
import React, { useState } from "react";
export default function Experience() {
  const [list, setList] = useState([
    {
      year: "May 2021 - present",
      title: "Front-End Developer",
      label:
        "I'm a front-end developer at Radius company. I'm developing a responsive website using NuxtJS, Vue, and Typescript. It's a product for use within the organization.",
    },
    {
      year: "Jan 2021 - Apr 2021",
      title: "Internship",
      label:
        " Internship as a Front-end Developer at Dek-D Interactive     Co., Ltd. Participate in developing the website Dek-D using NuxtJS connect the api with GraphQL.",
    },
    {
      year: "Mar 2020 - Dec 2020",
      title: "Graduation Project",
      label:
        "(Graduation Project) Make a framework for analyzing sentimental data from online reviews, and case studies of Phuket beaches, and create a web page with VueJs, Google chart, and connecting the API with Axios.",
    },
  ]);

  return (
    <section className="pb-20 pt-10 px-4 lg:mx-0 grid place-items-center overflow-hidden container">
      <div className="w-full">
        <h1
          className="font-extrabold text-3xl sm:text-4xl text-gradient mb-6"
          data-aos="fade-zoom-in"
        >
          Experience
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
