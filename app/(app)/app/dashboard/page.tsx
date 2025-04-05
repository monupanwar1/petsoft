import Stats from '@/components/stats';
import Branding from './branding';
import ContentBlock from '@/components/content-block';
import PetList from '@/components/pet-list';
import PetDetails from '@/components/pet-details';
import SearchForm from '@/components/search-form';

export default async function Page() {
   const response = await fetch(
     'https://bytegrad.com/course-assets/projects/petsoft/api/pets'
   );
   if(!response.ok){
    throw new Error("Unable to fetch pets")

   }
   const data = await response.json();
  console.log(data)
  return (
    <main>
      <div className="flex items-center justify-between text-white py-8">
        <Branding />
        <Stats />
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 md:h-[600px]">
        {/* Search Form */}
        <div className="row-start-1 col-start-1">
          <SearchForm />
        </div>

        {/* Pet List */}
        <div className="row-start-2 col-start-1 md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
          <ContentBlock>
            <PetList  pets={data}/>
          </ContentBlock>
        </div>

        {/* Pet Details */}
        <div className="row-start-3 col-start-1 md:row-start-1 md:row-span-full md:col-start-2 md:col-span-2">
          <ContentBlock>
            <PetDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
}
