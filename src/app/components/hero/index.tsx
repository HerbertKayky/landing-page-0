import Image from "next/image";
import heroImg from "/public/pic.jpg";
import Link from "next/link";
import wppIcon from "/public/WhatsApp_icon.png";

export function Hero() {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 py-8">
      <div className="max-w-lg">
        <h1 className="text-5xl text-green mb-3 leading-tight">
          Atendimento psicológico em <br /> casal e individual
        </h1>
        <p className="text-green text-xl mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex
          suscipit velit aut omnis magnam, debitis ea corrupti consequatur.
        </p>

        {/* Botão de contato com WhatsApp */}
        <div className="inline-flex items-center px-6 py-2 rounded-lg bg-green gap-3 mt-8 transition-transform hover:scale-105">
          <Image
            src={wppIcon}
            alt="WhatsApp"
            width={40}
            priority={true}
            quality={100}
          />
          <Link className="text-white text-xl font-medium" href="/">
            Entre em contato
          </Link>
        </div>

        {/* Opções de atendimento */}
        <div className="flex mt-8 gap-4">
          <span
            className="px-5 py-2 bg-transparent rounded-lg shadow-lg"
          >
            Atendimento <br /> em casal
          </span>
          <span className="px-6 py-2 bg-quase text-white rounded-lg shadow-md">
            Atendimento <br /> individual
          </span>
        </div>
      </div>

      {/* Imagem de apresentação */}
      <div className="flex flex-col items-center">
        <Image
          className="rounded-lg"
          src={heroImg}
          alt="Foto"
          width={800} // Ajustei a largura para ser mais apropriada em telas menores
          priority={true}
          quality={100}
        />
        <span className="text-green mt-2 text-center">
          Pronta para ajudar você a superar desafios emocionais
        </span>
      </div>
    </main>
  );
}
