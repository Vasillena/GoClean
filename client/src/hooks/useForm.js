import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler, validate) => {
  const [values, setValues] = useState(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);
  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const validateInputs = () => {
    if (!validate) return true;

    const validationErrors = validate(values);
    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setFormError(null);

    if (validateInputs()) {
      try {
        await onSubmitHandler(values);
        setValues(initialValues);
      } catch (error) {
        setFormError("An error occurred while submitting the form.");
      } finally {
        setSubmitting(false);
      }
    } else {
      setSubmitting(false);
    }
  };

  const changeValues = (newValues) => {
    setValues(newValues);
  };

  return {
    values,
    changeHandler,
    onSubmit,
    changeValues,
    submitting,
    formError,
    errors,
  };
};
