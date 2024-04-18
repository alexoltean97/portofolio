import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.5 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    visible: { 
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 20 } 
    },
    hidden: { 
      x: -100, 
      opacity: 0
    }
  };

  return { ref, controls, variants };
};
