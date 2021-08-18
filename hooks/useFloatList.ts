import React, { useState, useEffect, useRef } from "react";

type returnValues = [boolean, React.RefObject<HTMLUListElement>];

const useFloatList = (): returnValues => {
  const floatElement = useRef<HTMLUListElement>(null);
  const [showFloat, setFloatList] = useState(false);

  const handleFloatList: IntersectionObserverCallback = (entries) => {
    console.log(entries[0]);

    if (!entries[0].isIntersecting) {
      setFloatList(true);
    } else {
      setFloatList(false);
    }
  };

  //Observe the reference element at DOM
  useEffect(() => {
    const observer = new IntersectionObserver(handleFloatList);

    observer.observe(floatElement.current as Element);

    return () => observer.disconnect();
  }, []);

  return [showFloat, floatElement];
};

export default useFloatList;
