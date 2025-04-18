import Navigation from "@/components/Navigation";

const Menu = () => {
  type NavItem = {
    label: string;
    href: string;
  };

  const items: NavItem[] = [
    { label: "Pratos do Dia", href: "" },
    { label: "Carnes na Brasa", href: "" },
    { label: "Massas Artesanais", href: "" },
    { label: "Acompanhamentos & Porções", href: "" },
    { label: "Lanches e Sanduíches", href: "" },
    { label: "Bebidas Naturais & Refrescos", href: "" },
    { label: "Doces da Casa", href: "" },
  ];
  return (
    <>
      <Navigation />
      <section className="bg-[#0B161A] h-screen flex flex-col">
        <div className="flex items-center md:p-20 gap-2">
          <div className="flex-grow border-t border-yellow-300" />
          <p className="uppercase text-6xl text-amber-50 font-thin ">menu</p>
          <div className="flex-grow border-t border-yellow-300" />
        </div>
        <div className="flex h-full p-6">
          {/* tags principais do menu clicaveis falta ação */}
          <div className="flex flex-col justify-around h-full w-1/6">
            {items.map((item) => {
              return (
                <button
                  key={item.label}
                  className="text-white text-left cursor-pointer hover:text-yellow-300 relative group"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              );
            })}
          </div>
          {/* Cardápio com itens */}
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Menu;
