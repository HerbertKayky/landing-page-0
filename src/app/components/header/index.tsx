export function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto mt-12 mb-20 px-4 text-center md:text-left">
      <div>
        <h1 className="text-5xl text-green mb-1">Ana Alícia</h1>
        <p className="text-xl text-green text-center">—Psicóloga—</p>
      </div>
      <nav className="flex flex-wrap justify-center md:justify-start text-xl mt-4">
        <a
          href="#sobre"
          className="px-4 md:px-5 hover:text-green transition-colors"
        >
          Sobre
        </a>
        <a
          href="#comofunciona"
          className="px-4 md:px-5 hover:text-green transition-colors"
        >
          Como funciona
        </a>
        <a
          href="#qualidades"
          className="px-4 md:px-5 hover:text-green transition-colors"
        >
          Qualidades
        </a>
        <a
          href="#contato"
          className="px-4 md:px-5 hover:text-green transition-colors"
        >
          Entre em contato
        </a>
        <span className="font-medium text-green px-4 md:px-5">CRP: 24/02366</span>
      </nav>
    </header>
  );
}
