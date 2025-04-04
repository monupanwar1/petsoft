import H1 from "@/components/h1";

export default function Branding() {
  return (
    <section>
      <div className="flex flex-col text-white py-8 items-center justify-center">
        <H1>
          Pet <span className="font-semibold">Soft</span>
        </H1>
        <p className="text-lg opacity-80"> Manage your pet daycare with ease</p>
      </div>
    </section>
  );
}