import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-[#0f0f0f] text-white px-6"
      data-aos="fade-up"
    >
      

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <h2 className="text-6xl font-extrabold leading-tight">

            Let's Build

            <span className="text-yellow-400">
              {" "}Data-Driven{" "}
            </span>

            Solutions Together.

          </h2>

          <p className="text-gray-400 text-xl mt-8 max-w-2xl leading-9">

            I'm always open to internships, full-time opportunities,
            freelance work and collaborations in Data Analytics,
            Business Intelligence and AI.

          </p>

        </motion.div>

        {/* Contact Layout */}

        <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side */}

<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="space-y-6"
>

  {/* Location */}

  <a
    href="#"
    className="flex items-center gap-5 bg-[#181818] p-5 rounded-2xl border border-yellow-400/20 hover:border-yellow-400 hover:translate-x-2 transition-all duration-300"
  >
    <FaMapMarkerAlt className="text-yellow-400 text-2xl" />

    <div>
      <h4 className="text-lg font-semibold">Location</h4>
      <p className="text-gray-400">Nerkundram, Chennai</p>
    </div>
  </a>

  {/* Email */}

  <a
    href="mailto:yourmail@gmail.com"
    className="flex items-center gap-5 bg-[#181818] p-5 rounded-2xl border border-yellow-400/20 hover:border-yellow-400 hover:translate-x-2 transition-all duration-300"
  >
    <FaEnvelope className="text-yellow-400 text-2xl" />

    <div>
      <h4 className="text-lg font-semibold">Email</h4>
      <p className="text-gray-400">sandhiyashreesaravanakumar@gmail.com</p>
    </div>
  </a>

  {/* Phone */}

  <a
    href="tel:+91 7358193897"
    className="flex items-center gap-5 bg-[#181818] p-5 rounded-2xl border border-yellow-400/20 hover:border-yellow-400 hover:translate-x-2 transition-all duration-300"
  >
    <FaPhoneAlt className="text-yellow-400 text-2xl" />

    <div>
      <h4 className="text-lg font-semibold">Phone</h4>
      <p className="text-gray-400">+91 7358193897</p>
    </div>
  </a>

  {/* LinkedIn */}

  <a
    href="https://www.linkedin.com/in/sandhiya-shree-s"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-5 bg-[#181818] p-5 rounded-2xl border border-yellow-400/20 hover:border-yellow-400 hover:translate-x-2 transition-all duration-300"
  >
    <FaLinkedin className="text-yellow-400 text-2xl" />

    <div>
      <h4 className="text-lg font-semibold">LinkedIn</h4>
      <p className="text-gray-400">
        https://www.linkedin.com/in/sandhiya-shree-s
      </p>
    </div>
  </a>

  {/* GitHub */}

  <a
    href="https://github.com/sandhiyashreesandhiya2006-droid"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-5 bg-[#181818] p-5 rounded-2xl border border-yellow-400/20 hover:border-yellow-400 hover:translate-x-2 transition-all duration-300"
  >
    <FaGithub className="text-yellow-400 text-2xl" />

    <div>
      <h4 className="text-lg font-semibold">GitHub</h4>
      <p className="text-gray-400">
        https://github.com/sandhiyashreesandhiya2006-droid
      </p>
    </div>
  </a>


</motion.div>
{/* Right Side */}

<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-[#181818] border border-yellow-400/20 rounded-3xl p-10 shadow-2xl hover:border-yellow-400 transition-all duration-300 h-fit"
>

  {/* Icon */}

  <div className="w-20 h-20 rounded-2xl bg-yellow-400 flex items-center justify-center text-black text-4xl mb-8">
    📬
  </div>

  {/* Heading */}

  <h3 className="text-3xl font-bold text-yellow-400 mb-6">
    Available for Opportunities
  </h3>

  {/* Description */}

  <p className="text-gray-300 leading-8 mb-8">
    I'm actively looking for
    <span className="text-yellow-400 font-semibold">
      {" "}Data Analyst{" "}
    </span>
    internships, full-time opportunities, freelance projects,
    dashboard development and business intelligence work.
  </p>

  {/* Availability */}

  <div className="space-y-5 mb-10">

    <div className="flex items-center gap-4">
      <span className="text-green-400 text-xl">✔</span>
      <span>Data Analyst Roles</span>
    </div>

    <div className="flex items-center gap-4">
      <span className="text-green-400 text-xl">✔</span>
      <span>Internship Opportunities</span>
    </div>

    <div className="flex items-center gap-4">
      <span className="text-green-400 text-xl">✔</span>
      <span>Freelance Projects</span>
    </div>

    <div className="flex items-center gap-4">
      <span className="text-green-400 text-xl">✔</span>
      <span>Business Intelligence Dashboards</span>
    </div>

  </div>

  {/* Button */}

  <a
    href="mailto:sandhiyashreesaravanakumar@gmail.com"
    className="inline-flex items-center justify-center w-full bg-yellow-400 text-black py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
  >
    📧 Send Email
  </a>

</motion.div>
      </div>
    </section>
  );
};

export default Contact;