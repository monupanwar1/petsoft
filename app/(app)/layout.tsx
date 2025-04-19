import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import BackgroundPattern from '@/components/background-pattern';
import PetContextProvider from '../context/pet-context-provider';
import SearchContextProvider from '../context/search-context-provider';
import { prisma } from '@/lib/db';

export default async function Layout({ children }: { children: React.ReactNode }) {

   const petsData=await prisma.pet.findMany();
   console.log("pets found",petsData)

    
  
  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col px-4 max-w-[1050px] mx-auto min-h-screen">
        <AppHeader />
        <SearchContextProvider>
          <PetContextProvider petsData={petsData}>{children}</PetContextProvider>
        </SearchContextProvider>

        <AppFooter />
      </div>
    </>
  );
}
