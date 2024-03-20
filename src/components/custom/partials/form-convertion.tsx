/**
 * custom components
 */
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

/**interfaces */
import { FormConvertion } from "../../../interfaces/custom/formconvertion-interface";

const FormConvertion: React.FC<FormConvertion> = ({ heigth, width, margin }) => {
  return (
    <div className={heigth || width || margin ?`${heigth} ${width} ${margin}` : "h-auto w-auto"} >
      <form
        className="h-full w-full border rounded-3xl border-yellow-primary xs:p-5 sm:p-7 md:p-11 flex flex-col gap-7 bg-purple-modal
       justify-evenly text-xl"
      >
        <span className="xs:text-2xl md:text-3xl text-center">¿COMÓ PODEMOS AYUDARTE?</span>
        <p className="text-yellow-primary text-3xl text-center">¡ESCRIBENOS!</p>
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
        <div className="flex xs:flex-col md:flex-row xs:gap-7 md:gap-2 justify-between">
          <Input
            type="email"
            variant="convertion"
            placeholder="PAIS*"
          />
          <Input
            type="email"
            variant="convertion"
            placeholder="TELEFONO*"
          />
        </div>
        <Input type="email" variant="convertion" placeholder="EMPRESA*" />
        <Button styles={{ variant: "cta" }} text="¡HABLEMOS!" />
      </form>
    </div>
  );
};

export { FormConvertion };
