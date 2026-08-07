import internshipGallery from "./internship-work-gallery.png";

import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaTools,
  FaTasks,
  FaChartBar,
  FaTrophy,
  FaLightbulb,
  FaLocationArrow,
} from "react-icons/fa";

export default function Experience() {

  const tools = [
    "Excel",
    "Google Sheets",
    "Python",
    "Pandas",
    "SQL",
    "Power BI",
    "Power Query",
    "Looker Studio",
    "JSON",
    "Jupyter Notebook",
    "VS Code",
    "Streamlit",
  ];

  const responsibilities = [
    "Cleaned, validated and formatted 2,500+ institutional records.",
    "Generated daily student progress reports.",
    "Created Pivot Tables, Heatmaps and Conditional Formatting reports.",
    "Prepared 70+ operational reports.",
    "Automated Excel to JSON conversion using Python & Pandas.",
    "Assisted HR ticket management.",
    "Updated LMS reports.",
    "Managed large multi-sheet Excel workbooks.",
  ];
  const skills = [
  "Data Cleaning",
  "Data Analysis",
  "Dashboard Development",
  "Power BI",
  "Python",
  "Pandas",
  "Excel Automation",
  "Business Intelligence",
  "Report Automation",
  "Problem Solving",
  "Stakeholder Reporting",
];

  return (

    <section
      id="experience"
      className="bg-[#070707] text-white py-24 px-6"
      data-aos="fade-up"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-yellow-400"
        >

          Professional Experience

        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 170 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="h-1 bg-yellow-400 rounded-full mx-auto mt-5 mb-20"
        />
        <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-gradient-to-br from-[#151515] to-[#0d0d0d] border border-yellow-500/20 rounded-3xl p-10 shadow-[0_0_40px_rgba(250,204,21,0.08)] hover:border-yellow-400 transition-all duration-500 mb-20"
>

  <div className="grid lg:grid-cols-2 gap-10 items-center">

    {/* LEFT */}

    <div>

      <div className="flex items-center gap-5 mb-8">

        <div className="bg-yellow-400 p-5 rounded-2xl">

          <FaBriefcase className="text-black text-3xl" />

        </div>

        <div>

          <h2 className="text-4xl font-bold text-yellow-400">

            Data Analyst Intern

          </h2>

          <p className="text-gray-400 mt-2">

            Tamil Nadu Model Schools

          </p>

        </div>

      </div>

      <div className="space-y-5">

        <div className="flex items-center gap-4">

          <FaBuilding className="text-yellow-400 text-xl" />

          <span className="text-lg">

            Government of Tamil Nadu

          </span>

        </div>
        <div className="flex items-center gap-4">

          <FaLocationArrow className="text-yellow-400 text-xl" />

          <span className="text-lg">

            Chennai, Tamil Nadu

          </span>

        </div>

        <div className="flex items-center gap-4">

          <FaCalendarAlt className="text-yellow-400 text-xl" />

          <span className="text-lg text-gray-300">

           2nd June 2026 – 31st July 2026

          </span>

        </div>

      </div>

      <p className="text-gray-300 leading-8 mt-10 text-lg">

        Worked as a <span className="text-yellow-400 font-semibold">Data Analyst Intern </span>
         where I collected, cleaned, transformed, analyzed and visualized
        educational datasets to support reporting and decision-making.

        Developed interactive Power BI dashboards, automated Excel-to-JSON
        workflows using Python & Pandas, prepared institutional reports,
        and contributed to HR, LMS and business analytics projects.

      </p>

    </div>

    {/* RIGHT */}

    <div className="grid grid-cols-2 gap-5">

      {[
        ["2500+", "Records"],
        ["70+", "Reports"],
        ["3", "Dashboards"],
        ["2 Months", "Internship"],
      ].map(([value, label]) => (

        <motion.div
          key={value}
          whileHover={{ y: -8, scale: 1.03 }}
          className="bg-[#1b1b1b] border border-yellow-500/20 rounded-2xl p-8 text-center"
        >

          <h2 className="text-4xl font-bold text-yellow-400">
  {value}
</h2>

          <p className="text-gray-400 mt-3">

            {label}

          </p>

        </motion.div>

      ))}

    </div>

  </div>

</motion.div>


{/* ================= TOOLS ================= */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-16"
>

  <div className="flex items-center gap-4 mb-8">

    <div className="bg-yellow-400 p-3 rounded-xl">

      <FaTools className="text-black text-xl" />

    </div>

    <h2 className="text-3xl font-bold text-yellow-400">

      Tools & Technologies

    </h2>

  </div>

  <div className="flex flex-wrap gap-4">

    {tools.map((tool) => (

      <motion.span
        key={tool}
        whileHover={{
          scale: 1.08,
          y: -5,
        }}
        className="bg-yellow-400 text-black px-5 py-3 rounded-full font-bold shadow-lg cursor-default"
      >

        {tool}

      </motion.span>

    ))}

  </div>

</motion.div>
{/* ================= RESPONSIBILITIES ================= */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-20"
>

  <div className="flex items-center gap-4 mb-8">

    <div className="bg-yellow-400 p-3 rounded-xl">

      <FaTasks className="text-black text-xl" />

    </div>

    <h2 className="text-3xl font-bold text-yellow-400">

      Roles & Responsibilities

    </h2>

  </div>

  <div className="grid md:grid-cols-2 gap-6">

    {responsibilities.map((item) => (

      <motion.div
        key={item}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400 transition-all"
      >

        <p className="text-gray-300 leading-8">

          ✅ {item}

        </p>

      </motion.div>

    ))}

  </div>

</motion.div>
{/* ================= PROJECTS COMPLETED ================= */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-20"
>

  <div className="flex items-center gap-4 mb-8">

    <div className="bg-yellow-400 p-3 rounded-xl">

      <FaChartBar className="text-black text-xl" />

    </div>

    <h2 className="text-3xl font-bold text-yellow-400">

      Projects Completed

    </h2>

  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400 transition-all"
    >

      <h3 className="text-xl font-bold text-yellow-400 mb-3">
        📌 CCAA Task Manager Dashboard
      </h3>

      <p className="text-gray-300 leading-7">
        Developed an interactive Power BI dashboard to monitor CCAA task
        progress, completion status and reporting.
      </p>

    </motion.div>

    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400 transition-all"
    >

      <h3 className="text-xl font-bold text-yellow-400 mb-3">
        📌 Alumni MSMS Old Receipt Dashboard
      </h3>

      <p className="text-gray-300 leading-7">
        Built a Power BI dashboard for analyzing alumni receipt records and
        generating business reports.
      </p>

    </motion.div>

    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400 transition-all"
    >

      <h3 className="text-xl font-bold text-yellow-400 mb-3">
        📌 Ticket Report Dashboard
      </h3>

      <p className="text-gray-300 leading-7">
        Created an interactive dashboard for ticket analytics, SLA monitoring
        and performance reporting.
      </p>

    </motion.div>

    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400 transition-all"
    >

      <h3 className="text-xl font-bold text-yellow-400 mb-3">
        📌 Excel → JSON Automation
      </h3>

      <p className="text-gray-300 leading-7">
        Developed Python & Pandas scripts to automate Excel dataset conversion
        into JSON format.
      </p>

    </motion.div>

    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400 transition-all md:col-span-2 xl:col-span-2"
    >

      <h3 className="text-xl font-bold text-yellow-400 mb-3">
        📌 Student Admission Analysis
      </h3>

      <p className="text-gray-300 leading-7">
        Prepared admission reports using Pivot Tables, Conditional Formatting,
        Heatmaps and Excel-based data analysis for institutional reporting.
      </p>

    </motion.div>

  </div>

</motion.div>
{/* ================= KEY ACHIEVEMENTS ================= */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-20"
>

  <div className="flex items-center gap-4 mb-8">

    <div className="bg-yellow-400 p-3 rounded-xl">
      <FaTrophy className="text-black text-xl" />
    </div>

    <h2 className="text-3xl font-bold text-yellow-400">
      Key Achievements
    </h2>

  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-8 text-center hover:border-yellow-400 transition-all"
    >
      <h3 className="text-2xl font-bold text-yellow-400 mb-3">
      ⚡Excel → JSON Automation
      </h3> 
       <p className="text-gray-300 leading-7">
      Automated Excel dataset conversion using Python & Pandas,
      reducing manual effort and improving workflow efficiency.
       </p>

    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-8 text-center hover:border-yellow-400 transition-all"
    >
      <h3 className="text-2xl font-bold text-yellow-400  mb-3"> 
         📊 Dashboard Development
      </h3>
      <p className="text-gray-300 leading-7">
        Designed interactive Power BI dashboards for CCAA, Alumni
      Records and Ticket Reporting.
      </p>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-8 text-center hover:border-yellow-400 transition-all"
    >
      <h3 className="text-2xl font-bold text-yellow-400 mb-3">
        📈 Business Reporting
      </h3>
      <p className="text-gray-300 leading-7">
        Generated daily operational reports and analytical insights
      for institutional reporting.
      </p>
    </motion.div>

    

    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-8 text-center hover:border-yellow-400 transition-all"
    >
      <h3 className="text-2xl font-bold text-yellow-400 mb-3">
        🧹 Data Cleaning
      </h3>
      <p className="text-gray-300 leading-7">
      Cleaned, validated and transformed institutional datasets
      containing thousands of records.
      </p>
    </motion.div>

    
    <motion.div
    whileHover={{ scale: 1.05, y: -8 }}
    className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-400 transition-all"
  >
    <h3 className="text-2xl font-bold text-yellow-400 mb-3">
      🤝 HR & LMS Support
    </h3>

    <p className="text-gray-300 leading-7">
      Assisted HR operations, ticket management and Learning
      Management System reporting.
    </p>
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.05, y: -8 }}
    className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-400 transition-all"
  >
    <h3 className="text-2xl font-bold text-yellow-400 mb-3">
      🚀 Process Improvement
    </h3>

    <p className="text-gray-300 leading-7">
      Improved reporting speed through automation, dashboards and
      streamlined data processing workflows.
    </p>
  </motion.div>


  </div>

</motion.div>



{/* ================= SKILLS GAINED ================= */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-20"
>

  <div className="flex items-center gap-4 mb-8">

    <div className="bg-yellow-400 p-3 rounded-xl">
      <FaLightbulb className="text-black text-xl" />
    </div>

    <h2 className="text-3xl font-bold text-yellow-400">
      Skills Gained
    </h2>

  </div>

  <div className="flex flex-wrap gap-4">

    {skills.map((skill) => (

      <motion.span
        key={skill}
        whileHover={{
          scale: 1.08,
          y: -5,
        }}
        className="bg-yellow-400 text-black px-5 py-3 rounded-full font-bold shadow-lg cursor-default"
      >

        {skill}

      </motion.span>

    ))}

  </div>

</motion.div>

{/* ================= INTERNSHIP GALLERY ================= */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>

  <div className="flex items-center gap-4 mb-8">

    <div className="bg-yellow-400 p-3 rounded-xl">
      <FaChartBar className="text-black text-xl" />
    </div>

    <h2 className="text-3xl font-bold text-yellow-400">
      Internship Work Gallery
    </h2>

  </div>

  <motion.div
    whileHover={{
      scale: 1.02,
    }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-3xl overflow-hidden border-4 border-yellow-400 shadow-2xl"
  >

    <img
      src={internshipGallery}
      alt="Internship Work Gallery"
      className="w-full h-auto object-contain"
    />

  </motion.div>

  <div className="flex justify-center mt-8 mb-12">
  <a
    href="/internship-certificate"
    className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300"
  >
    📄 View Internship Certificate
  </a>
</div>


{/* ================= TATA GROUP JOB SIMULATION ================= */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-gradient-to-br from-[#151515] to-[#0d0d0d] border border-yellow-500/20 rounded-3xl p-10 shadow-[0_0_40px_rgba(250,204,21,0.08)] hover:border-yellow-400 transition-all duration-500 mb-20"
>

  <div className="flex items-center gap-5 mb-8">

    <div className="bg-yellow-400 p-5 rounded-2xl">

      <FaBriefcase className="text-black text-3xl" />

    </div>

    <div>

      <h2 className="text-4xl font-bold text-yellow-400">
        Tata Group Data Analytics Job Simulation
      </h2>

      <p className="text-gray-400 mt-2">
        Forage | Tata iQ Financial Services Team
      </p>

    </div>

  </div>

  <div className="flex items-center gap-4 mb-8">

    <FaCalendarAlt className="text-yellow-400 text-xl" />

    <span className="text-lg text-gray-300">
      Completed August 4, 2026
    </span>

  </div>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      "Completed an AI-powered data analytics and strategy simulation for the Financial Services team at Tata iQ.",

      "Conducted exploratory data analysis using GenAI tools to assess data quality, identify risk indicators and structure insights for predictive modeling.",

      "Proposed and justified an initial no-code predictive modeling framework to assess customer delinquency risk.",

      "Designed an AI-driven collections strategy using agentic AI, automation, ethical AI principles, regulatory compliance and scalable implementation frameworks.",
    ].map((item) => (

      <motion.div
        key={item}
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400 transition-all"
      >

        <p className="text-gray-300 leading-8">
          ✅ {item}
        </p>

      </motion.div>

    ))}

  </div>

  <div className="flex flex-wrap gap-3 mt-8">

    {[
      "AI Analytics",
      "AI Strategy",
      "Analytical Reporting",
      "Data Interpretation",
      "Model Selection",
      "Data Quality Management",
      "Exploratory Data Analysis",
      "Model Validation",
      "Predictive Analytics",
      "Process Automation",
      "Ethical Reasoning",
      "Regulatory Compliance",
      "Strategic Thinking",
    ].map((skill) => (

      <span
        key={skill}
        className="bg-yellow-400 text-black px-5 py-3 rounded-full font-bold"
      >
        {skill}
      </span>

    ))}

  </div>

<div className="flex justify-center mt-10">

  <a
    href="https://drive.google.com/file/d/1atxu_bW9oVERZcBX2kSS2LcIcZBtJuC0/view?usp=drivesdk"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300"
  >
    📄 View Job Simulation Certificate
  </a>

</div>

</motion.div>



{/* ================= QUANTIUM DATA ANALYTICS JOB SIMULATION ================= */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-gradient-to-br from-[#151515] to-[#0d0d0d] border border-yellow-500/20 rounded-3xl p-10 shadow-[0_0_40px_rgba(250,204,21,0.08)] hover:border-yellow-400 transition-all duration-500 mb-20"
>

  <div className="flex items-center gap-5 mb-8">

    <div className="bg-yellow-400 p-5 rounded-2xl">
      <FaBriefcase className="text-black text-3xl" />
    </div>

    <div>
      <h2 className="text-4xl font-bold text-yellow-400">
        Quantium Data Analytics Job Simulation
      </h2>

      <p className="text-gray-400 mt-2">
        Forage | Data Science Team
      </p>
    </div>

  </div>

  <div className="flex items-center gap-4 mb-8">
    <FaCalendarAlt className="text-yellow-400 text-xl" />
    <span className="text-lg text-gray-300">
      Completed August 7, 2026
    </span>
  </div>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      "Completed an online Data Analytics Job Simulation focused on customer analytics and commercial insights.",

      "Analyzed 264,834+ transaction records and performed customer analytics, data preparation and commercial insights.",

      "Conducted benchmark store analysis and uplift testing to evaluate trial store performance using data-driven techniques.",

      "Prepared analytical reports and commercial recommendations for the Category Manager to support strategic business decisions.",
    ].map((item) => (

      <motion.div
        key={item}
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-[#151515] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400 transition-all"
      >
        <p className="text-gray-300 leading-8">
          ✅ {item}
        </p>
      </motion.div>

    ))}

  </div>

  <div className="flex flex-wrap gap-3 mt-8">

    {[
      "Commercial Thinking",
      "Data Analysis",
      "Data Cleaning",
      "Data Validation",
      "Data Visualization",
      "Statistical Analysis",
      "Programming",
      "Communication Skills",
      "Presentation Skills",
      "Customer Analytics",
      "Commercial Insights",
      "Business Reporting",
    ].map((skill) => (

      <span
        key={skill}
        className="bg-yellow-400 text-black px-5 py-3 rounded-full font-bold"
      >
        {skill}
      </span>

    ))}

  </div>

  <div className="flex justify-center mt-10">

    <a
      href="https://drive.google.com/file/d/1K25XQALhJJO5m-NJzYWFfdtzu0Ah4F9l/view?usp=drivesdk"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300"
    >
      📄 View Job Simulation Certificate
    </a>

  </div>

</motion.div>



</motion.div>

</div>

</section>

);

}