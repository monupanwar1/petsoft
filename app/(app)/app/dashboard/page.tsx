import Stats from '@/components/stats';
import Branding from './branding';

export default function Page() {
  return (
    <main>
      <div className="flex items-center justify-between text-white py-8">
        <Branding />
        <Stats />
      </div>

      <div>
        <Searchform />
        <ContentBlock>
          <PetList />
        </ContentBlock>
        <ContentBlock>
          <PetDetails />
        </ContentBlock>
      </div>
    </main>
  );
}
