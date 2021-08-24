import React, { useState, useEffect, useRef } from "react";

type returnValues = [boolean, React.RefObject<HTMLUListElement>];

const useIntersectioon = (closeOnIntersec: boolean = false): returnValues => {
  const floatElement = useRef<HTMLUListElement>(null);
  const [isIntersec, setIntersec] = useState(false);
  // const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  const handleIntersection: IntersectionObserverCallback = (
    entries,
    currObserver
  ) => {
    if (entries[0].isIntersecting) {
      setIntersec(true);

      if (closeOnIntersec) {
        //Stop observe element
        currObserver?.disconnect();
      }
    } else {
      setIntersec(false);
    }
  };

  //Observe the reference element at DOM
  useEffect(() => {
    const newObserver = new window.IntersectionObserver(handleIntersection);

    newObserver.observe(floatElement.current as Element);

    return () => newObserver?.disconnect();
  }, []);

  return [isIntersec, floatElement];
};

export default useIntersectioon;
