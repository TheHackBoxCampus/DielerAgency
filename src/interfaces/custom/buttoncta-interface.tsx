/**
 * types
 */
import { buttonCTATypeStyles, buttonCTATypeText  } from "../../types/buttonCTA.types"

interface ButtonCTA { 
    styles: buttonCTATypeStyles, 
    text: buttonCTATypeText,
    to?: string
}

export { ButtonCTA }
