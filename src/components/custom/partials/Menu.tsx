/**
 * @components
 */

import { Link } from "react-router-dom";
import { RN } from "../../../types/FunctionalComponent.type";

/**
 * @hook
 */

import { menuHook } from "../hook/menu-hook";

/**
 *
 * @menu styles
 */

import "../../../styles/ui/MenuResponsive.css";

const Menu = (): RN => {
  const { DetectClick, handleClick, menuRef, open } = menuHook();
  // remove click in case click out
  DetectClick();

  return (
    <>
      <div className="xs:flex mdx:hidden w-full h-[100px] justify-between items-center">
        <div className="flex gap-3 items-center">
          <img
            className="w-[50px]"
            src="/images/logo.png"
            alt="logo"
            loading="lazy"
          />
          <Link to="/" className="text-xl font-bold">
            DIELER AGENCY
          </Link>
        </div>
        <div>
          <img
            onClick={() => handleClick(true)}
            className="w-[50px]"
            src="/icons/menu.svg"
            alt="menu"
          />
        </div>
      </div>
      <div
        ref={menuRef}
        className={`${
          open ? "xs:block" : "xs:hidden"
        } mdx:hidden fixed w-full h-screen bg-[rgba(0,0,0,0.6)] top-0 left-0 z-[1000] `}
      >
        <div className="flex fixed right-0 top-0 xs:w-[80%] sm:w-[60%] lg:w-[40%] h-full border-l-2 border-l-yellow-primary overflow-y-auto bg-purple-modal menu">
          <div className="absolute top-0 right-0 m-5 ">
            <img
              onClick={() => handleClick(false)}
              src="/icons/close.svg"
              alt="icon"
            />
          </div>
          <div className="w-full h-auto">
            <div className="h-auto flex flex-col gap-10 items-start m-10 ">
              <div className="flex flex-col gap-3 w-full">
                <span className="text-yellow-primary text-2xl">
                  Especialidad
                </span>
                <hr className="w-full" />
                <p>METODO DIELER</p>
                <hr className="w-full" />
                <p>Dieler Partner 360º</p>
                <hr className="w-full" />
                <p>Monetiza con tu conocimiento</p>
                <hr className="w-full" />
                <p>mentorias y capacitaciones 1 a 1</p>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <span className="text-yellow-primary text-2xl">
                  Marketing digital
                </span>
                <hr className="w-full" />
                <Link to="/services/marketing/google-ads-meta-ads">
                  Publicidad pagada en Google ads y Meta ads
                </Link>
                <hr className="w-full" />
                <Link to="/services/marketing/marketing-redes-sociales">
                  Marketing en redes sociales
                </Link>
                <hr className="w-full" />
                <p>Email marketing</p>
                <hr className="w-full" />
                <p>Servicios de SEO Y SEM</p>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <span className="text-yellow-primary text-2xl">Producción</span>
                <hr className="w-full" />
                <Link to="/services/production/marketing-contenidos">
                  Marketing de contenidos
                </Link>
                <hr className="w-full" />
                <p>Videos en sus diferentes formatos</p>
                <hr className="w-full" />
                <p>Fotografia profesional</p>
                <hr className="w-full" />
                <p>Diseño grafico y Branding</p>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <span className="text-yellow-primary text-2xl">Diseño web</span>
                <hr className="w-full" />
                <Link to="/services/diseño-web/pagina-corporativa">
                  Paginas web corporativas
                </Link>
                <hr className="w-full" />
                <Link to="/services/diseño-web/landing-page">
                  Creación de landing page
                </Link>
                <hr className="w-full" />
                <Link to="/services/diseño-web/ecommerce">
                  Comercio electronico
                </Link>
                <hr className="w-full" />
                <Link to="/services/diseño-web/aplicaciones-web">
                  Aplicaciones Web
                </Link>
              </div>
              <div className="flex flex-col w-full gap-3">
                <p className="text-2xl text-yellow-primary">Blog</p>
                <hr className="w-full" />
              </div>
              <div className="flex flex-col w-full gap-3">
                <p className="text-2xl">¿Quienes somos?</p>
                <hr className="w-full" />
              </div>
              <div className="flex flex-col w-full gap-3 mb-10">
                <Link to="/#contact" className="text-2xl">
                  Contactanos
                </Link>
                <hr className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Menu };
