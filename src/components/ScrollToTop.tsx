import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will automatically scroll to the top of the page
// when navigating between routes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop; 