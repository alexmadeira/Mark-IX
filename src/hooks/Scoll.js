import { useState, useEffect } from 'react';

import { debounce } from 'lodash';

export const useScollDarkMode = on => {
  const [darkMode, setDarkMode] = useState(false);
  function toogleMode() {
    const scroll = window.pageYOffset;
    setDarkMode(scroll >= on);
  }

  useEffect(() => {
    window.addEventListener('scroll', debounce(toogleMode, 10));
  });

  return darkMode;
};
