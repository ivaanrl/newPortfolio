import { useEffect, RefObject } from 'react';

export const usePreventClickPropagation = (ref: RefObject<Element>) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      event.stopPropagation();
    };

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [ref]);
};
