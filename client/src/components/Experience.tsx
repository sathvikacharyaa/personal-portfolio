import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCursor } from '@/contexts/CursorContext';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { format } from 'date-fns';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { setIsHovering } = useCursor();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Work experiences data
  const workExperiences = [
    {
      id: 1,
      title: 'Summer Research Intern',
      company: 'Indian Insititute Of Space Science and Technology (IIST)',
      department: 'Avionics',
      projectGuide: 'Dr. Priyadarshnam',
      location: 'Thiruvananthapuram',
      startDate: '2024-05-27',
      endDate: '2024-07-15',
      current: false,
      description: "Analyzed millisecond pulsars using NASA's NICER mission data from HEASARC, focusing on their role in deep space navigation. Worked on data acquisition, post-processing, and analysis, showcasing the practical application of X-ray pulsars in space exploration."
    },
    {
      id: 2,
      title: 'Association Secretary - Astronomy Club',
      company: 'St Aloysius College (Autonomous)',
      location: 'Mangalore',
      startDate: '2022-12-01',
      endDate: '2024-06-01',
      current: true,
      description: 'Coordinated and organized various club activities, meetings and events. Conducted stargazing sessions and responsible for overseeing and managing telescope in college observatory'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const formatDate = (dateString: string | null, current: boolean) => {
    if (current && !dateString) return 'Present';
    if (!dateString) return 'Present';
    
    return format(new Date(dateString), 'MMM yyyy');
  };

  return (
    <section id="experience" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 font-mono mb-2 text-center">Career Path</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Experience
          </h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-center text-accent mb-16 max-w-2xl mx-auto">
            
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-4">Experience</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative pl-8 border-l border-gray-200">
              {workExperiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  className="mb-12 relative"
                  variants={itemVariants}
                >
                  <div className="absolute -left-[41px] h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                    <Briefcase size={14} />
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-lg font-medium text-primary">{exp.company}</p>
                        {exp.department && (
                          <p className="text-sm text-gray-600">Department: {exp.department}</p>
                        )}
                        {exp.projectGuide && (
                          <p className="text-sm text-gray-600">Project Guide: {exp.projectGuide}</p>
                        )}
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <div className="flex items-center text-sm text-gray-600 mb-1 md:justify-end">
                          <Calendar size={14} className="mr-1" />
                          <span>
                            {formatDate(exp.startDate, false)} - {formatDate(exp.endDate, exp.current)}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 md:justify-end">
                          <MapPin size={14} className="mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;