import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import Navbar from "./Navbar/Navbar";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
} & ComponentProps<"header">;

const Header = ({
  darkMode,
  toggleDarkMode,
  className,
  children,
  ...restProps
}: Props) => {
  return (
    <header
      className={twMerge("sticky top-0 z-50 shadow", className)}
      {...restProps}
    >
      <Navbar
        darkMode={darkMode as boolean}
        toggleDarkMode={toggleDarkMode as () => void}
        className="backdrop-blur-lg"
      />
      {children}
    </header>
  );
};

export default Header;
