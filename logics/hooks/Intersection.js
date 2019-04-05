import React, {useEffect, useState, useRef} from 'react';

export function useIntersection() {
  const ref = useRef();
  const [visibility, setVisibility] = useState({
    isVisible: false,
    visibleArea: 0,
  });
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const {isIntersecting, intersectionRatio} = entry;
      setVisibility({
        isVisible: isIntersecting,
        visibleArea: intersectionRatio,
      });
    }, {
      threshold: .25,
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return {
    ref,
    visibility,
  };
}
