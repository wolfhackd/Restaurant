import Navigation from "@/components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import teste1 from "../assets/teste1.jpeg";
import teste2 from "../assets/teste2.jpeg";
import teste3 from "../assets/teste3.jpeg";
import teste4 from "../assets/teste4.jpeg";
import teste5 from "../assets/teste5.jpeg";

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

  const products = [
    {
      img: teste4,
      title: "Hambúrguer Artesanal",
      description: "Pão brioche, carne 180g e cheddar",
      price: 24.9,
    },
    {
      img: teste2,
      title: "Pizza Calabresa",
      description: "Molho artesanal, queijo e calabresa",
      price: 39.9,
    },
    {
      img: teste3,
      title: "Tapioca Nordestina",
      description: "Com queijo coalho e carne de sol",
      price: 18.0,
    },
    {
      img: teste1,
      title: "Açaí Tradicional",
      description: "500ml com banana e granola",
      price: 15.9,
    },
    {
      img: teste5,
      title: "Coxinha de Frango",
      description: "Massa leve com recheio cremoso",
      price: 6.0,
    },
    {
      img: teste4,
      title: "Hambúrguer Artesanal",
      description: "Pão brioche, carne 180g e cheddar",
      price: 24.9,
    },
    {
      img: teste2,
      title: "Pizza Calabresa",
      description: "Molho artesanal, queijo e calabresa",
      price: 39.9,
    },
    {
      img: teste3,
      title: "Tapioca Nordestina",
      description: "Com queijo coalho e carne de sol",
      price: 18.0,
    },
    {
      img: teste1,
      title: "Açaí Tradicional",
      description: "500ml com banana e granola",
      price: 15.9,
    },
    {
      img: teste5,
      title: "Coxinha de Frango",
      description: "Massa leve com recheio cremoso",
      price: 6.0,
    },
    {
      img: teste4,
      title: "Hambúrguer Artesanal",
      description: "Pão brioche, carne 180g e cheddar",
      price: 24.9,
    },
    {
      img: teste2,
      title: "Pizza Calabresa",
      description: "Molho artesanal, queijo e calabresa",
      price: 39.9,
    },
    {
      img: teste3,
      title: "Tapioca Nordestina",
      description: "Com queijo coalho e carne de sol",
      price: 18.0,
    },
    {
      img: teste1,
      title: "Açaí Tradicional",
      description: "500ml com banana e granola",
      price: 15.9,
    },
    {
      img: teste5,
      title: "Coxinha de Frango",
      description: "Massa leve com recheio cremoso",
      price: 6.0,
    },
  ];

  const format = (price: number) => {
    const priceFormate = price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return priceFormate;
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <section className="bg-[#0B161A] flex-grow flex flex-col overflow-hidden">
          <div className="flex items-center md:p-20 gap-2">
            <div className="flex-grow border-t border-yellow-300" />
            <p className="uppercase text-6xl text-amber-50 font-thin ">menu</p>
            <div className="flex-grow border-t border-yellow-300" />
          </div>
          <div className="flex bg-[#0B161A] h-screen p-6">
            {/* tags principais do menu clicaveis falta ação */}
            {/* Componente-t */}
            <div className="flex flex-col justify-around w-1/6">
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
            {/* Componente-t */}
            <div className="ml-2 grid md:grid-cols-6 gap-8 w-5/6 overflow-auto hide-scrollbar flex-grow">
              {products.map((item) => {
                return (
                  <div className="bg-gray-800/40 flex flex-col p-4 h-fit rounded-md transition text-white hover:bg-orange-400/70 ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-md"
                    />
                    <h2 className="text-left font-semibold">{item.title}</h2>
                    <span className="truncate font-semibold text-gray-400">
                      {item.description}
                    </span>
                    <div className="flex justify-around items-center mt-4 font-semibold">
                      <span>{format(item.price)}</span>
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Menu;
