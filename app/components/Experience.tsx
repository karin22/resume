"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Experience() {
  return (
    <div className="py-20 px-6 lg:mx-0 lg:h-screen grid place-items-center overflow-hidden">
      <div>
        <h1
          className="font-extrabold text-3xl sm:text-4xl text-gradient mb-6"
          data-aos="fade-zoom-in"
        >
          Education
        </h1>
        <Timeline className="border-gray-700">
          <Timeline.Item>
            <div>
              <div className="absolute -left-[1.9rem] mt-1.5 h-3 w-3 rounded-full border  bg-gray-200 border-gray-900 dark:bg-gray-700"></div>
            </div>
            <Timeline.Content data-aos="fade-left">
              <Timeline.Time>February 2022</Timeline.Time>
              <Timeline.Title>
                Application UI code in Tailwind CSS
              </Timeline.Title>
              <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <div>
              <div className="absolute -left-[1.9rem] mt-1.5 h-3 w-3 rounded-full border  bg-gray-200 border-gray-900 dark:bg-gray-700"></div>
            </div>
            <Timeline.Content data-aos="fade-right">
              <Timeline.Time>March 2022</Timeline.Time>
              <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
              <Timeline.Body>
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <div>
              <div className="absolute -left-[1.9rem] mt-1.5 h-3 w-3 rounded-full border  bg-gray-200 border-gray-900 dark:bg-gray-700"></div>
            </div>
            <Timeline.Content data-aos="fade-left">
              <Timeline.Time>April 2022</Timeline.Time>
              <Timeline.Title>
                E-Commerce UI code in Tailwind CSS
              </Timeline.Title>
              <Timeline.Body>
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}
