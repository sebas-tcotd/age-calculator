import FormData from "./FormData.json";
import { FormField } from "./FormField";
import { FormFielData } from "./types";

export const DateForm = () => {
  return (
    <form className="flex flex-col gap-8" aria-label="Date Form">
      <div className="flex gap-4" role="group">
        {(FormData as Array<FormFielData>).map((data) => (
          <FormField key={data.name} {...data} />
        ))}
      </div>

      <div className="relative h-16 flex items-center">
        <hr className=" border-neutral-off-white | w-full" />
        <button
          type="submit"
          className="bg-primary-purple rounded-full w-16 h-16 | flex items-center justify-center | absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 | shadow-md | focus:outline-primary-purple | hover:bg-primary-purple-dark | active:bg-primary-purple-darker | active:shadow-none | transition-colors duration-200 ease-in-out"
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
      </div>
    </form>
  );
};
