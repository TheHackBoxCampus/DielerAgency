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
              <p>Creación de cursos</p>
              <p>Growth Parnert | Partner Green</p>
              <p>Enfoque 360º</p>
              <p>Consultarías y crecimiento</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="mb-3 text-xl font-bold">Marketing digital</span>
              <p className="w-[70%]">
                Publicidad pagada en Google ads y Meta ads
              </p>
              <p>Gestion de redes sociales</p>
              <p>Email marketing</p>
              <p>Servicios de SEO y SEM</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="mb-3 text-xl font-bold">Producción</span>
              <p>Cobertura de eventos | VideoClips</p>
              <p>Videos en sus diferentes formatos</p>
              <p>Fotografia profesional</p>
              <p>Diseño de piezas gráficas y/o publicitarias</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="mb-3 text-xl font-bold">Desarrollo web</span>
              <p>Paginas web corporativas</p>
              <p>Creación de Landing Page</p>
              <p>Comercio electronico</p>
              <p>Aplicaciones Web</p>
            </div>
          </div>
        </div>
    </>
  );
};

export { HoverServices };
