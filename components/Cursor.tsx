"use client";

import { useEffect } from 'react';
import { motion, motionValue } from 'motion/react';
import Image from 'next/image';

const Cursor = () => {
  // Create motion values for x and y coordinates
  const x = motionValue(0);
  const y = motionValue(0);
  
  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      // Update motion values directly without causing re-renders
      x.set(e.clientX);
      y.set(e.clientY);
    };


    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Restore the default cursor when the component unmounts
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        x, // Use motion values directly in style
        y,
      }}
      transition={{
        type: 'spring',
        damping: 140,
        stiffness: 300,
      }}
    >
      <div className='pointer-events-none hidden md:block' style={{ transform: 'translate(-50%, -50%)' }}>
        <Image
          src="/rodacursor.webp"
          alt="Custom Cursor"
          width={32}
          height={32}
        />
      </div>
    </motion.div>
  );
};

export default Cursor;
