import { AgeDisplay } from "../AgeDisplay";
import { DateForm } from "../DateForm";

export const MainCard = () => {
  return (
    <main className="bg-neutral-white px-6 py-12 | flex flex-col gap-8 | rounded-lg rounded-br-xl">
      <DateForm />
      <AgeDisplay />
    </main>
  );
};
