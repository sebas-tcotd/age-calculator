import { FormFielData } from "./types";

type FormFieldProps = FormFielData;

export const FormField = ({
  label,
  name,
  placeholder,
  required,
  type,
}: FormFieldProps) => {
  const formId = `form-${name}`;
  return (
    <div className="flex-1">
      <label
        htmlFor={formId}
        className="text-xs uppercase tracking-25 font-bold text-neutral-smoke-grey"
      >
        {label}
      </label>
      <input
        id={formId}
        name={name}
        type={type}
        step={1}
        placeholder={placeholder}
        required={required}
        className="w-full | rounded | border border-neutral-light-grey | px-4 py-3 | font-bold tracking-1 | focus:outline-primary-purple | placeholder:text-neutral-smoke-grey"
      />
    </div>
  );
};
