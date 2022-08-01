import { useState, useEffect } from 'react';

const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const handleMediaQuery = e => setMatches(media.matches);
    window.addEventListener('resize', handleMediaQuery);
    return () =>
      window.removeEventListener('resize', handleMediaQuery);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
