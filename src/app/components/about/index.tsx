import Image from "next/image";
import womanPosing from "/public/womanPosing2.jpg";
import wppIcon from "/public/WhatsApp_icon.png";
import Link from "next/link";

export function About() {
  return (
    <div>
      <div className="w-full h-4 bg-green-dark" id="sobre"></div>
      <div className="bg-green-new">
        <div className="flex justify-center items-center py-10 flex-wrap">
          <div className="m-10">
            <Image
              className="rounded-lg"
              src={womanPosing}
              alt="Mulher"
              width={550}
              priority={true}
              quality={100}
            />
          </div>

          <div className="max-w-4xl px-3">
            <h1 className="text-yellow text-5xl">Ana Alícia</h1>
            <p className="text-gray-200 max-w-xl mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vel
              dignissimos animi quis neque ratione rerum labore facere magni
              fuga quaerat repellat perferendis! Dolorum praesentium itaque quis
              ea suscipit impedit? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. In, vel dignissimos animi dignissimos animi quis
              neque ratione rerum labore facere magni fuga quaerat repellat.
            </p>
            <p className="text-gray-200 max-w-xl mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              expedita ipsa minima quidem harum iste ratione soluta accusamus
              itaque consectetur. Odio sed eos quis pariatur natus consequatur,
              est sequi ut. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Veniam expedita ipsa minima.
            </p>
            <div className="inline-flex items-center px-6 py-2 rounded-lg bg-yellow gap-3 mt-10 transition-transform hover:scale-105">
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
        </div>
      </div>
    </div>
  );
}
