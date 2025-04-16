'use client';

import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

export default function PetForm() {
  return (
    <form className="flex flex-col space-y-3">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="ownerName">Owner Name</Label>
        <Input id="ownerName" name="ownerName" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input id="imageUrl" name="imageUrl" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="age">Age</Label>
        <Input id="age" name="age" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" name="notes" />
      </div>

      <button type="submit" className="bg-black text-white py-2 rounded">
        Submit
      </button>
    </form>
  );
}
