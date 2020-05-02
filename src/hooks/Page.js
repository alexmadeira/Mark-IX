import { useSelector } from 'react-redux';

export const usePage = () => {
  const page = useSelector(state => state.page);
  const isHome = page.current === '/';

  return { isHome, ...page };
};
