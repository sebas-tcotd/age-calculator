import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { FormInput } from "./types";

type FormFieldProps = {
  label: string;
  name: Path<FormInput>;
  placeholder: string;
  register: UseFormRegister<FormInput>;
  required: boolean;
  validations?: Partial<Record<string, { value: unknown; message: string }>>;
  errors: FieldErrors<FormInput>;
};

export const FormField = ({
  label,
  name,
  placeholder,
  required,
  register,
  errors,
  validations = {},
}: FormFieldProps) => {
  const formId = `form-${name}`;
  return (
    <div className="flex-1">
      <label
        htmlFor={formId}
        className={`text-xs uppercase tracking-25 font-bold ${
          errors.root || errors[name]
            ? "text-primary-light-red"
            : "text-neutral-smoke-grey"
        } `}
      >
        {label}
      </label>
      <input
        {...register(name, {
          required: { value: required, message: "This field is required" },

          ...(validations.pattern && {
            pattern: {
              value: new RegExp(validations.pattern!.value as string),
              message: validations.pattern.message,
            },
          }),

          ...(validations.minLength && {
            minLength: {
              value: validations.minLength.value as number,
              message: validations.minLength.message,
            },
          }),

          ...(validations.max && {
            max: {
              value: validations.max?.value as number,
              message: validations.max?.message,
            },
          }),
        })}
        id={formId}
        name={name}
        step={1}
        min={validations?.min?.value as number}
        max={validations?.max?.value as number}
        type="number"
        placeholder={placeholder}
        className={`w-full | rounded | border  | px-4 py-3 | font-bold tracking-1 | ${
          errors[name]
            ? "focus:outline-primary-light-red"
            : "focus:outline-primary-purple"
        } ${
          errors.root ? "border-primary-light-red" : "border-neutral-light-grey"
        } | placeholder:text-neutral-smoke-grey`}
      />
      {errors[name] && (
        <p
          className="text-primary-light-red italic text-xs mt-1"
          aria-errormessage="This field is required"
        >
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
