/*
types
*/
import { RN } from "../../../types/FunctionalComponent.type";

/**
 * custom component
 */

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

const Contact = (): RN => {
  return (
    <div className="flex justify-center my-28" id="contact">
      <div className="w-[80%] h-[95%] flex flex-col gap-10">
        <h3 className="text-center text-3xl font-bold">¡PONTE EN CONTACTO CON NOSOTROS!</h3>
        <form
          className="h-full border rounded-3xl border-yellow-primary p-11 flex flex-col gap-7 bg-purple-modal
       justify-evenly text-xl"
        >
          <span className="text-4xl text-center">¿COMÓ PODEMOS AYUDARTE?</span>
          <p className="text-yellow-primary text-3xl text-center">
            ¡ESCRIBENOS!
          </p>
          {/** inputs */}
          <Input
            type="text"
            variant="convertion"
            placeholder="NOMBRE Y APELLIDO*"
          />
          <Input
            type="email"
            variant="convertion"
            placeholder="CORREO ELECTRONICO*"
          />
          <div className="flex gap-2 max-w-[549px]">
            <Input
              type="email"
              variant="convertion"
              placeholder="PAIS*"
            />
            <Input
             size={53}
              type="email"
              variant="convertion"
              placeholder="NUMERO DE TELEFONO*"
            />
          </div>
          <Input type="email" variant="convertion" placeholder="EMPRESA*" />
          <Button styles={{ variant: "cta" }} text="¡HABLEMOS!" />
        </form>
      </div>
    </div>
  );
};

export { Contact };
