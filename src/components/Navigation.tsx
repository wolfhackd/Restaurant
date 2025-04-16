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
  return (
    <>
      <div className="bg-[#0B161A] text-white sm:flex sm:justify-around p-1">
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
