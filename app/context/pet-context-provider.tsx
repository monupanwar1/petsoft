'use client';

import { Pet } from '@/lib/type';
import { useState, createContext } from 'react';
import { addPet } from '@/actions/action';

type PetEssentials = Omit<Pet, 'id'>;

type PetContextProviderProps = {
  data: Pet[];
  children: React.ReactNode;
};

type TPetContext = {
  pets: Pet[];
  selectedPetId: string | null;
  selectedPet: Pet | undefined;
  numberOfPets: number;
  handleChangeSelectPetId: (id: string) => void;
  handleAddPet: (newPet: PetEssentials) => Promise<void>;
};

export const petContext = createContext<TPetContext | null>(null);

export default function PetContextProvider({
  data,
  children,
}: PetContextProviderProps) {
  const [pets, setPets] = useState<Pet[]>(data);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  const selectedPet = pets.find((pet) => pet.id === selectedPetId);
  const numberOfPets = pets.length;

  const handleAddPet = async (newPet: PetEssentials) => {
    const tempId = crypto.randomUUID();
    const optimisticPet: Pet = { ...newPet, id: tempId };
    setPets((prev) => [...prev, optimisticPet]);

    const error = await addPet(newPet);
    if (error) {
      // Rollback optimistic update
      setPets((prev) => prev.filter((pet) => pet.id !== tempId));
    }
  };

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
