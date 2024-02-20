/**
 * interfaces
 */
import { Input } from "../../../interfaces/custom/Input";

/**
 * custom styles
 */

import "/src/styles/ui/InputVariant.css";

const Input: React.FC<Input> = ({
  type,
  size,
  variant,
  placeholder,
}) => {
  return (
    <input
      type={type}
      className={variant}
      placeholder={placeholder ? placeholder : ""}
      size={ size }
    />
  );
};

export { Input };
