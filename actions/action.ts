"use server"

import { prisma } from "@/lib/db";




export async function addPet(pet){
  try{
    const newPet=await prisma.pet.create({
        data:pet,
      });
      return newPet
      console.log(newPet)

  }
 catch (error) {
    console.log(error);
    return {
      message: "Could not add pet.",
    }
}
}