import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaCalendarAlt,
  FaBookOpen,
} from "react-icons/fa";

const coursework = [
  "Python Programming",
  "Data Structures",
  "Database Management Systems",
  "Machine Learning",
  "Data Visualization",
  "Cloud Computing",
  "Artificial Intelligence",
  "Deep Learning",
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#151515] text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-yellow-400">
            Education
          </h2>

          <div className="w-32 h-1 bg-yellow-400 mx-auto rounded-full mt-5"></div>

          <p className="text-gray-400 mt-6 text-lg">
            My academic journey and relevant coursework.
          </p>
        </motion.div>
                {/* Apollo Engineering College */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="bg-[#181818] border border-yellow-400/20 rounded-3xl p-8 shadow-xl hover:border-yellow-400 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* Left Icon */}

            <div className="bg-yellow-400 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <FaGraduationCap className="text-4xl text-black" />
            </div>

            {/* Right Content */}

            <div className="flex-1">

              <h3 className="text-3xl font-bold text-yellow-400">
                Apollo Engineering College
              </h3>

              <p className="text-xl text-white mt-3">
                Bachelor of Technology (B.Tech)
              </p>

              <p className="text-lg text-gray-400 mt-2">
                Artificial Intelligence & Data Science
              </p>

              <div className="flex items-center gap-3 mt-6 text-gray-300">
                <FaCalendarAlt className="text-yellow-400" />

                <span>2024 – 2028</span>
              </div>

              <div className="mt-8">

                <div className="flex items-center gap-3 mb-5">
                  <FaBookOpen className="text-yellow-400" />

                  <h4 className="text-xl font-semibold text-white">
                    Relevant Coursework
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">

                  {coursework.map((course, index) => (

                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.08 }}
                      className="px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-sm font-medium"
                    >
                      {course}
                    </motion.span>

                  ))}

                </div>

              </div>

            </div>

          </div>
        </motion.div>
                {/* Timeline Connector */}

        <div className="flex justify-center my-10">
          <div className="w-1 h-20 bg-gradient-to-b from-yellow-400 to-transparent rounded-full"></div>
        </div>

        {/* Higher Secondary School */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="bg-[#181818] border border-white/10 rounded-3xl p-8 shadow-xl hover:border-yellow-400 transition-all duration-300 mt-6"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* Left Icon */}

            <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <FaSchool className="text-4xl text-yellow-500" />
            </div>

            {/* Right Content */}

            <div className="flex-1">

              <h3 className="text-3xl font-bold text-white">
                Government Model Higher Secondary School
              </h3>

              <p className="text-lg text-gray-300 mt-4">
                Completed Higher Secondary Education
              </p>

              <p className="text-gray-400 mt-2">
                Specialized in Mathematics & Computer Science,
                building a strong foundation in logical thinking,
                problem-solving, and analytical skills.
              </p>

              <div className="flex items-center gap-3 mt-6 text-gray-300">
                <FaCalendarAlt className="text-yellow-400" />

                <span>Completed in 2024</span>
              </div>

            </div>

          </div>

        </motion.div>
                {/* Bottom Divider */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
