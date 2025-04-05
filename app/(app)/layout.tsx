import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import BackgroundPattern from '@/components/background-pattern';
import PetContextProvider from '../context/pet-context-provider';
import { pet } from '@/lib/type';

export default async function Layout({ children }: { children: React.ReactNode }) {

  const response = await fetch(
    'https://bytegrad.com/course-assets/projects/petsoft/api/pets'
  );
  if (!response.ok) {
    throw new Error('Unable to fetch pets');
  }
  const data:pet[] = await response.json();
  
  return (

    <>
      <BackgroundPattern />
      <div className="flex flex-col px-4 max-w-[1050px] mx-auto min-h-screen">
    
        <AppHeader />
        <PetContextProvider data={data}  >
        {children}
        </PetContextProvider>
        
        <AppFooter />
      </div>
    </>
  );
}
