/**
 * custom components
 */
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

const FormConvertion: React.FC = ({}) => {
  return (
    <div className="w-[40%] h-[95%] ">
      <form
        className="h-full border rounded-3xl border-yellow-primary p-11 flex flex-col gap-7 bg-purple-modal
       justify-evenly text-xl"
      >
        <span className="text-4xl text-center">¿COMÓ PODEMOS AYUDARTE?</span>
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
        <div className="flex gap-2 max-w-[549px]">
          <Input
            size={3}
            type="email"
            variant="convertion"
            placeholder="PAIS*"
          />
          <Input
            size={20}
            type="email"
            variant="convertion"
            placeholder="NUMERO DE TELEFONO*"
          />
        </div>
        <Input type="email" variant="convertion" placeholder="EMPRESA*" />
        <Button styles={{ variant: "cta" }} text="¡HABLEMOS!" />
      </form>
    </div>
  );
};

export { FormConvertion };
