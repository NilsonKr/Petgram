import { useState } from "react";

const useForm = () => {
  const [formValues, setForm] = useState<{ [key: string]: any }>({});

  const resetForm = () => {
    setForm({});
  };

  const setNewValues = (field: string, newValue: string | number) => {
    setForm({ ...formValues, [field]: newValue });
  };

  return { formValues, setNewValues, resetForm };
};

export default useForm;
