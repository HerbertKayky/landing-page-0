import Image from "next/image";
import girlCrying from "/public/girl.png";
import book from "/public/book.png";
import work from "/public/work.png";
import headRain from "/public/headRain.png";
import brokenHeart from "/public/brokenHeart.png";

const servicesData = [
  {
    image: girlCrying,
    title: "Ansiedade, Depressão, Baixa Autoestima e falta de ânimo no dia-a-dia",
  },
  {
    image: work,
    title: "Esgotamento no trabalho, dificuldade de conciliar com a vida pessoal",
  },
  {
    image: book,
    title: "Dificuldades com os estudos, término da faculdade e escolhas profissionais",
  },
  {
    image: headRain,
    title: "Falta de sentido na vida, crises emocionais sem um motivo claro",
  },
  {
    image: brokenHeart,
    title: "Dificuldade em relacionamentos (Amorosos)",
  },
];

export function Services() {
  return (
    <div className="mt-14 w-full bg-white py-8 flex flex-wrap justify-center">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center m-4 p-4 border rounded-lg shadow-md max-w-xs text-center"
        >
          <Image src={service.image} alt={service.title} width={100} quality={100} />
          <h1 className="mt-3 text-lg font-semibold">{service.title}</h1>
        </div>
      ))}
    </div>
  );
}
