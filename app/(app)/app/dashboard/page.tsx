import Stats from '@/components/stats';
import Branding from './branding';
import ContentBlock from '@/components/content-block';
import PetList from '@/components/pet-list';
import PetDetails from '@/components/pet-details';
import Searchform from '@/components/search-form';

export default function Page() {
  return (
    <main>
      <div className="flex items-center justify-between text-white py-8">
        <Branding />
        <Stats />
      </div>

      <div className='grid grid-cols-3 grid-row-[45px_1fr]'>
        <Searchform/>
        <ContentBlock>
          <PetList/>
        </ContentBlock>
        <ContentBlock>
          <PetDetails/>
        </ContentBlock>
      </div>
    </main>
  );
}
