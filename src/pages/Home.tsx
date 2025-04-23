import Navigation from "@/components/Navigation";
import comida1 from "../assets/comida-1.avif";
import comida2 from "../assets/comida-2.avif";
import bgHero from "../assets/bg-hero.jpg";

const Home = () => {
  return (
    <>
      <Navigation />
      <section
        className="bg-cover relative bg-opacity-70 bg-blend-multiply bg-center text-white p-10 text-center min-h-[80vh] flex flex-col items-center justify-center "
        style={{ backgroundImage: `url(${bgHero})` }}
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
        </div>
      </section>
      <section className="bg-[#0B161A] h-screen flex flex-col justify-center items-center">
        <div
          className="text-white col-span-3 flex flex-col pt-4 gap-4
         justify-center items-center mb-10"
        >
          <p className="text-sm italic text-gray-300">Momentos especiais</p>
          <h2 className="text-3xl tracking-wide uppercase font-light">
            Sobre Nós
          </h2>
        </div>
        <div className="md:grid md:grid-cols-[1fr_1fr_1fr] gap-10 mx-auto px-40">
          {/* Imagem direita */}
          <div
            className="bg-cover h-[40rem] bg-no-repeat hidden md:block"
            style={{ backgroundImage: `url(${comida1})` }}
          ></div>

          {/* Texto central */}
          <div className="text-white bg-[#0f1e24] h-[40rem] flex flex-col justify-center items-center py-10 gap-6">
            <p className="great-vibes-regular text-2xl"> A moda da casa</p>
            <p className=" uppercase text-5xl font-medium text-center py-8">
              Tradicional & Moderno
            </p>
            <p className="roboto text-center text-gray-400">
              A gente acredita que comida boa vai muito além do tempero. É
              carinho no preparo, respeito pela tradição e amor em cada detalhe.
            </p>
          </div>

          {/* Imagem esquerda */}
          <div
            className="h-[40rem] bg-cover hidden md:block"
            style={{ backgroundImage: `url(${comida2})` }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Home;
