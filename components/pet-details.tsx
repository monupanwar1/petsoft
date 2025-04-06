'use client';

import { usePetContext } from '@/lib/hooks'; // Adjust if the path differs
import Image from 'next/image';

export default function PetDetails() {
  const { selectedPet, handleCheckoutPet } = usePetContext();

  return (
    <section className="flex flex-col h-full w-full">
      {!selectedPet ? (
        <EmptyView />
      ) : (
        <>
          <TopBar pet={selectedPet} handleCheckoutPet={handleCheckoutPet} />
          <OtherInfo pet={selectedPet} />
          <Notes pet={selectedPet} />
        </>
      )}
    </section>
  );
}

function EmptyView() {
  return (
    <p className="h-full flex justify-center items-center text-2xl font-medium">
      No pet selected
    </p>
  );
}

function TopBar({ pet, handleCheckoutPet }) {
  return (
    <div className="flex items-center bg-white px-8 py-5 border-b border-gray-200">
      <Image
        src={pet.imageUrl}
        alt="Selected pet image"
        height={75}
        width={75}
        className="h-[75px] w-[75px] rounded-full object-cover"
      />

      <h2 className="text-3xl font-semibold leading-7 ml-5">{pet.name}</h2>

      <div className="ml-auto space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
          onClick={() => alert('Edit feature not implemented yet')}
        >
          Edit
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
          onClick={() => handleCheckoutPet(pet.id)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

function OtherInfo({ pet }) {
  return (
    <div className="flex justify-around py-10 px-5 text-center">
      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">
          Owner name
        </h3>
        <p className="mt-1 text-lg text-zinc-800">{pet.ownerName}</p>
      </div>

      <div>
        <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
        <p className="mt-1 text-lg text-zinc-800">{pet.age}</p>
      </div>
    </div>
  );
}

function Notes({ pet }) {
  return (
    <section className="flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-gray-200">
      {pet.notes || <span className="text-zinc-500">No notes available</span>}
    </section>
  );
}
