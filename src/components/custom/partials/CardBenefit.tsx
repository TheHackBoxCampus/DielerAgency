/**
 * * interfaces
 */
import { CardBenefitWebCorporative } from "../../../interfaces/custom/card-benefit-web-corporative-interface";

/**
 * types
 */

import { RN } from "../../../types/FunctionalComponent.type";

export const CardBenefit: React.FC<CardBenefitWebCorporative> = ({
  iconPath,
  title,
  description,
}): RN => {
  return (
    <div className="border-[2px] rounded-xl border-yellow-primary bg-purple-modal h-auto flex flex-col gap-3 items-center p-7">
      <img
        className="w-1/2 h-[150px] object-contain"
        src={iconPath}
        alt="icon"
      />
      <h3 className="text-xl mt-5">{title}</h3>
      <hr />
      <p className="md:w-[70%] xs:w-full xs:text-justify md:text-center 2xl:w-full 2xl:text-justify">
        {description}
      </p>
    </div>
  );
};
