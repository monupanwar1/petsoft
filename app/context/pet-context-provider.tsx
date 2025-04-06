"use client"
import { Pet } from "@/lib/type"
import { useState,createContext } from "react"

type PetContextProviderProps={
    data:Pet[]
    children:React.ReactNode
}
type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  selectedPet:Pet|undefined;
  handleChangeSelectPetId: (id: string) => void;
};



export const petContext =createContext<TPetContext|null >(null);
export default function PetContextProvider({data,children}:PetContextProviderProps) {

    const[pets,setsPet]=useState(data);
    const[selectedPetId,setSelectedpetId]=useState<string |null >(null);
    
    // derived
    const selectedPet =pets.find(pet=>pet.id===selectedPetId)
    // action 
    const handleChangeSelectPetId =(id:string)=>{
        setSelectedpetId(id);
    }
  return (
    <petContext.Provider
      value={{
        pets,
        selectedPetId,
        selectedPet,
        handleChangeSelectPetId,
      }}
    >
      {children}
    </petContext.Provider>
  );
}