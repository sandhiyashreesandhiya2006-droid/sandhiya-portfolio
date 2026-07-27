import {
  SiPython,
  SiMysql,
  SiHtml5,
  SiJavascript,
  SiGit,
  SiGithub,
  SiPandas,
  SiNumpy,
  SiStreamlit,
  SiJupyter,
  SiKaggle,
} from "react-icons/si";

import { FaChartBar } from "react-icons/fa";
import { FaCss3Alt, FaFileExcel } from "react-icons/fa";
import { TbBrandGoogle } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "SQL (MySQL)",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    name: "Excel",
    icon: FaFileExcel,
    color: "#217346",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: FaChartBar,
    color: "#F7DF1E",
    
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "#150458",
    
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    color: "#4D77CF",
    
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
    
  },
  {
    name: "VS Code",
    icon: BiLogoVisualStudio,
    color: "#007ACC",
    
  },
  {
    name: "Jupyter Notebook",
    icon: SiJupyter,
    color: "#F37626",
    
  },
  {
  name: "Power BI",
  icon: FaFileExcel,
  color: "#F2C811",
  },
  {
    name: "Streamlit",
    icon: SiStreamlit,
    color: "#FF4B4B",
    
  },
  {
    name: "Kaggle",
    icon: SiKaggle,
    color: "#20BEFF",
    
  },
  {
    name: "JSON",
    icon: VscJson,
    color: "#F7DF1E",
    
  },
  {
    name: "Gemini API",
    icon: TbBrandGoogle,
    color: "#4285F4",
    
  },
  {
  name: "Tableau",
  icon: FaChartBar,
  color: "#E97627",
},
{
  name: "Power BI Service",
  icon: FaChartBar,
  color: "#F2C811",
},
{
  name: "Scikit-learn",
  icon: FaChartBar,
  color: "#F7931E",
},
{
  name: "Looker Studio",
  icon: FaChartBar,
  color: "#4285F4",
},
];


const softSkills = [
  { name: "Problem Solving", icon: "🧩" },
  { name: "Analytical Thinking", icon: "🧠" },
  { name: "Communication", icon: "💬" },
  { name: "Teamwork", icon: "🤝" },
  { name: "Time Management", icon: "⏰" },
  { name: "Adaptability", icon: "🔄" },
  { name: "Critical Thinking", icon: "🎯" },
  { name: "Quick Learning", icon: "🚀" },
];

