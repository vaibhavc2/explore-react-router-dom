import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
// import ToggleDarkModeButton from "./ToggleDarkModeButton";
import { Link } from "react-router-dom";
import CustomNavlink from "./CustomNavlink";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
} & ComponentProps<"nav">;

const Navbar = ({
  className,
  children,
  darkMode,
  toggleDarkMode,
  ...restProps
}: Props) => {
  return (
    <nav
      className={twMerge("border-gray-200 px-4 py-2.5 lg:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className="mr-3 h-12"
            alt="Logo"
          />
        </Link>
        <div className="flex items-center lg:order-2">
          <Link
            to="#"
            className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="mr-2 rounded-lg bg-orange-700 px-4 py-2 text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 lg:px-5 lg:py-2.5"
          >
            Get started
          </Link>
        </div>
        <div
          className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
          id="mobile-menu-2"
        >
          <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
            <li>
              <CustomNavlink to={"/"}>Home</CustomNavlink>
            </li>
          </ul>
        </div>

        {/* Dark Mode Toggler */}

        {/* <div className="flex items-center justify-end">
          <ToggleDarkModeButton
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div> */}

        {/*  */}
      </div>

      {children}
    </nav>
  );
};

export default Navbar;
