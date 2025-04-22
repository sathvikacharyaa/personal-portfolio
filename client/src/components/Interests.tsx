import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCursor } from '@/contexts/CursorContext';
import { Camera, Image, Instagram } from 'lucide-react';

// Import the astrophotography images
import starTrailsImage from '@assets/star_trails_light_result~7.jpg';
import moonImage from '@assets/IMG_20240127_002000_963.jpg';
import galaxyImage from '@assets/IMG_20240111_220128.jpg';
import nebulaImage from '@assets/starless_M42star.jpg';

// Using sample images for Instagram-like preview since actual Instagram content would need API access
// In a real implementation, these would be fetched from Instagram API
const instagramImages = [
  { id: 1, src: moonImage, alt: "Nature photography" },
  { id: 2, src: starTrailsImage, alt: "Street photography" },
  { id: 3, src: galaxyImage, alt: "Cultural photography" },
  { id: 4, src: nebulaImage, alt: "Artistic photography" },
  { id: 5, src: moonImage, alt: "Portrait photography" },
  { id: 6, src: galaxyImage, alt: "Travel photography" },
];

const Interests = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { setIsHovering } = useCursor();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="interests" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 font-mono mb-2 text-center">Hobbies & Passions</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Other Interests
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Beyond my academics and work          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto space-y-12"
        >
          {/* Top row: Astrophotography and Image Processing side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* First Interest: Astrophotography */}
            <motion.div
              className="bg-background rounded-lg overflow-hidden p-8 shadow-md h-full"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', 
                transition: { duration: 0.2 } 
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center text-primary">
                  <Camera size={24} />
                </div>
                <h3 className="text-2xl font-bold ml-4">Astrophotography</h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg">
                Astrophotography is one of my favorite hobbies, where I enjoy capturing the wonders of the night sky. I’ve taken some beautiful images of stars and celestial objects using both a telescope and even just my phone. Whether it's photographing the Moon, star trails, or deep sky objects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={starTrailsImage} 
                    alt="Star trails showing Earth's rotation" 
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" 
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">Star trails captured using long exposure technique</p>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={moonImage} 
                    alt="Full moon with detailed surface features" 
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" 
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">Full moon detail showing lunar surface features</p>
                </div>
              </div>
            </motion.div>

            {/* Second Interest: Image Processing */}
            <motion.div
              className="bg-background rounded-lg overflow-hidden p-8 shadow-md h-full"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', 
                transition: { duration: 0.2 } 
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center text-primary">
                  <Image size={24} />
                </div>
                <h3 className="text-2xl font-bold ml-4">Image Processing of Astrophotography</h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg">
                I'm deeply involved in the post-processing of astrophotography images, where the real magic happens. Using specialized software like Siril, DeepSkyStacker, Sequator, I transform raw astronomical data into detailed visual representations of deep space objects. This involves techniques like stacking multiple exposures, noise reduction, and enhancing faint details while preserving the natural characteristics of celestial objects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={galaxyImage} 
                    alt="Andromeda Galaxy processed image" 
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" 
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">Processed image of the Andromeda Galaxy (M31)</p>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={nebulaImage} 
                    alt="Orion Nebula processed image" 
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" 
                  />
                  <p className="text-sm text-gray-600 mt-2 italic text-center">Processed image of the Orion Nebula with enhanced nebulosity</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom row: Photography (left) and space for future interest (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Third Interest: Photography */}
            <motion.div
              className="bg-background rounded-lg overflow-hidden p-8 shadow-md h-full"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', 
                transition: { duration: 0.2 } 
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-lg flex items-center justify-center text-primary">
                  <Instagram size={24} />
                </div>
                <h3 className="text-2xl font-bold ml-4">Photography</h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg">
                I love capturing photographs where each frame tells a story. My frames are vivid which captures nature, street, emotions of people, culture and art. Each photograph represents a moment in time, preserved forever as a visual narrative that can transport viewers to different worlds and experiences.
              </p>
              
              {/* Instagram-style grid layout */}
              <div className="mb-4">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-3">
                    <Camera size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold">@frameefinesse</h4>
                    <p className="text-xs text-gray-500">My Photography Journey</p>
                  </div>
                </div>
                
                <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <p className="text-center text-gray-500 mb-2">Instagram Feed Preview</p>
                    
                    {/* Live Instagram Embed */}
                    <div className="instagram-embed-container">
                      <iframe
                        title="Instagram Feed"
                        className="w-full h-96 border-none"
                        src={`https://www.instagram.com/frameefinesse/embed`}
                        allowFullScreen
                      ></iframe>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <a 
                        href="https://www.instagram.com/frameefinesse/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                      >
                        <Instagram size={16} className="mr-2" />
                        Follow @frameefinesse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Space for Fourth Interest (Empty card with placeholder) */}
            <div className="hidden lg:block">
              {/* This empty div creates space for a future interest on larger screens */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;