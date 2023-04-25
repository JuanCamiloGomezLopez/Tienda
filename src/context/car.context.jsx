import { createContext, useState } from "react";

export const CarContext = createContext({
    caropen: false,
    setCaropen: ()=>{}
})

export const CarProvider = ({children})=>{

    const [caropen, setCaropen]= useState(false);

    const value = {caropen, setCaropen}

    return (
        <CarContext.Provider value={value}>{children}</CarContext.Provider>
    )
}