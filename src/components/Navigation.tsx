import { useEffect, useState } from "react";
import OrderNow from "./OrderNow";

const Navigation = () => {
  type NavItem = {
    label: string;
    href: string;
  };

  const navItems: NavItem[] = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Cardápio", href: "/menu" },
  ];

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`bg-[#0B161A] text-white sm:flex sm:justify-around md:fixed p-1 md:top-0 z-50 transition-transform duration-300 w-full md:${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col uppercase roboto mx-4 w-screen sm:w-fit">
          <h1 className="font-bold text-center text-4xl sm:text-2xl">
            Rancho do Sabor
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex-grow border-t border-yellow-300" />
            <span className="text-sm uppercase">O MELHOR DA REGIÃO</span>
            <div className="flex-grow border-t border-yellow-300" />
          </div>
        </div>
        <nav className="flex justify-around pb-2 sm:justify-between font-bold roboto w-full sm:w-1/4">
          {navItems.map((item) => {
            return (
              <button
                key={item.label}
                className="text-white hover:text-amber-300 cursor-pointer hover:border-b"
              >
                {item.label}
              </button>
            );
          })}
        </nav>
        <OrderNow />
      </div>
    </>
  );
};

export default Navigation;
