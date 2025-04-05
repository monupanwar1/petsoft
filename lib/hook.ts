import { petContext } from "@/app/context/pet-context-provider";
import { useContext } from "react";

export default function usePetContext() {
    const context=useContext(petContext);
    if(!context){
        throw new Error (
            "usePetContext must  be used with a petContextProvider"
        )
    }

    return context;

}