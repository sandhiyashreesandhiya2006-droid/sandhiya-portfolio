import { useState } from "react";
import {
  ChevronDown,
  Code2,
  Database,
  Brain,
  Monitor,
  Sparkles,
} from "lucide-react";
const techData = [
  {
    title: "Programming Languages",
    icon: <Code2 size={22} />,
    skills: [
      "Python",
      "SQL (MySQL)",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
  },

  {
    title: "Data Analytics",
    icon: <Database size={22} />,
    skills: [
      "Power BI",
      "Excel",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn"
    ],
  },

  {
    title: "Machine Learning",
    icon: <Brain size={22} />,
    skills: [
      "Scikit-Learn",
      "Data Preprocessing",
      "Model Training",
      "Model Evaluation"
    ],
  },

  {
    title: "Development Tools",
    icon: <Monitor size={22} />,
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "Streamlit"
    ],
  },

  {
    title: "AI Tools",
    icon: <Sparkles size={22} />,
    skills: [
      "Google Gemini API",
      "Prompt Engineering"
    ],
  },
];
export default function About() {

const [open, setOpen] = useState(-1);
return (
  <section
  id="about"
  className="..."
  data-aos="fade-up"
>
    <div className="max-w-7xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-16">

        <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-400">
          About Me
        </h2>

        <div className="w-24 h-1 bg-yellow-400 rounded-full mx-auto mt-5"></div>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
          Passionate AI & Data Science student with a strong interest in
          Data Analytics, Machine Learning, Artificial Intelligence and
          Dashboard Development.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT CARD */}

        <div className="relative bg-[#151515]/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-10 overflow-hidden hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,0.20)] transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500"></div>

          <h3 className="text-3xl font-bold text-yellow-400 mb-8">
            Who Am I?
          </h3>

          <p className="text-gray-300 leading-9">

            Hello 👋 I'm
            <span className="text-yellow-400 font-bold">
              {" "}Sandhiya Shree S
            </span>

            <br /><br />

            Currently pursuing B.Tech Artificial Intelligence &
            Data Science at Apollo Engineering College.

            <br /><br />

            I enjoy transforming raw data into meaningful
            insights using Python, SQL, Excel and Power BI.

            <br /><br />

            My goal is to become a professional
            Data Analyst and build impactful AI solutions.

          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-black rounded-xl p-5 border border-yellow-500/20">
              <h4 className="text-yellow-400 font-bold text-3xl">
                10+
              </h4>
              <p className="text-gray-400 mt-2">
                Technologies
              </p>
            </div>

            <div className="bg-black rounded-xl p-5 border border-yellow-500/20">
              <h4 className="text-yellow-400 font-bold text-3xl">
                5+
              </h4>
              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT CARD */}

        <div className="relative bg-[#151515]/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-10 overflow-hidden hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,0.20)] transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500"></div>

          <h3 className="text-3xl font-bold text-yellow-400 mb-8">
            Tech Stack
          </h3>
          <p className="text-gray-400 mb-8 leading-7">
            Technologies, Frameworks & Tools I use for building modern applications.
          </p>
          {techData.map((item, index) => (
  <div
    key={index}
    className="
    mb-5
    rounded-2xl
    border border-yellow-500/20
    hover:border-yellow-400
    hover:shadow-[0_0_25px_rgba(250,204,21,0.18)]
    transition-all duration-300
    overflow-hidden
    bg-black/30
   "
  >
    {/* Accordion Header */}
    <button
      onClick={() => setOpen(open === index ? -1 : index)}
      className="w-full flex items-center justify-between px-6 py-6 hover:bg-yellow-400/10 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="text-yellow-400 text-3xl">
          {item.icon}
        </div>

        <h4 className="text-lg font-semibold">
          {item.title}
        </h4>
      </div>

      <ChevronDown
        className={`transition-transform duration-300 ${
          open === index ? "rotate-180" : ""
        }`}
      />
    </button>

    {/* Accordion Content */}
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        open === index ? "max-h-[400px]" : "max-h-0"
      }`}
    >
      <div className="p-5 pt-0">
        <div className="flex flex-wrap gap-3">

          {item.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-[#1d1d1d] border border-yellow-500/20 text-yellow-300 font-medium hover:bg-yellow-400 hover:text-black hover:scale-105 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}

        </div>
      </div>
    </div>
  </div>
))}
        </div>

      </div>

    </div>

  </section>
);
}