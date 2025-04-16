import Navigation from "@/components/Navigation";
import OrderNow from "@/components/OrderNow";

const Home = () => {
  return (
    <>
      <Navigation />
      <section
        className="bg-cover relative bg-opacity-70 bg-blend-multiply bg-center text-white p-10 text-center min-h-[80vh] flex flex-col items-center justify-center "
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
      >
        <div className="bg-gray-800/40 bg-blend-multiply bg-center text-white p-10 text-center min-h-[80vh] w-full flex flex-col items-center justify-center absolute">
          <p className="text-lg mb-4 font-bold max-w-xl mx-auto">
            No Rancho do Sabor, cada prato tem um gostinho de casa. Feito com
            carinho, servido com alegria.
          </p>

          <h1 className="text-5xl font-extrabold mb-4">
            Comida de Verdade, Sabor que Abraça
          </h1>

          <p className="text-lg max-w-xl font-bold mx-auto mb-6">
            A gente acredita que a melhor comida é aquela que te faz lembrar da
            infância, da roça, da vó... e deixa a barriga e o coração
            quentinhos.
          </p>
          <OrderNow />
        </div>
      </section>
      <section className="bg-[#0B161A] h-screen grid grid-cols-3 grid-rows-2">
        <div
          className="text-white col-span-3 flex flex-col pt-4 gap-4
         justify-start items-center"
        >
          <p className="great-vibes-regular text-3xl">Momentos especiais</p>
          <h2 className="roboto font-thin uppercase tracking-[2rem] text-5xl">
            Sobre Nós
          </h2>
        </div>
      </section>
    </>
  );
};

export default Home;
