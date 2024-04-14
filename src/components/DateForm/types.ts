export interface FormFielData {
  name: keyof FormInput;
  placeholder: string;
  label: string;
  type: string;
  required: boolean;
}

export interface FormInput {
  day: number;
  month: number;
  year: number;
}
