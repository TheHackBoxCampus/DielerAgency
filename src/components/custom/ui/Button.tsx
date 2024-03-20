/**
 * interfaces
 */
import { ButtonCTA } from "../../../interfaces/custom/buttoncta-interface";

/**
 * variants css
 */

import "/src/styles/ui/ctaVariants.css";

const Button: React.FC<ButtonCTA> = ({
  text,
  styles: { variant, heigth, width, fontSize },
  to,
}) => {
  return (
    <a
      rel="follow"
      href={to}
      className={`block ${width} ${heigth} ${fontSize} ${variant}`}
    >
      {" "}
      {text}{" "}
    </a>
  );
};

export { Button };
