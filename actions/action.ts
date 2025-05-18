'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

type formDataProps = {
  name: string;
  ownerName: string;
  age: number;
  imageUrl?: string;
  notes: string;
};

// Add Pet
export async function addPet(formData: formDataProps) {
  await prisma.pet.create({
    data: {
      name: formData.name,
      ownerName: formData.ownerName,
      age: formData.age,
      imageUrl:
        formData.imageUrl?.startsWith('http') ||
        formData.imageUrl?.startsWith('/')
          ? formData.imageUrl
          : 'https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png',
      notes: formData.notes,
    },
  });

  revalidatePath('/app', 'layout');
}

// ✅ Corrected Edit Pet
export async function editPet(petId: string, formData: formDataProps) {
  await sleep(3000)
  try {
    await prisma.pet.update({
      where: {
        id: petId,
      },
      data: {
        name: formData.name,
        ownerName: formData.ownerName,
        age: formData.age,
        imageUrl:
          formData.imageUrl?.startsWith('http') ||
          formData.imageUrl?.startsWith('/')
            ? formData.imageUrl
            : 'https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png',
        notes: formData.notes,
      },
    });

    revalidatePath('/app', 'layout');
    return null;
  } catch (error) {
    return {
      message: 'Could not edit pet',
    };
  }
}
