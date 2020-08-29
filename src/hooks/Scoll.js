import { useState, useEffect } from 'react';

import { debounce } from 'lodash';

export const useScollDarkMode = on => {
  const fraction = on.split('/');
  const [darkMode, setDarkMode] = useState(false);
  function toogleMode() {
    const change = (window.innerHeight * fraction[0]) / fraction[1];
    const scroll = window.pageYOffset;

    setDarkMode(scroll >= change);
  }

  useEffect(() => {
    window.addEventListener('scroll', debounce(toogleMode, 10));
  });

  return darkMode;
};
