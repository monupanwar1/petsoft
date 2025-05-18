'use client';

import { useState, useEffect } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { addPet, editPet } from '@/actions/action';

type PetFormProps = {
  actionType: 'add' | 'edit';
  onFormSubmission: () => void;
  existingPetData?: FormData;
};

type FormData = {
  name: string;
  ownerName: string;
  imageUrl: string;
  age: number;
  notes: string;
};

export default function PetForm({
  actionType,
  onFormSubmission,
  existingPetData,
}: PetFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    ownerName: '',
    imageUrl: '',
    age: 0,
    notes: '',
  });

  // Populate form with existing data in edit mode
  useEffect(() => {
    if (actionType === 'edit' && existingPetData) {
      setFormData(existingPetData);
    }
  }, [actionType, existingPetData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'age' ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (actionType === 'add') {
      const error = await addPet(formData);
      if (error) {
        console.log('Not added');
        return;
      }
    } else if (actionType === 'edit') {
      const error = await editPet(formData);
      if (error) {
        console.log('Not edited');
        return;
      }
    }

    onFormSubmission();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="ownerName">Owner Name</Label>
        <Input
          id="ownerName"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="bg-black text-white py-2 rounded">
        {actionType === 'add' ? 'Add Pet' : 'Edit Pet'}
      </button>
    </form>
  );
}
