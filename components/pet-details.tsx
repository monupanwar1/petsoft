'use client';

import usePetContext from '@/lib/hook';
import Image from 'next/image';

export default function PetDetails() {
  const { selectedPet } = usePetContext();

  if (!selectedPet) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 text-lg">Select a pet to view details 🐾</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col h-full w-full">
      {/* Header with image and name */}
      <div className="flex items-center bg-white px-8 py-5 border-b border-black/[0.08]">
        <Image
          src={selectedPet.imageUrl || '/placeholder.png'}
          alt="Selected pet image"
          height={75}
          width={75}
          className="h-[75px] w-[75px] rounded-full object-cover"
        />

        <h2 className="text-3xl font-semibold leading-7 ml-5">
          {selectedPet.name}
        </h2>
      </div>

      {/* Owner and age */}
      <div className="flex justify-around py-10 px-5 text-center">
        <div>
          <h3 className="text-[13px] font-medium uppercase text-zinc-900">
            Owner Name
          </h3>
          <p className="mt-1 text-lg text-zinc-800">
            {selectedPet.ownerName || 'N/A'}
          </p>
        </div>

        <div>
          <h3 className="text-[13px] font-medium uppercase text-zinc-900">
            Age
          </h3>
          <p className="mt-1 text-lg text-zinc-800">
            {selectedPet.age || 'Unknown'}
          </p>
        </div>
      </div>

      {/* Notes section */}
      <section className="bg-white px-7 py-5 rounded-md mb-9 mx-8 border-b border-black/[0.08]">
        {selectedPet.notes || (
          <p className="text-gray-500">No additional notes.</p>
        )}
      </section>
    </section>
  );
}
