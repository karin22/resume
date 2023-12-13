"use client";

import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import SideBar, { Menu } from "./SideBar";
import { FaHome } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";
import { BsFillPersonBadgeFill } from "react-icons/bs";

function useOutsideAlerter(
  ref: any,
  isOpenNav: boolean,
  setIsOpenNav: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: Event) {
      setTimeout(() => {
        if ((ref.current && !ref.current.contains(event.target), isOpenNav)) {
          setIsOpenNav(false);
        }
      }, 50);
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isOpenNav, setIsOpenNav]);
}

export default function NavBar() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const wrapperRef = useRef(null);

  const menu = useRef<Menu[]>([
    {
      name: "Home",
      linkTo: "/#home",
      icon: <FaHome />,
    },
    {
      name: "About",
      linkTo: "/#about",
      icon: <BsFillPersonBadgeFill />,
    },
    {
      name: "Skills",
      linkTo: "/#skills",
      icon: <GiSkills />,
    },
    // {
    //   name: "Education",
    //   linkTo: "/#education",
    //   icon: <MdCastForEducation />,
    // },
    {
      name: "Experience",
      linkTo: "/#education",
      icon: <SiLevelsdotfyi />,
    },

    {
      name: "Contact",
      linkTo: "/#contact",
      icon: <BiSolidContact />,
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.body.dataset.darkMode = "true";
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.body.dataset.darkMode = "";
    }
  }, []);

  const onClickMenu = () => {
    setIsOpenNav((open) => !open);
  };
  useOutsideAlerter(wrapperRef, isOpenNav, setIsOpenNav);

  const handleChange = (event: any) => {
    document.body.dataset.darkMode = event.target.checked;
    setIsDarkMode(event.target.checked);
    if (event.target.checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="h-[60px] overflow-hidden">
      <nav
        id="nav"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(7px)",
          WebkitBackdropFilter: "blur(9.8px)",
        }}
        className="inset-x-0 fixed top-0 flex flex-row justify-between z-10 transform transition-all duration-150 bg-transparent text-primary dark:text-white bg-white"
      >
        {/* <!-- Nav Items Working on Tablet & Bigger Sceen --> */}
        <div className="flex-1">
          <div className="p-4 hidden md:flex flex-row justify-center font-bold">
            {menu.current.map((e, index) => {
              return (
                <a
                  data-aos="fade-zoom-in"
                  key={e.name}
                  id="hide-after-click"
                  href={e.linkTo}
                  className="mx-4 flex items-center gap-2  border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
                >
                  {e.icon}
                  {e.name}
                </a>
              );
            })}
          </div>
        </div>
        <label
          htmlFor="dark-mode"
          className="mr-16 md:mr-10 lg:mr-16 mt-4 md:fixed md:right-0"
          data-dark-mode={isDarkMode}
        >
          <div className="switch">
            <input
              id="dark-mode"
              type="checkbox"
              checked={isDarkMode}
              onChange={handleChange}
              onClick={() => document.documentElement.classList.add("dark")}
            />
            <div className="insetcover">
              <div className="sun-moon sun"></div>
              <div className="sun-moon moon"></div>
              <div className="stars"></div>
            </div>
            <div className="sun-moon-shadow"></div>
            <div className="shadow-overlay"></div>
          </div>
        </label>

        {/* <!-- Burger Nav Button on Mobile --> */}
        <div
          className="m-4  w-max md:hidden"
          onClick={onClickMenu}
          onKeyDown={onClickMenu}
        >
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
      </nav>

      <SideBar menu={menu.current} isOpenNav={isOpenNav} ref={wrapperRef} />
    </div>
  );
}
