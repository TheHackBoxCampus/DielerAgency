/**
 * * components
 */

export const WhyPaidAdvertising = () => {
  return (
    <section className="flex flex-col items-center gap-20 mb-32">
      <h2 className="xs:text-3xl lg:text-4xl lg:w-1/2 xs:w-full text-center">
        <span className="text-yellow-primary">
          ¿QUÉ ES Y PORQUE ES IMPORTANTE?
        </span>
      </h2>
      <div className="flex flex-col gap-20">
        <div className="flex gap-20 xs:flex-col xs:items-center lg:flex-row">
          <div className="flex flex-col gap-4">
            <span className="text-yellow-primary text-4xl xs:text-center lg:text-start">Google ads</span>
            <p className="xs:text-xl xs:text-center lg:text-start xl:text-2xl">
              Google Ads te permite mostrar tus anuncios a clientes potenciales
              mientras buscan productos o servicios como los tuyos en Google.
              Desde la búsqueda hasta el vídeo y la pantalla, Google Ads ofrece
              una variedad de formatos publicitarios que te permiten llegar a tu
              audiencia más calificada.
            </p>
          </div>
          <img
            className="xs:w-[60%] lg:w-[30%]"
            src="/images/google-ads-ilustration.png"
            alt="ilustración google ads"
            loading="lazy"
          />
        </div>
        <div className="flex gap-20 xs:flex-col xs:items-center lg:flex-row">
          <div className="flex flex-col gap-4 ">
            <span className="text-yellow-primary text-4xl xs:text-center lg:text-start">Meta ads</span>
            <p className="xs:text-xl xs:text-center lg:text-start xl:text-2xl">
              Meta Ads se ha convertido en un componente fundamental para llegar
              a tu audiencia en las plataformas de Facebook e Instagram. Con
              opciones de segmentación avanzadas y una amplia gama de formatos
              de anuncios, Meta Ads te permite llegar a personas que están
              activamente comprometidas con sus intereses y conexiones sociales
              ya sea para vender más o fortalecer tu comunidad.
            </p>
          </div>
          <img
            className="xs:w-[70%] lg:w-[30%]"
            src="/images/meta-ads-ilustration.png"
            alt="ilustración meta ads"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
