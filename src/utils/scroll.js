export default {
  darkMode: on => {
    const fraction = on.split('/');
    const change = (window.innerHeight * fraction[0]) / fraction[1];
    const scroll = window.pageYOffset;

    return scroll >= change;
  },
};
