import React, { useEffect, useState, useMemo, useCallback, memo } from 'react';
import { motion, useMotionValue, useAnimation, useTransform, PanInfo, ResolvedValues } from 'framer-motion';

// Optimized image URLs with smaller dimensions and better compression
const IMGS: string[] = [
  'https://images.unsplash.com/photo-1528181304800-259b08848526?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1495103033382-fe343886b671?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1599576838688-8a6c11263108?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1664910706524-e783eed89e71?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  const galleryImages = useMemo(() => images.length > 0 ? images : IMGS, [images]);

  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(() => window.innerWidth <= 640);
  
  // Debounced resize handler for better performance
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScreenSizeSm(window.innerWidth <= 640);
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Memoize expensive calculations
  const galleryConfig = useMemo(() => {
    const cylinderWidth = isScreenSizeSm ? 1100 : window.innerWidth > 1280 ? 1800 : 1600;
    const faceCount = galleryImages.length;
    const faceWidth = (cylinderWidth / faceCount) * 1.5;
    const radius = cylinderWidth / (2 * Math.PI);
    
    return { cylinderWidth, faceCount, faceWidth, radius };
  }, [isScreenSizeSm, galleryImages.length]);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, (val: number) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = useCallback((startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 60, // Slightly slower for better performance
        ease: 'linear',
        repeat: Infinity
      }
    });
  }, [controls]);

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay, startInfiniteSpin, controls, rotation]);

  const handleUpdate = useCallback((latest: ResolvedValues) => {
    if (typeof latest.rotateY === 'number') {
      rotation.set(latest.rotateY);
    }
  }, [rotation]);

  const handleDrag = useCallback((_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  }, [controls, rotation, dragFactor]);

  const handleDragEnd = useCallback((_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  }, [rotation, dragFactor, autoplay, startInfiniteSpin]);

  const handleMouseEnter = useCallback((): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  }, [autoplay, pauseOnHover, controls]);

  const handleMouseLeave = useCallback((): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  }, [autoplay, pauseOnHover, rotation, startInfiniteSpin]);

  return (
    <div className="relative h-[160px] sm:h-[170px] md:h-[180px] lg:h-[190px] xl:h-[200px] w-full overflow-hidden">
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: galleryConfig.cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((url, i) => (
            <div
              key={`${url}-${i}`}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${galleryConfig.faceWidth}px`,
                transform: `rotateY(${(360 / galleryConfig.faceCount) * i}deg) translateZ(${galleryConfig.radius}px)`
              }}
            >
              <img
                src={url}
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
                className="pointer-events-none h-[100px] w-[250px] rounded-[15px] border-[3px] border-white object-cover transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[110px] sm:w-[260px] md:h-[120px] md:w-[270px] lg:h-[130px] lg:w-[280px] xl:h-[140px] xl:w-[290px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default memo(RollingGallery);
