import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname]);

  return null;
};

export default ScrollTop;