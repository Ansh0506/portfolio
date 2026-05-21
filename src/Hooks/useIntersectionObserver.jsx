import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // --- KEY CHANGE ---
        // Update the state based on whether the element is intersecting or not
        setIsVisible(entry.isIntersecting);
        
        // Removed the 'observer.unobserve(entry.target)' line
        // so the observer keeps watching the element.
      },
      options // Pass the options (like threshold) to the observer
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup: unobserve the element when the component unmounts
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
    // Re-run the effect if the options change (though unlikely for threshold)
  }, [options]); 

  return [elementRef, isVisible];
};

// Default export if this is the only export in the file
// export default useIntersectionObserver;