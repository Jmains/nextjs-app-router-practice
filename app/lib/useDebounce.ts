import { useEffect, useRef } from 'react';

export const useDebounce = (cb: any, delay: number) => {
  let timeoutRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    return () => clearTimeout(timeoutRef);
  });

  //@ts-ignore
  return (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    //@ts-ignore
    timeoutRef.current = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
