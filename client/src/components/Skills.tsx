import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Code } from "lucide-react";

const technicalSkills = [
  { name: "Web Development", value: 60 },
  { name: "Shell Scripting", value: 60 },
  { name: "Astronomical Data Analysis", value: 80 },
];

const technologies = [
  "JavaScript",
  "C",
  "R",
  "Python",
  "HTML",
  "SQL",
  "Linux",
  "CSS",
  "Shell Scripting",
  "Git",
  "Data Analysis",
  "HEASoft",
  "Java",
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-16 md:py-24 bg-gray-50 section"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 font-mono mb-2">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
          <p className="text-gray-600 mt-4">
            These are the technologies and skills I've been working with during
            my studies and projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Laptop className="h-5 w-5 mr-2" />
              Technical Skills
            </h3>

            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeIn("right", "tween", 0.3 + index * 0.1, 1)}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2 bg-gray-200" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Code className="h-5 w-5 mr-2" />
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="skill-badge"
                  variants={fadeIn("up", "tween", 0.4 + index * 0.02, 1)}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-16" variants={fadeIn("up", "tween", 0.6, 1)}>
          <h3 className="text-xl font-bold mb-6 text-center">Education</h3>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold">
                    Bachelor of Science, Physics Computer Science
                  </h4>
                  <p className="text-gray-600">St Aloysius College (Autonomous)</p>
                </div>
                <p className="text-sm bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                  2022 - 2025
                </p>
              </div>
              <p className="text-gray-600 text-sm">
                Relevant coursework: Data Structures & Algorithms in C, Web Development, Database Systems, Computer Networks, Statistical Programming in R, Java Programming, Python Programming, Electronics and Instrumentation, Classical Mechanics, Quantum Mechanics, Nuclear Physics, Condensed Matter Physics, Thermodynamics, Special Theory of Relativity.
              </p>
              
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
