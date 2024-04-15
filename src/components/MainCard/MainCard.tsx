import { useState } from "react";
import { Age } from "../../models";
import { calculateAgeByBirthday } from "../../utils";
import { AgeDisplay } from "../AgeDisplay";
import { DateForm } from "../DateForm";
import { FormInput } from "../DateForm/types";

const initialState = {
  days: "--",
  months: "--",
  years: "--",
} satisfies Age;

export const MainCard = () => {
  const [age, setAge] = useState<Age>(initialState);

  const handleAge = (formData: FormInput) => {
    const ageDate = calculateAgeByBirthday(formData);

    setAge({
      days: String(ageDate.getDate() - 1),
      months: String(ageDate.getMonth()),
      years: String(ageDate.getFullYear() - 1970),
    });
  };

  return (
    <main className="bg-neutral-white px-6 lg:px-14 py-12 | flex flex-col gap-8 | rounded-lg rounded-br-xl">
      <DateForm onSubmit={handleAge} />
      <AgeDisplay ageData={age} />
    </main>
  );
};
