import { useState } from "react";

type returnValues = [string | boolean, (newValue: any) => void, () => void];

const useSessionStorage = (item: string): returnValues => {
  const [itemValue, setItem] = useState(() => {
    try {
      const findItem = window.sessionStorage.getItem(item);

      return findItem ? findItem : false;
    } catch (error) {
      return false;
    }
  });

  //Save in session storage
  const setItemInStorage = (newValue: any) => {
    window.sessionStorage.setItem(item, `${newValue}`);

    setItem(newValue);
  };

  //Remove item
  const removeItem = () => {
    window.sessionStorage.removeItem(item);
    setItem(false);
  };

  return [itemValue, setItemInStorage, removeItem];
};

export default useSessionStorage;
