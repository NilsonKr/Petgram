import { useState } from "react";

function useLocalStorage(key: number | string) {
  const [item, setItem] = useState(() => {
    try {
      const item = window.localStorage.getItem(`${key}`);

      return item ? JSON.parse(item) : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  });

  const updateItem = (value: any) => {
    try {
      window.localStorage.setItem(`${key}`, JSON.stringify(value));
      setItem(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [item, updateItem];
}

export default useLocalStorage;
