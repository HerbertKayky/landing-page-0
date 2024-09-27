import Image from "next/image";
import manImg from "/public/psiMan.jpg";
import hugh from "/public/womanHughing.jpg";
import woman from "/public/woman2.jpg";
import wppIcon from "/public/WhatsApp_icon.png";
import Link from "next/link";

export function SpecialtiesIndividual() {
  return (
    <div className="bg-quase2 pt-10 w-full py-8 flex flex-wrap justify-center items-center mx-auto gap-8">
      <div className="m-8 max-w-lg w-full">
        <h1 className="text-yellow text-4xl">Atendimento individual</h1>
        <p className="text-gray-200 text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          repellendus est, neque deleniti ut velit molestias sunt, tenetur
          soluta, esse recusandae. Est reiciendis iste sint dignissimos commodi
          quas ipsa cupiditate?
        </p>
        <p className="text-gray-200 text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          repellendus est, neque deleniti ut velit molestias sunt, tenetur
          soluta, esse recusandae. Est reiciendis iste sint dignissimos commodi
          quas ipsa cupiditate?
        </p>

        <div className="inline-flex items-center px-6 py-2 rounded-lg bg-yellow gap-3 mt-8 transition-transform hover:scale-105">
          <Image
            src={wppIcon}
            alt="WhatsApp"
            width={40}
            priority={true}
            quality={100}
          />
          <Link className="text-quase text-xl font-medium" href="/">
            Entre em contato
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col max-w-xs w-full">
          <Image
            className="rounded-lg"
            src={manImg}
            alt="Homem"
            width={400}
            height={300}
            quality={100}
          />
        </div>

        <div className="flex flex-col space-y-4 max-w-xs w-full">
          <Image
            className="rounded-lg"
            src={hugh}
            alt="Casal abraçado"
            width={400}
            height={300}
            quality={100}
          />
          <Image
            className="rounded-lg"
            src={woman}
            alt="Mulher"
            width={400}
            height={300}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