const coreSkills = [
  { name: "Data Analysis", icon: "📊" },
  { name: "Data Visualization", icon: "📈" },
  { name: "Dashboard Development", icon: "📋" },
  { name: "Data Cleaning", icon: "🧹" },
  { name: "Exploratory Data Analysis", icon: "🔍" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Business Intelligence", icon: "📊" },
{ name: "KPI Reporting", icon: "📌" },
{ name: "Data Preprocessing", icon: "⚙️" },
{ name: "Excel Automation", icon: "📑" },
{ name: "SQL Automation", icon: "🗄️" },
];
const mlSkills = [
  { name: "Linear Regression", icon: "📈" },
  { name: "Random Forest", icon: "🌲" },
  { name: "Classification", icon: "🎯" },
  { name: "Feature Engineering", icon: "⚙️" },
  { name: "Sales Forecasting", icon: "📊" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#070707] text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400">
            Skills
          </h2>
          

          <div className="w-28 h-1 bg-yellow-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6 text-lg">
            Technologies, Frameworks & Tools I use for building AI and Data Analytics projects.
          </p>
          

        </div>

        {/* Skills Grid */}

        <h3 className="text-4xl font-bold text-yellow-400 text-center mb-10">
          Technical Skills
        </h3>

        {/* Skills Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="
                  group
                  relative
                  bg-[#151515]
                  rounded-3xl
                  border
                  border-yellow-500/20
                  py-10 
                  px-8
                  hover:border-yellow-400
                  hover:-translate-y-3
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]
                  transition-all
                  duration-500
                  overflow-hidden
                "
              >
                {/* Glow */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent transition duration-500"></div>

                {/* Icon */}

                <div className="relative flex justify-center">

                  <div className="w-20 h-20 rounded-2xl bg-black/40 border border-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition duration-500">

                    <Icon
                      size={46}
                      color={skill.color}
                    />

                  </div>

                </div>

                {/* Skill Name */}

                <h3 className="relative text-center text-xl font-semibold mt-6">
                  {skill.name}
                </h3>


                </div>
                );
                })}

                </div>
                  

                  {/* Core Competencies */}

                  <div className="mt-20">

                    <h3 className="text-4xl font-bold text-yellow-400 text-center mb-10">
                      Core Competencies
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

                      {coreSkills.map((skill) => (
                        <div
                          key={skill.name}
                          className="
                            group
                            relative
                            bg-[#151515]
                            rounded-3xl
                            border
                            border-yellow-500/20
                            py-10
                            px-8
                            hover:border-yellow-400
                            hover:-translate-y-3
                            hover:scale-105
                            hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]
                            transition-all
                            duration-500
                            overflow-hidden
                          "
                        >
                          {/* Glow */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent transition duration-500"></div>

                          {/* Icon */}
                          <div className="relative flex justify-center">
                            <div className="w-20 h-20 rounded-2xl bg-black/40 border border-yellow-500/20 flex items-center justify-center text-5xl group-hover:scale-110 transition duration-500">
                              {skill.icon}
                            </div>
                          </div>

                          {/* Name */}
                          <h3 className="relative text-center text-xl font-semibold mt-6">
                            {skill.name}
                          </h3>

                        </div>
                      ))}

                    </div>

                  </div>
                  {/* Machine Learning */}

<div className="mt-20">

  <h3 className="text-4xl font-bold text-yellow-400 text-center mb-10">
    Machine Learning
  </h3>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

    {mlSkills.map((skill) => (
      <div
        key={skill.name}
        className="
          group
          relative
          bg-[#151515]
          rounded-3xl
          border
          border-yellow-500/20
          py-10
          px-8
          hover:border-yellow-400
          hover:-translate-y-3
          hover:scale-105
          hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]
          transition-all
          duration-500
          overflow-hidden
        "
      >

        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent transition duration-500"></div>

        {/* Icon */}
        <div className="relative flex justify-center">
          <div className="w-20 h-20 rounded-2xl bg-black/40 border border-yellow-500/20 flex items-center justify-center text-5xl group-hover:scale-110 transition duration-500">
            {skill.icon}
          </div>
        </div>

        {/* Name */}
        <h3 className="relative text-center text-xl font-semibold mt-6">
          {skill.name}
        </h3>

      </div>
    ))}

  </div>

</div>

                  {/* Soft Skills */}

<div className="mt-20">

  <h3 className="text-4xl font-bold text-yellow-400 text-center mb-10">
    Soft Skills
  </h3>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

    {softSkills.map((skill) => (
      <div
        key={skill.name}
        className="
          group
          relative
          bg-[#151515]
          rounded-3xl
          border
          border-yellow-500/20
          py-10
          px-8
          hover:border-yellow-400
          hover:-translate-y-3
          hover:scale-105
          hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]
          transition-all
          duration-500
          overflow-hidden
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent transition duration-500"></div>

        {/* Icon */}
        <div className="relative flex justify-center">
          <div className="w-20 h-20 rounded-2xl bg-black/40 border border-yellow-500/20 flex items-center justify-center text-5xl group-hover:scale-110 transition duration-500">
            {skill.icon}
          </div>
        </div>

        {/* Name */}
        <h3 className="relative text-center text-xl font-semibold mt-6">
          {skill.name}
        </h3>

      </div>
    ))}

  </div>

</div>


{/* Highlights */}

<h3 className="text-4xl font-bold text-yellow-400 text-center mt-20 mb-10">
  Highlights
</h3>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

  {/* Card 1 */}

  <div
    className="
      group
      relative
      bg-[#151515]
      rounded-3xl
      border
      border-yellow-500/20
      py-10
      px-8
      hover:border-yellow-400
      hover:-translate-y-3
      hover:scale-105
      hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]
      transition-all
      duration-500
      overflow-hidden
    "
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent transition duration-500"></div>

    <div className="relative flex justify-center">
      <div className="w-20 h-20 rounded-2xl bg-black/40 border border-yellow-500/20 flex items-center justify-center">
        <span className="text-4xl font-bold text-yellow-400">
          17+
        </span>
      </div>
    </div>

    <h3 className="text-center text-xl font-semibold mt-6">
      Technologies
    </h3>

  </div>

  {/* Card 2 */}

  <div
    className="
      group
      relative
      bg-[#151515]
      rounded-3xl
      border
      border-yellow-500/20
      py-10
      px-8
      hover:border-yellow-400
      hover:-translate-y-3
      hover:scale-105
      hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]
      transition-all
      duration-500
      overflow-hidden
    "
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent transition duration-500"></div>

    <div className="relative flex justify-center">
      <div className="w-20 h-20 rounded-2xl bg-black/40 border border-yellow-500/20 flex items-center justify-center">
        <span className="text-4xl font-bold text-yellow-400">
          5+
        </span>
      </div>
    </div>

    <h3 className="text-center text-xl font-semibold mt-6">
      Projects
    </h3>

  </div>

  {/* Card 3 */}

  <div
    className="
      group
      relative
      bg-[#151515]
      rounded-3xl
      border
      border-yellow-500/20
      py-10
      px-8
      hover:border-yellow-400
      hover:-translate-y-3
      hover:scale-105
      hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]
      transition-all
      duration-500
      overflow-hidden
    "
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent transition duration-500"></div>

    <div className="relative flex justify-center">
      <div className="w-20 h-20 rounded-2xl bg-black/40 border border-yellow-500/20 flex items-center justify-center">
        <span className="text-4xl font-bold text-yellow-400">
          1
        </span>
      </div>
    </div>

    <h3 className="text-center text-xl font-semibold mt-6">
      Internship
    </h3>

  </div>
</div>   {/* Highlights grid */}
</div>   {/* max-w-7xl */}
</section>
);
}                  