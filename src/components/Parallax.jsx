import { useState, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

const Parallax = ({ children, offset, stiffness }) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);

  const y = useSpring(yRange, { stiffness: 900, damping: 800 });

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  const shouldReduceMotion = useReducedMotion();

  return shouldReduceMotion ? (
    <>{children}</>
  ) : (
    <motion.div
      ref={ref}
      style={{
        y: useSpring(useTransform(scrollY, [initial, final], [offset, -offset]), { stiffness: stiffness, damping: 80 }),
      }}
      className="paramotion"
    >
      {children}
    </motion.div>
  );
};

export default Parallax;
