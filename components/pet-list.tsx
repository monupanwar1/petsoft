import Image from "next/image";

export default function PetList() {
  return (
    <ul className="bg-white border-b border-black/[0.08]">
      <li>
        <button
          className=" text-black
            flex items-center w-full  h-[70px] text-base  cursor-pointer gap-3 px-5 hover:bg-[#EFF1F2] transition focus:bg-[#EFF1F2]
            "
        >
          <Image
            src="https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            alt="pet-image"
            width={45}
            height={45}
            className="rounded-full object-cover"
          />

          <p>Benzamin</p>
        </button>
      </li>
      <li>
        <button
          className=" text-black
            flex items-center w-full  h-[70px] text-base  cursor-pointer gap-3 px-5 hover:bg-[#EFF1F2] transition focus:bg-[#EFF1F2]
            "
        >
          <Image
            src="https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            alt="pet-image"
            width={45}
            height={45}
            className="rounded-full object-cover"
          />

          <p>Bosston</p>
        </button>
      </li>
    </ul>
  );
}