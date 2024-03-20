/*
types
*/
import { RN } from "../../../types/FunctionalComponent.type";

/**
 * custom component
 */

import { FormConvertion } from "./form-convertion";

const Contact = (): RN => {
  return (
    <div className="flex justify-center my-28" id="contact">
      <div className="xs:w-full md:w-[80%] h-[95%] flex flex-col gap-10">
        <h3 className="text-center text-3xl font-bold">¡PONTE EN CONTACTO CON NOSOTROS!</h3>
        <FormConvertion />
      </div>
    </div>
  );
};

export { Contact };
