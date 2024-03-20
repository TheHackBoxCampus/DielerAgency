interface SliderProps { 
    slides: React.ReactNode[],
    hook: (state:number) => void
}

export { SliderProps }