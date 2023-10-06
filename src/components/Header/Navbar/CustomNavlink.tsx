import { NavLink, NavLinkProps } from "react-router-dom";
import { ClassNameValue, twMerge } from "tailwind-merge";

type Props = {} & NavLinkProps;

const CustomNavlink = ({ className, children, ...restProps }: Props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          `block border-b border-gray-100 py-2 pl-3 pr-4 duration-200 hover:bg-gray-50 hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent ${
            isActive ? "text-orange-700" : "text-gray-700"
          }`,
          className as ClassNameValue
        )
      }
      {...restProps}
    >
      {children}
    </NavLink>
  );
};

export default CustomNavlink;
