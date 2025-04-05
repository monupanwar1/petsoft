"use client"
import { Pet } from "@/lib/type"
import { useState,createContext } from "react"

type PetContextProviderProps={
    data:Pet[]
    children:React.ReactNode
}
type TPetContext = {
  pets: Pet[];
  selectPetId: string | null;
  handleChangeSelectPetId:(id:string)=>void
};

export const petContext =createContext<TPetContext|null >(null);
export default function PetContextProvider({data,children}:PetContextProviderProps) {

    const[pets,setsPet]=useState(data);
    const[selectPetId,setSelectpetId]=useState<string |null >(null);

    const handleChangeSelectPetId =(id:string)=>{
        setSelectpetId(id);
    }
  return (
    <petContext.Provider
      value={{
        pets,
        selectPetId,
        handleChangeSelectPetId,
      }}
    >
      {children}
    </petContext.Provider>
  );
}