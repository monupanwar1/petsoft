import {usePetContext} from "@/lib/hook";

export default function Stats() {
 const{numberOfPets}= usePetContext();
  

  return (
    <section className="text-center">
      <p className="text-2xl font-bold leading-8">{numberOfPets}</p>
      <p className="opacity-80">Current Guest</p>
    </section>
  );
}