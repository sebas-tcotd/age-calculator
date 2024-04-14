import { FormInput } from "../components/DateForm/types";

export function calculateAgeByBirthday(birthDateInput: FormInput): Date {
  const { day, month, year } = birthDateInput;
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  const diff = today.getTime() - birthDate.getTime();

  return new Date(diff);
}
