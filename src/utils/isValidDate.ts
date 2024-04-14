import { FormInput } from "../components/DateForm/types";

export function isValidDate(date: FormInput): boolean {
  const { day, month, year } = date;
  const formattedDate = new Date(year, month - 1, day);

  return formattedDate.getMonth() + 1 == month;
}
