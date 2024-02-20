const BannerGrowthPartner = () => {
  return (
    <section className="w-full h-[500px] ">
      <div className="absolute h-[500px] m-0 left-0 bg-purple-modal">
        <div className="flex w-full h-full justify-center items-center gap-5">
          <div
            id="banner_Growth_partner_info"
            className="w-1/4 flex flex-col gap-5"
          >
            <h3 className="text-4xl">
              Entonces ¿Qué es un{" "}
              <span className="text-yellow-primary font-bold">
                Growth Partner
              </span>
              ?
            </h3>
            <p>
              Imagina tu empresa como un equipo de fútbol sin jugadores
              adicionales en el banquillo. Sin socios de crecimiento, estás
              limitado a los mismos movimientos y estrategias, sin nuevas
              tácticas para ganar el partido.
            </p>
            <span className="text-yellow-primary">
              AQUI LOS SOCIOS DE CRECIMIENTO
            </span>
            <p>
              Son como jugadores y parte técnica que refuerzan tu equipo. Traen
              nuevas ideas, habilidades y recursos que ayudan a tu empresa a
              marcar goles y a superar los desafíos del juego empresarial y lo
              mejor, nosotros como tu jugador número 12 te cobramos por
              resultados, por porcentajes de venta.
            </p>
          </div>
          <div id="banner_Growth_partner_ilustration">
            <img src="/images/growth_partner_ilustration.png" alt="ilustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { BannerGrowthPartner };
