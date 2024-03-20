import { useState } from "react";

const sliderIndex = () => { 
    const [index, setIndex] = useState(0);  
    
    const hook = (state:number) => { 
        setIndex(state)
    }

    return { 
        index, 
        hook
    }
}

export { sliderIndex } 