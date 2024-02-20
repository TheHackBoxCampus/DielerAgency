/**
 * hook
 */

import { useState } from "react";

/** interface */
import { AccordionState } from "../../../interfaces/hook/acordeonState";

const useAccordion = (initialState: boolean = false): AccordionState => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleAccordion,
  };
};

export { useAccordion };
