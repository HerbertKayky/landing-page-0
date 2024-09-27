import Image from "next/image";
import couple from "/public/couple.jpg";
import gayCouple from "/public/gayCouple.jpg";
import lesbianCouple from "/public/lesbianCouple.jpg";
import wppIcon from "/public/WhatsApp_icon.png";
import Link from "next/link";

const specialtiesData = [
  {
    image: couple,
  },
  {
    image: gayCouple,
  },
  {
    image: lesbianCouple,
  },
];

export function Specialties() {
  return (
    <div className="bg-gray pt-12 w-full px-7 py-8 flex flex-wrap justify-center">
      {specialtiesData.map((service, index) => (
        <div
          className="inline-flex flex-col m-2 max-w-72 w-full sm:w-1/2 md:w-1/3"
          key={index}
        >
          <Image
            className="rounded-lg"
            src={service.image}
            alt="Casal"
            width={1000}
            quality={100}
          />
        </div>
      ))}
      <div className="m-10 max-w-lg w-full">
        <h1 className="text-quase text-4xl">Atendimento para casal</h1>
        <p className="text-gray-600 text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          repellendus est, neque deleniti ut velit molestias sunt, tenetur
          soluta, esse recusandae. Est reiciendis iste sint dignissimos commodi
          quas ipsa cupiditate?
        </p>

        <div className="inline-flex items-center px-6 py-2 rounded-lg bg-quase2 gap-3 mt-8 transition-transform hover:scale-105">
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
      </div>
    </div>
  );
}
