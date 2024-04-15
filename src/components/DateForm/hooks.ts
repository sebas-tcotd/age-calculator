import { useForm } from "react-hook-form";
import { FormInput } from "./types";
import { useEffect } from "react";
import { isDateInFuture, isValidDate } from "../../utils";

export const useDateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch,
  } = useForm<FormInput>();

  useEffect(() => {
    const subscription = watch((value) => {
      if (!isValidDate(value as FormInput)) {
        setError("root", { message: "Invalid date" });
        return;
      }
      if (isDateInFuture(value as FormInput)) {
        setError("root", { message: "Date cannot be in the future" });
        return;
      }
      clearErrors("root");
    });
    return () => subscription.unsubscribe();
  }, [watch, setError, clearErrors, errors]);

  return {
    register,
    handleSubmit,
    errors,
  };
};
