import H1 from "@/components/h1";

export default function Page() {
  return (
    <main>
        <section>
      <div className="flex text-white py-8 items-center justify-center">
        <H1>
          Pet <span className="font-semibold">Soft</span>
        </H1>
        <p className="text-lg opacity-80"> Manage your pet daycare with ease</p>
      </div>
      </section>
           
           <section className="text-center">
            <p className="text-2xl font-bold leading-8">2</p>
            <p className="opacity-80">Current Guest</p>
           </section>

      
    </main>
  );
}