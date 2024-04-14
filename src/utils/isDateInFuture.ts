import { FormInput } from "../components/DateForm/types";

export function isDateInFuture(date: FormInput): boolean {
  const { day, month, year } = date;
  const today = new Date();
  const inputDate = new Date(year, month - 1, day);

  return inputDate > today;
}
