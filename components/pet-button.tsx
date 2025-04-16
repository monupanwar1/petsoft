import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";


type PetButtonProps = {
  actionType: 'add' | 'edit' | 'checkout';
  children: React.ReactNode;
};

export default function PetButton({ actionType,children }: PetButtonProps) {
  if(actionType==='add'){
    return (
      <div>
      <Button size="icon">
        <PlusIcon className="h-6 w-6"/>
      </Button>
    </div>
  );
}
  if(actionType==='edit'){
    return (
      <div>
        <Button variant="secondary">{children}</Button>
      </div>
    );
}
  if(actionType==='checkout'){
    return (
      <div>
      <Button variant="destructive" >
        {children}
      </Button>
    </div>
  );
}
}