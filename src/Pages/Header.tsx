import { useEffect, useState } from "react";
import { useI18n } from "../Components/i18nContext";

const ACCENT = "#556B2F";

export default function Header2() {
  const { translations, handleSelectLanguage } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    handleSelectLanguage(e.target.value);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const navTextClass = scrolled
    ? "text-sm sm:text-base lg:text-lg"
    : "text-base sm:text-lg lg:text-xl";

  return (
    <header
      className={[
        "w-full fixed top-0 z-30 bg-white text-black border-b border-gray-200 transition-all duration-200",
        scrolled ? "py-2 shadow-lg" : "py-4 shadow-md",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Logo */}
        <a href="#main" className="flex items-center ml-2 sm:ml-4">
          <img
            src="/fotosTargetes/fotosCaseta/logo.webp"
            alt="Logo"
            className={`transition-all duration-200 ${
              scrolled ? "h-8 w-auto" : "h-10 sm:h-12 w-auto"
            }`}
          />
        </a>

        {/* Nav desktop */}
        <nav className="mx-auto hidden md:block">
          <ul
            className={`flex items-center gap-6 2xl:gap-12 font-semibold ${navTextClass}`}
          >
            <li>
              <a
                href="#main"
                className="transition-transform duration-150 hover:scale-105 hover:underline underline-offset-4"
                style={{ color: "black" }}
              >
                {translations.menu.main}
              </a>
            </li>
            <li>
              <a
                href="#descripcion"
                className="transition-transform duration-150 hover:scale-105 hover:underline underline-offset-4"
                style={{ color: "black" }}
              >
                {translations.menu.aboutus}
              </a>
            </li>
            <li>
              <a
                href="#vinos"
                className="transition-transform duration-150 hover:scale-105 hover:underline underline-offset-4"
                style={{ color: "black" }}
              >
                {translations.menu.vinos}
              </a>
            </li>
            <li>
              <a
                href="#espacios"
                className="transition-transform duration-150 hover:scale-105 hover:underline underline-offset-4"
                style={{ color: "black" }}
              >
                {translations.menu.spaces}
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="transition-transform duration-150 hover:scale-105 hover:underline underline-offset-4"
                style={{ color: "black" }}
              >
                {translations.menu.contact}
              </a>
            </li>
          </ul>
        </nav>

        {/* Selector idioma + hamburguesa */}
        <div className="ml-auto flex items-center mr-2 sm:mr-4 gap-3">
          {/* Wrapper para el select con flecha custom */}
          <div className="relative">
            <select
              className="appearance-none bg-transparent text-sm sm:text-base font-bold rounded-lg py-1 pl-3 pr-8 border-2 shadow-sm cursor-pointer"
              style={{ color: ACCENT, borderColor: ACCENT }}
              onChange={handleChange}
              aria-label="Seleccionar idioma"
            >
              <option value="cat">Català</option>
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>

            {/* Flechita custom separada del borde */}
            <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <svg
                className="h-3 w-3"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: ACCENT }}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <button
            className="md:hidden text-2xl leading-none focus:outline-none"
            style={{ color: ACCENT }}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={[
          "md:hidden overflow-hidden transition-[max-height] duration-200 ease-out bg-white border-t border-gray-200",
          isMenuOpen ? "max-h-64" : "max-h-0",
        ].join(" ")}
      >
        <ul className="flex flex-col p-3 text-sm font-semibold">
          {[
            { href: "#main", label: translations.menu.main },
            { href: "#descripcion", label: translations.menu.aboutus },
            { href: "#espacios", label: translations.menu.spaces },
            { href: "#vinos", label: translations.menu.vinos },
            { href: "#contacto", label: translations.menu.contact },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-2 py-2 rounded-md hover:bg-gray-50"
                style={{ color: ACCENT }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
