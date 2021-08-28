import { useState } from "react";

const useForm = () => {
  const [formValues, setForm] = useState<{ [key: string]: any }>({});

  const setValues = (field: string, newValue: string | number) => {
    setForm({ ...formValues, [field]: newValue });
  };

  return { formValues, setValues };
};

export default useForm;
