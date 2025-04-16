'use client';

import  { usePetContext, useSearchContext } from '@/lib/hook';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import PetButton from './pet-button';

export default function PetList() {
  const { pets, selectedPetId, handleChangeSelectPetId } = usePetContext();
 const{searchQuery}= useSearchContext();


 const filtredPets =pets.filter(pet=>pet.name.includes(searchQuery))

  return (
    <ul className="bg-white border-b border-black/[0.08]">
      {filtredPets.map((pet) => (
        <li key={pet.id}>
          <button
            onClick={() => handleChangeSelectPetId(pet.id)}
            className={cn(
              'text-black flex items-center w-full h-[70px] text-base cursor-pointer gap-3 px-5 hover:bg-[#EFF1F2] transition focus:bg-[#EFF1F2]',
              {
                'bg-[#EFF1F2]': selectedPetId === pet.id,
              }
            )}
          >
            <Image
              src={pet.imageUrl || '/placeholder.png'}
              alt={`${pet.name} image`}
              width={45}
              height={45}
              className="w-[45px] h-[45px] rounded-full object-cover"
            />
            <p>{pet.name}</p>
          </button>
        </li>
      ))}
      <div>
        <PetButton actionType='add'/>
      </div>
    </ul>
    
  );
}
