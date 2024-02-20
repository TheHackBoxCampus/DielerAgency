/**
 * interfaces
 */
import { ButtonCTA } from "../../../interfaces/custom/buttoncta-interface"

/**
 * variants css
 */

import "/src/styles/ui/ctaVariants.css"; 

const Button: React.FC<ButtonCTA> = ( { text, styles:{ variant, heigth }} ) => { 
    return <button className={ `${variant} h-[${heigth}]` }> {text} </button>
}

export { Button }