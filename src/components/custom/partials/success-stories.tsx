/**
 * types
 */
import { RN } from "../../../types/FunctionalComponent.type";

const SuccessInformationThatConverts = (): RN => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <p className="xs:text-3xl sm:text-4xl md:text-5xl"> ⭐⭐⭐⭐⭐</p>
      <h3 className="xs:text-2xl sm:text-3xl md:text-4xl text-center font-bold">
        ¡QUE OPINAN LAS PERSONAS DE NUESTRO TRABAJO!
      </h3>
      <span className="cursive xs:text-2xl sm:text-3xl ">
        puedes verlo tu mismo
      </span>
    </div>
  );
};

const CardsClients = (): RN => {
  return (
    <div className="w-full grid md:grid-cols-1 mdx:grid-cols-2 3xl:grid-cols-3 gap-10 mt-10">
      <div
        id="card"
        className="bg-white xs:w-[350px] xs:h-[250px] sm:w-[400px] smh-[250px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center ">
          <span className="text-5xl">👨🏻</span>

          <div id="client-info">
            <span className="text-2xl">Anderson Murillo</span>
            <hr color="" />
            <p>Cadena de carniserias</p>
          </div>
        </div>
        <div id="testimony">
          <span>
            “Muy cumplidos con el trabajo, siempre han sido muy responsables y
            comprometidos, super recomendados”
          </span>
        </div>
      </div>
      <div
        id="card"
        className="bg-white xs:w-[350px] xs:h-auto sm:w-[400px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center">
          <span className="text-5xl">👩🏻‍🦰</span>
          <div id="client-info">
            <span className="text-2xl">Leidy Johana</span>
            <hr color="#000" />
            <p>Dueña de restaurante</p>
          </div>
        </div>
        <div id="testimony">
          <span className="text-sm">
            “Fueron los responsables de crecer mis redes desde 0, siempre los
            clientes me decían qué cuál era la pagina de mi negocio y no tenía
            ni idea de como funcionaba y no disponía del tiempo y pues ellos se
            comprometieron a encargarse de todo el proceso y a día de hoy sigo
            muy contenta con los resultados”
          </span>
        </div>
      </div>
      <div
        id="card"
        className="bg-white xs:w-[350px] xs:h-[250px] sm:w-[400px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center">
          <span className="text-5xl">👨🏻</span>
          <div id="client-info">
            <span className="text-2xl">Serafin Santos</span>
            <hr color="#000" />
            <p>Firma de abogados</p>
          </div>
        </div>
        <div id="testimony">
          <span>
            “Tenia mis dudas porque nunca había tratado temas de marketing y
            menos para mi negocio pero cuando accedí fue un cambio, tuve
            resultados y no perdí mi dinero, que era el miedo que tenia en ese
            momento”
          </span>
        </div>
      </div>
      <div
        id="card"
        className="bg-white xs:w-[350px] xs:h-[250px] sm:w-[400px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center">
          <span className="text-5xl">👨🏻</span>
          <div id="client-info">
            <span className="text-2xl">Édison Giovanny</span>
            <hr color="#000" />
            <p>Dueño de restaurante</p>
          </div>
        </div>
        <div id="testimony" className="flex items-center">
          <span>
            “Fue un antes y un después para mi negocio, pase de tener 0
            presencia en redes a tener una marca muy atractiva y darle ese toque
            que le hacia falta a mi restaurante”
          </span>
        </div>
      </div>
      <div
        id="card"
        className="bg-white xs:w-[350px] xs:h-[250px] sm:w-[400px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center">
          <span className="text-5xl">👩🏻‍🦰</span>
          <div id="client-info">
            <span className="text-2xl">Daniela Vargas</span>
            <hr color="#000" />
            <p>Dueña de salon de belleza</p>
          </div>
        </div>
        <div id="testimony" className="flex items-center">
          <span>
            "Estoy muy agradecida con los resultados, . Su trabajo nos ha
            ayudado a crecer y atraer más clientes. ¡Los recomendaría sin
            dudarlo!"
          </span>
        </div>
      </div>
      <div
        id="card"
        className="bg-white xs:w-[350px] xs:h-[250px] sm:w-[400px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center">
          <span className="text-5xl">👨🏻</span>
          <div id="client-info">
            <span className="text-2xl">Ruben Antonio</span>
            <hr color="#000" />
            <p>Dueño de Galería</p>
          </div>
        </div>
        <div id="testimony" className="flex items-center">
          <span className="text-sm">
            “Siempre me pedían catálogos y yo tenia que enviar foto por foto, y
            cuando los conocí ellos me ofrecieron una pagina para tener todo mas
            organizado y la verdad fue un cambio bastante importante para mi
            negocio, muy bonitas las fotos, de buena calidad, recomendados”
          </span>
        </div>
      </div>
    </div>
  );
};

const SuccessStories = (): RN => {
  return (
    <section className="w-full h-auto my-20">
      <SuccessInformationThatConverts />
      <CardsClients />
    </section>
  );
};

export { SuccessStories };
