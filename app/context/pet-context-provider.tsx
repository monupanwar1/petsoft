'use client';

import { Pet } from '@/lib/type';
import { useState, createContext } from 'react';
import { addPet } from '@/actions/action';


type PetEssentials = Omit<Pet, 'id'>;

type PetContextProviderProps = {
  petsData: Pet[];
  children: React.ReactNode;
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  selectedPet: Pet | null;
  numberOfPets: number;
  handleChangeSelectPetId: (id: string) => void;
  handleAddPet: (newPet: PetEssentials) => Promise<void>;
};

export const petContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  petsData:pets,
  children,
}: PetContextProviderProps) {
 

  // const [pets, setPets] = useState<Pet[]>(petsData);//reviladiting 
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  const selectedPet = selectedPetId
    ? pets.find((pet) => pet.id === selectedPetId)
    : null;

  const numberOfPets = pets.length;

  const handleAddPet = async (newPet: PetEssentials) => {
    await addPet(newPet)
  }
  const handleChangeSelectPetId = (id: string) => {
    setSelectedPetId(id);
  };

  return (
    <petContext.Provider
      value={{
        pets,
        selectedPetId,
        selectedPet,
        numberOfPets,
        handleChangeSelectPetId,
        handleAddPet,
      }}
    >
      {children}
    </petContext.Provider>
  );
}
