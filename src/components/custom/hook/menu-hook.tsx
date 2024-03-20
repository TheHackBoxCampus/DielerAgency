import { useRef, useState, useEffect } from "react"

export const menuHook = () => { 
    const menuRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const handleClick = (state: boolean) => {
      setOpen(state);
    };

    const DetectClick = () => { 
      useEffect(() => {
        const detectClickAndRemoveMenu = (event: any) => {
          let container = menuRef.current;
          let clicked = container === event.target;
    
          clicked ? handleClick(false) : false;
        };
    
        document.addEventListener("click", detectClickAndRemoveMenu);
    
        return () =>
          document.removeEventListener("click ", detectClickAndRemoveMenu);
      }, []);
    }

    return { 
        handleClick, 
        open,
        menuRef,
        DetectClick
    }
}