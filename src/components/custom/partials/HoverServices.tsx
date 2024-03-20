import { Link } from "react-router-dom";

const HoverServices = (): React.ReactNode => {
  return (
    <>
      <div
        className={`absolute z-10 animate__animated animate__fadeIn transition duration-300 max-w-[680px] h-auto p-10 top-full right-[30%] border border-yellow-primary bg-purple-modal flex justify-center rounded-xl`}
      >
        <div className="w-full grid grid-cols-2 gap-6 justify-center">
          <div id="specialty!" className="flex flex-col gap-1">
            <span className="text-yellow-primary font-bold text-xl mb-3">
              ¡Nuestra especialidad!
            </span>
            <p>METODO DIELER</p>
            <hr className="w-3/4" />
            <a>Dieler Partner 360º</a>
            <hr className="w-3/4" />
            <a>Monetiza con tu conocimiento</a>
            <hr className="w-3/4" />
            <a>Mentorías y capacitaciones 1 a 1</a>
          </div>

          <div className="flex flex-col gap-1">
            <span className="mb-3 text-xl font-bold flex gap-2 items-center">
              <img src="/icons/monitoring.svg" alt="icon" />
              Marketing digital
            </span>
            <Link
              to="/services/marketing/google-ads-meta-ads"
              className="w-[70%] transition duration-300 hover:text-yellow-primary"
            >
              Publicidad pagada en Google ads y Meta ads
            </Link>
            <hr className="w-3/4" />
            <Link
              to="/services/marketing/marketing-redes-sociales"
              className="transition duration-300 hover:text-yellow-primary"
            >
              Marketing en redes sociales
            </Link>
            <hr className="w-3/4" />
            <p>Email marketing</p>
            <hr className="w-3/4" />
            <p>Servicios de SEO y SEM</p>
          </div>

          <div className="flex flex-col gap-1">
            <span className="mb-3 text-xl font-bold flex gap-2 items-center">
              <img src="/icons/camera.svg" alt="icon" />
              Producción
            </span>
            <Link
              to="/services/production/marketing-contenidos"
              className="transition duration-300 hover:text-yellow-primary"
            >
              Marketing de contenidos
            </Link>
            <hr className="w-3/4" />
            <p>Videos en sus diferentes formatos</p>
            <hr className="w-3/4" />
            <p>Fotografia profesional</p>
            <hr className="w-3/4" />
            <p>Diseño grafico y Branding</p>
          </div>

          <div className="flex flex-col gap-1">
            <span className="mb-3 text-xl font-bold flex gap-2 items-center">
              <img src="/icons/terminal.svg" alt="icon" /> Desarrollo web
            </span>
            <Link
              to="/services/diseño-web/pagina-corporativa"
              className="transition duration-300 hover:text-yellow-primary"
            >
              Paginas web corporativas
            </Link>
            <hr className="w-3/4" />
            <Link
              to="/services/diseño-web/landing-page"
              className="transition duration-300 hover:text-yellow-primary"
            >
              Creación de Landing Page
            </Link>
            <hr className="w-3/4" />
            <Link
              to="/services/diseño-web/ecommerce"
              className="transition duration-300 hover:text-yellow-primary"
            >
              Comercio electronico
            </Link>
            <hr className="w-3/4" />
            <Link
              to="/services/diseño-web/aplicaciones-web"
              className="transition duration-300 hover:text-yellow-primary"
            >
              Aplicaciones Web
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { HoverServices };
