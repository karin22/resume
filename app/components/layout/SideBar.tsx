import React, { LegacyRef } from "react";
export interface Menu {
  name: string;
  linkTo: string;
  icon: JSX.Element;
}

export interface PropsSideBar {
  isOpenNav: boolean;
  menu: Menu[];
}

// eslint-disable-next-line react/display-name
const SideBar = React.forwardRef(
  (props: PropsSideBar, wrapperRef: LegacyRef<HTMLElement> | undefined) => {
    return (
      <aside
        id="nav-opened"
        ref={wrapperRef}
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(7px)",
        }}
        className={`rounded-md md:hidden top-0 fixed  right-0 z-50 w-72 h-screen flex-col justify-between transform duration-200 ${
          props.isOpenNav
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-96"
        }`}
      >
        <div className="bg-white dark:bg-back-side-bar h-full text-primary  dark:text-white">
          <div className="flex  justify-center py-10 shadow-sm pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <div className="pl-2">
              <h1 className="text-2xl font-bold ">VENUS</h1>
              <span className="text-xs block ">DASHBOARD</span>
            </div>
          </div>
          <div className="pl-10">
            <ul className="space-y-8 pt-10">
              {props.menu.map((e) => {
                return (
                  <li
                    key={e.name}
                    className="flex space-x-4 items-center cursor-pointer "
                  >
                    {e.icon}
                    <a href={e.linkTo}>{e.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
    );
  }
);
export default SideBar;
