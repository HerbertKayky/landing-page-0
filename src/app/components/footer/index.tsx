import Link from "next/link";
import wppIcon from "/public/WhatsApp_icon.png";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-quase2 text-white py-12">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold">Sobre Ana Alícia</h3>
          <p className="mt-4">
            Ana Alícia é uma psicóloga dedicada a ajudar seus pacientes a
            encontrar autonomia e liberdade através da terapia centrada na
            pessoa.
          </p>
        </div>

        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold">Links Rápidos</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="#services" className="hover:underline">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="#specialties" className="hover:underline">
                Especialidades
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline">
                Sobre
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold">Contato</h3>
          <p className="mt-4">Telefone: (XX) XXXX-XXXX</p>
          <p className="mt-2">Email: anaalicia@exemplo.com</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://wa.me/81993296809" aria-label="WhatsApp">
              <Image src={wppIcon} alt="WhatsApp" width={30} />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Ana Alícia - Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
