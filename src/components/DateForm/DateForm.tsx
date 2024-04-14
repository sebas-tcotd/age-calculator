import { Path } from "react-hook-form";
import FormData from "./FormData.json";
import { FormField } from "./FormField";
import { useDateForm } from "./hooks";
import { FormInput } from "./types";

type DateFormProps = {
  onSubmit: (data: FormInput) => void;
};

export const DateForm = ({ onSubmit }: DateFormProps) => {
  const { errors, handleSubmit, register } = useDateForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8"
      aria-label="Date Form"
    >
      <div className="flex gap-4" role="group">
        {FormData.map((data) => (
          <FormField
            key={data.name}
            {...data}
            name={data.name as Path<FormInput>}
            register={register}
            errors={errors}
          />
        ))}
      </div>

      <div className="relative h-16 flex items-center">
        <hr className=" border-neutral-off-white | w-full" />

        {errors.root ? (
          <div className="bg-neutral-white p-4 | flex items-center justify-center | w-1/2 h-8 | absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-primary-light-red italic text-center text-xs leading-none">
              {errors.root.message}
            </p>
          </div>
        ) : (
          <button
            type="submit"
            disabled={Object.keys(errors).length > 0}
            className="bg-primary-purple active:bg-neutral-off-black disabled:bg-neutral-smoke-grey rounded-full min-w-16 w-fit h-16 | flex items-center justify-center | absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 | shadow-m disabled:shadow-none | hover:bg-primary-purple-dark | active:bg-primary-purple-darker | active:shadow-none | transition-all ease-in-out"
            aria-label="Calculate age"
            title="Calculate age"
          >
            <img
              src="/images/icon-arrow.svg"
              alt="Calculate age icon"
              height={24}
              width={24}
            />
          </button>
        )}
      </div>
    </form>
  );
};
