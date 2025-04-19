'use server';

import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

type fromDataProps = {
  name: string;
  ownerName: string;
  age: number;
  imageUrl?: string;
  notes: string;
};

export async function addPet(formData: fromDataProps) {
  await prisma.pet.create({
    data: {
      name: formData.name,
      ownerName: formData.ownerName,
      age: formData.age,
      imageUrl:
        formData.imageUrl?.startsWith('http') || formData.imageUrl?.startsWith('/')
          ? formData.imageUrl
          : 'https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png',
      notes: formData.notes,
    },
  });

  revalidatePath('/app', 'layout');
}
