import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { NavItem } from "../types/types";

const NavItems = ({ navItems }: { navItems: NavItem[] }) => {
  const currentPath = useLocation();
  const navigate = useNavigate();

  function redirect(path: string) {
    if (currentPath.pathname === path) return;
    navigate(path);
  }
  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.label}
          className={clsx(
            "cursor-pointer hover:border-b hover:text-amber-300",
            currentPath.pathname === item.href
              ? "text-amber-300 border-b border-amber-300"
              : "text-white"
          )}
          onClick={() => redirect(item.href)}
        >
          {item.label}
        </button>
      ))}
    </>
  );
};

export default NavItems;
