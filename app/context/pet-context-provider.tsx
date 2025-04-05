"use client"
import { Pet } from "@/lib/type"
import { useState,createContext } from "react"

type PetContextProviderProps={
    data:Pet[]
    children:React.ReactNode
}
type TPetContext ={
    pets:Pet[]
    selectedPetId:string|null;
}

export const petContext =createContext<TPetContext|null >(null);
export default function PetContextProvider({data,children}:PetContextProviderProps) {

    const[pets,setsPet]=useState(data);
    const[selectPetId,setSelectpetId]=useState(null);
  return (
    <petContext.Provider
    value={{
        pets,
        setSelectpetId
    }}>
        {children}
    </petContext.Provider>

  )
}