/**
 * * interfaces
 */
import { PhaseWebCorporative } from "../../../interfaces/custom/Phases-interface-web-corporative";

export const Phase: React.FC<PhaseWebCorporative> = ({
  title,
  description,
  important,
}) => {
  return (
    <div className="border-2 border-yellow-primary h-auto">
      <div
        className={
          important
            ? `bg-yellow-secondary text-black border border-yellow-primary p-4 text-center`
            : "text-white border border-yellow-primary p-4 text-center"
        }
      >
        <span className="text-xl">{title}</span>
      </div>
      <div className="px-4 py-7">
        <p>{description}</p>
      </div>
    </div>
  );
};
