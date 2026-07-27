import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaPython,
  FaDatabase,
  FaChartBar,
  FaRobot,
} from "react-icons/fa";

const certificates = [
  {
    title: "Data Analysis with Python",
    company: "IBM",
    icon: <FaChartBar />,
    description:
      "Learned Python, Pandas, NumPy and data visualization techniques.",
    link: "https://drive.google.com/file/d/1DWnwXZJTKTuDDWS8qvWll62Sp2HwO97F/view",
  },

  {
    title: "SQL and Relational Databases 101",
    company: "IBM",
    icon: <FaDatabase />,
    description:
      "Learned SQL queries, joins, normalization and relational databases.",
    link: "https://drive.google.com/file/d/1dgCcnAPo9VgsE0qzuobqEqsggRvQClZf/view?usp=sharing",
  },

  {
    title: "Machine Learning with Python",
    company: "IBM",
    icon: <FaRobot />,
    description:
      "Built machine learning models using Python and Scikit-Learn.",
    link: "https://drive.google.com/file/d/1UNi7y692CwACaiizkXUEaFUhWlWwuMhu/view?usp=sharing",
  },

  {
    title: "Python Essentials 1",
    company: "Cisco Networking Academy",
    icon: <FaPython />,
    description:
      "Covered Python programming fundamentals and problem solving.",
    link: "https://drive.google.com/file/d/1YO-krObIkwWsfYBUhCq05i6Zi9CbI6kK/view",
  },

  {
    title: "Python Essentials 2",
    company: "Cisco Networking Academy",
    icon: <FaPython />,
    description:
      "Learned advanced Python concepts, modules and file handling.",
    link: "https://drive.google.com/file/d/1z3k3aRMl3cAQOszYmx0iHznBvS6q8stc/view",
  },

  {
    title: "Data Analytics Essentials",
    company: "Cisco Networking Academy",
    icon: <FaChartBar />,
    description:
      "Explored data analytics concepts, visualization and reporting.",
    link: "https://drive.google.com/file/d/12whxLuCI2yiWliLSLUHUD_Mo2WTt4E--/view",
  },
  {
  title: "Hands-on Python: Learn by Doing",
  company: "Reccsar Pvt. Ltd",
  icon: <FaPython />,
  description:
    "Completed a hands-on Student Development Program focused on practical Python programming, problem-solving and real-world coding.",
  link: "https://drive.google.com/file/d/1Q8ShHdNI5edSgbWFYrzIqo0Hczu6qVJI/view?usp=sharing",
  },

 {
  title: "Digital Skills",
  company: "Microsoft × TNSDC × Naan Mudhalvan",
  icon: <FaCertificate />,
  description:
    "Successfully completed the Digital Skills program under the Naan Mudhalvan Scheme, conducted by Microsoft and Tamil Nadu Skill Development Corporation.",
  link: "https://drive.google.com/file/d/1S8w95F2PWFPAJ_8eve9vS4ArWA6WruhM/view?usp=sharing",
 },
];

const Certification = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-[#111] text-white px-6"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-yellow-400">
            Certifications
          </h2>

          <div className="w-28 h-1 bg-yellow-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6 text-lg">
            Industry-recognized certifications in Python,
            Data Analytics, AI and SQL.
          </p>

        </motion.div>
                {/* Certificate Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-[#181818] border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400 transition-all duration-300 shadow-xl flex flex-col"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-black text-3xl mb-6 shadow-lg">
                {cert.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-white leading-snug">
                {cert.title}
              </h3>

              {/* Company */}

              <p className="text-yellow-400 font-semibold mt-3">
                {cert.company}
              </p>

              {/* Description */}

              <p className="text-gray-400 mt-5 leading-7 flex-grow">
                {cert.description}
              </p>

              {/* Button */}

              <a
                href={cert.link}
                className="mt-8 inline-flex items-center justify-center gap-3 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl hover:scale-105 transition duration-300"
              >
                View Credential

                <FaExternalLinkAlt />
              </a>

            </motion.div>

          ))}

        </div>
                {/* Bottom Divider */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="w-48 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Certification;