/**
 * types
 */
import { RN } from "../../../types/FunctionalComponent.type";

const SuccessInformationThatConverts = (): RN => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <p className="text-5xl"> ⭐⭐⭐⭐⭐</p>
      <h3 className="text-4xl w-1/2 text-center font-bold">¡QUE OPINAN LAS PERSONAS DE NUESTRO TRABAJO!</h3>
      <span className="cursive text-3xl">puedes verlo tu mismo</span>
    </div>
  );
};

const CardsClients = (): RN => {
  return (
    <div className="w-full grid grid-cols-3 gap-10 mt-10">
      <div
        id="card"
        className="bg-white w-[400px] h-[250px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center ">
          <span className="text-5xl">🙍🏻‍♂️</span>

          <div id="client-info">
            <span className="text-2xl">Maria Rodriguez</span>
            <hr color="" />
            <p>Emprendedora</p>
          </div>
        </div>
        <div id="testimony">
          <span>
            “Gracias a la asesoría que me brindaron pude cambiar el enfoque de
            mi negocio y hacer lo que realmente me gusta, muy buen
            acompañamiento en todo el proceso”
          </span>
        </div>
      </div>
      <div
        id="card"
        className="bg-white w-[400px] h-[250px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center">
          <span className="text-5xl">🙍🏻‍♂️</span>
          <div id="client-info">
            <span className="text-2xl">Leidy Johana</span>
            <hr color="#000" />
            <p>Dueña de restaurante</p>
          </div>
        </div>
        <div id="testimony">
          <span>
            “Fueron los responsables de que mi empresa siempre tuviera un
            enfoque humanizar mi marca y que las redes sociales nos dieran el
            crecimiento que tenemos a día de hoy”
          </span>
        </div>
      </div>
      <div
        id="card"
        className="bg-white w-[400px] h-[250px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center">
          <span className="text-5xl">🙍🏻‍♂️</span>
          <div id="client-info">
            <span className="text-2xl">Carlos Ortiz</span>
            <hr color="#000" />
            <p>Comerciante Herboterapia</p>
          </div>
        </div>
        <div id="testimony">
          <span>
            "Con miles de problemas en la venta de mi producto, buscaba
            optimizar mis redes sociales sin éxito. Gracias a las landing page,
            mi negocio tomó un nuevo rumbo y ahora la venta de mi producto ya no
            es un problema."
          </span>
        </div>
      </div>
      <div
        id="card"
        className="bg-white w-[400px] h-[250px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center">
          <span className="text-5xl">🙍🏻‍♂️</span>
          <div id="client-info">
            <span className="text-2xl">Javier Hernandez</span>
            <hr color="#000" />
            <p>Dueño de restaurante</p>
          </div>
        </div>
        <div id="testimony" className="flex items-center">
          <span>
            “Tenía problemas en la creación y estrategia de mi contenido para
            mis redes sociales, gracias a sus servicios incrementó la calidad de
            mi contenido de manera profesional e interacción con mi comunidad”
          </span>
        </div>
      </div>
      <div
        id="card"
        className="bg-white w-[400px] h-[250px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center">
          <span className="text-5xl">🙍🏻‍♂️</span>
          <div id="client-info">
            <span className="text-2xl">Daniela Vargas</span>
            <hr color="#000" />
            <p>Estilista</p>
          </div>
        </div>
        <div id="testimony" className="flex items-center">
          <span>
            “Estoy súper agradecida con sus servicios ya que pude optimizar,
            mejorar la calidad en la creación de contenido para mis redes y así
            pude conseguir más clientes calificados para mi negocio. Se los
            recomiendo si necesitas mejorar tu presencia en redes”
          </span>
        </div>
      </div>
      <div
        id="card"
        className="bg-white w-[400px] h-[250px] m-auto p-5 text-black flex flex-col gap-3"
      >
        <div id="client" className="flex gap-3 items-center">
          <span className="text-5xl">🙍🏻‍♂️</span>
          <div id="client-info">
            <span className="text-2xl">Ruben Antonio</span>
            <hr color="#000" />
            <p>Dueño de Galería </p>
          </div>
        </div>
        <div id="testimony" className="flex items-center">
          <span>
            “Me encontraba con un problema y es que no sabia como administrar
            mis productos, trate de la forma tradicional pero fue un desastre,
            en ese momento descubrí las aplicaciones web y fue un cambio
            extraordinario”
          </span>
        </div>
      </div>
    </div>
  );
};

const SuccessStories = (): RN => {
  return (
    <section className="w-full h-[90vh] mt-20">
      <SuccessInformationThatConverts />
      <CardsClients />
    </section>
  );
};

export { SuccessStories };
