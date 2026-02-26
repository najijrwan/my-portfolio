import { useState } from 'react';

export const useExtend = () => {
  const [isExtended, setIsExtended] = useState(false);

  const handleClick = () => {
    setIsExtended(prev => !prev);
  };

  return { isExtended, handleClick };
};
