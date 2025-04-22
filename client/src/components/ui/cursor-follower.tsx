import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/contexts/CursorContext';

interface Position {
  x: number;
  y: number;
}

export const CursorFollower = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const { isHovering } = useCursor();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Hide cursor on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 flex items-center justify-center"
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: {
            type: 'spring',
            stiffness: 250,
            damping: 30,
            mass: 0.5,
          },
          opacity: {
            duration: 0.2,
          },
        }}
      >
        <div
          className="absolute rounded-full border border-white"
          style={{
            width: isHovering ? '40px' : '10px',
            height: isHovering ? '40px' : '10px',
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'difference',
          }}
        />
      </motion.div>
    </>
  );
};