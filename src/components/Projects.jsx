import dashboardImg from "./universal-ai-dashboard.png";
import retailDashboard from "./retail-sales-dashboard.png";
import sandhiyaAI from "./sandhiya-ai.png";
import churnDashboard from "./customer-churn-analysis-dashboard.png";
import employeeDashboard from "./employee-management-dashboard.png";
import salesDashboard from "./sales-analytics-dashboard.png";
import ticketDashboard from "./ticket-analysis-dashboard.png";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaChevronDown,
  FaChevronUp,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-7"
    >
      <div className="rounded-3xl overflow-hidden border border-yellow-500/20 bg-[#111111] hover:border-yellow-400 transition-all duration-300">

        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center px-8 py-7 hover:bg-[#1b1b1b] transition"
        >
          <span className="text-2xl font-bold text-white">
            {title}
          </span>

          {open ? (
            <FaChevronUp className="text-yellow-400 text-xl" />
          ) : (
            <FaChevronDown className="text-yellow-400 text-xl" />
          )}
        </button>

        <motion.div
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden"
        >
          <div className="px-8 pb-8 text-gray-300 leading-8">

            {children}

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default function Projects() {

  return (

    <section
      id="projects"
      className="bg-[#070707] text-white py-24 px-6"
      data-aos="fade-up"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-yellow-400"
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1 bg-yellow-400 rounded-full mx-auto mt-5"
        />

        <p className="text-center text-gray-400 mt-6 mb-20">
          AI • Data Analytics • Machine Learning Projects
        </p>
                {/* ================= UNIVERSAL AI DASHBOARD ================= */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#151515] rounded-3xl border border-yellow-500/20 p-8 mb-24 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-500"
        >

          <div className="text-center mb-12">

            <h2 className="text-5xl font-extrabold text-yellow-400">
              🌍 Universal AI Dashboard
            </h2>

            <p className="text-xl text-gray-400 mt-4">
              Python • Streamlit • AI Powered Data Analytics
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}

            <div>

              <Accordion title="Description">

                <p>
                  Developed an AI-powered analytics dashboard that allows users
                  to upload CSV & Excel datasets, automatically clean data,
                  generate dashboards, perform statistical analysis and receive
                  AI-powered insights using Google Gemini API.
                </p>

              </Accordion>

              <Accordion title="Business Impact">

                <ul className="list-disc ml-6 space-y-3">

                  <li>Automated complete data analysis workflow.</li>
                  <li>Reduced manual effort using AI.</li>
                  <li>Enabled non-technical users.</li>
                  <li>Improved business decision making.</li>

                </ul>

              </Accordion>

              <Accordion title="Technologies Used">

                <div className="flex flex-wrap gap-3">

                  {[
                    "Python",
                    "Streamlit",
                    "Pandas",
                    "NumPy",
                    "Plotly",
                    "Matplotlib",
                    "Gemini API",
                  ].map((tech) => (

                    <span
                      key={tech}
                      className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:scale-110 transition"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </Accordion>

              <Accordion title="Key Features">

                <ul className="list-disc ml-6 space-y-3">

                  <li>Upload CSV & Excel Files</li>
                  <li>Automatic Data Cleaning</li>
                  <li>Interactive Dashboards</li>
                  <li>AI Generated Insights</li>
                  <li>Business Reports</li>
                  <li>Downloadable Reports</li>

                </ul>

              </Accordion>

              <div className="flex gap-5 mt-8">

                <a
                  href="https://github.com/sandhiyashreesandhiya2006-droid/universal-AI-smart-dashboard"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-yellow-400 text-black py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:scale-105 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="https://universal-ai-dashboard-sandhiya-shree.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 border-2 border-yellow-400 py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:bg-yellow-400 hover:text-black transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div className="lg:sticky lg:top-24 self-start">

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl"
              >

                <img
                  src={dashboardImg}
                  alt="Universal AI Dashboard"
                  className="w-full h-auto object-cover"
                />

              </motion.div>

            </div>

          </div>

        </motion.div>
        {/* ================= RETAIL SALES ANALYSIS ================= */}

<motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-[#151515] rounded-3xl border border-yellow-500/20 p-8 mb-24 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-500"
>

  <div className="text-center mb-12">

    <h2 className="text-5xl font-extrabold text-yellow-400">
      🛒 Retail Sales Analysis
    </h2>

    <p className="text-xl text-gray-400 mt-4">
      Python • SQL • Power BI • Machine Learning
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-12">

    {/* LEFT */}

    <div>

      <Accordion title="Description">

        <p>
          Developed an end-to-end Retail Sales Analysis solution using
          Python, SQL, Power BI and Machine Learning. The project analyzes
          Superstore retail data to generate business insights, predictive
          models and interactive dashboards for decision making.
        </p>

      </Accordion>

      <Accordion title="Technologies Used">

        <div className="flex flex-wrap gap-3">

          {[
            "Python",
            "MySQL",
            "Power BI",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Scikit-learn",
            "Jupyter Notebook"
          ].map((tech) => (

            <span
              key={tech}
              className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:scale-110 transition"
            >
              {tech}
            </span>

          ))}

        </div>

      </Accordion>

      <Accordion title="SQL Analysis">

        <ul className="list-disc ml-6 space-y-3">

          <li>Executed 30+ SQL queries.</li>
          <li>Total Sales & Profit Analysis.</li>
          <li>Region-wise Sales Analysis.</li>
          <li>Category Performance.</li>
          <li>Top Customers Analysis.</li>
          <li>Monthly Sales Trend.</li>
          <li>Discount & Profit Analysis.</li>

        </ul>

      </Accordion>

      <Accordion title="Machine Learning">

        <ul className="list-disc ml-6 space-y-3">

          <li>Sales Forecasting using Linear Regression.</li>
          <li>Profit Prediction using Random Forest Regressor.</li>
          <li>Profit/Loss Classification using Random Forest.</li>
          <li>Model Accuracy : <span className="text-yellow-400 font-bold">94.4%</span></li>

        </ul>

      </Accordion>

      <Accordion title="Business Insights">

        <ul className="list-disc ml-6 space-y-3">

          <li>Technology generated highest sales.</li>
          <li>Consumer segment generated highest revenue.</li>
          <li>West region achieved highest sales.</li>
          <li>Heavy discounts reduced profitability.</li>
          <li>Sales trend increased over time.</li>

        </ul>

      </Accordion>

      <Accordion title="Business Recommendations">

        <ul className="list-disc ml-6 space-y-3">

          <li>Increase Technology inventory.</li>
          <li>Optimize discount strategies.</li>
          <li>Improve low-performing regions.</li>
          <li>Focus on high-value customers.</li>
          <li>Use ML models to reduce future losses.</li>

        </ul>

      </Accordion>
     <div className="mt-8">

  <a
    href="https://github.com/sandhiyashreesandhiya2006-droid/Retail-Sales-Analysis"
    target="_blank"
    rel="noreferrer"
    className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:scale-105 transition"
  >
    <FaGithub />
    View on GitHub
  </a>

</div>

    </div>

    {/* RIGHT */}

    <div className="lg:sticky lg:top-24 self-start">

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl"
      >

        <img
          src={retailDashboard}
          alt="Retail Sales Dashboard"
          className="w-full h-auto object-cover"
        />

      </motion.div>

    </div>

  </div>

</motion.div>

{/* ================= SANDHIYA AI ================= */}

<motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-[#151515] rounded-3xl border border-yellow-500/20 p-8 mb-24 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-500"
>

  <div className="text-center mb-12">

    <h2 className="text-5xl font-extrabold text-yellow-400">
      🤖 Sandhiya AI
    </h2>

    <p className="text-xl text-gray-400 mt-4">
      Python • Streamlit • Google Gemini AI • Document Intelligence
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-12">

    {/* LEFT */}

    <div>

      <Accordion title="Description">

        <p>
          Sandhiya AI is an AI-powered Document Intelligence and Analytics
          Platform developed using Python and Streamlit. It enables users to
          analyze documents, summarize content, answer questions, generate
          interview questions, perform web searches, preview datasets and
          interact with Google Gemini AI through an intuitive chat interface.
        </p>

      </Accordion>

      <Accordion title="Technologies Used">

        <div className="flex flex-wrap gap-3">

          {[
            "Python",
            "Streamlit",
            "Gemini API",
            "Pandas",
            "PyPDF2",
            "python-docx",
            "Pillow",
            "Requests",
          ].map((tech) => (

            <span
              key={tech}
              className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:scale-110 transition"
            >
              {tech}
            </span>

          ))}

        </div>

      </Accordion>

      <Accordion title="Key Features">

        <ul className="list-disc ml-6 space-y-3">

          <li>AI Chat Assistant</li>
          <li>Document Summarization</li>
          <li>Supports PDF, DOCX, CSV, Excel & TXT</li>
          <li>Dataset Preview & Analysis</li>
          <li>Web Search Integration</li>
          <li>AI Interview Question Generator</li>
          <li>Chat History Management</li>
          <li>Download Chat History</li>
          <li>Secure Login Authentication</li>

        </ul>

      </Accordion>
            <Accordion title="Business Impact">

        <ul className="list-disc ml-6 space-y-3">

          <li>Improved productivity using AI.</li>

          <li>Reduced manual work through automation.</li>

          <li>Enabled intelligent content generation.</li>

          <li>Enhanced user experience with conversational AI.</li>

        </ul>

      </Accordion>

      <div className="flex gap-5 mt-8">

        <a
          href="https://github.com/sandhiyashreesandhiya2006-droid/Sandhiya-AI."
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-yellow-400 text-black py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:scale-105 transition"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://sandhiya-ai-chatbot.streamlit.app/"
          target="_blank"
          rel="noreferrer"
          className="flex-1 border-2 border-yellow-400 py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:bg-yellow-400 hover:text-black transition"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>

      </div>

    </div>

    {/* RIGHT */}

    <div className="lg:sticky lg:top-24 self-start">

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl"
      >

        <img
          src={sandhiyaAI}
          alt="Sandhiya AI"
          className="w-full h-auto object-cover"
        />

      </motion.div>

    </div>

  </div>

</motion.div>
{/* ================= CUSTOMER CHURN ANALYSIS ================= */}

<motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-[#151515] rounded-3xl border border-yellow-500/20 p-8 mb-24 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-500"
>

  <div className="text-center mb-12">

    <h2 className="text-5xl font-extrabold text-yellow-400">
      📉 Customer Churn Analysis
    </h2>

    <p className="text-xl text-gray-400 mt-4">
      Python • Data Analytics • Customer Retention Analysis
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-12">

    {/* LEFT */}

    <div>

      <Accordion title="Description">

        <p>
          Customer Churn Analysis is a data analytics project developed
          using Python to identify customer retention patterns and analyze
          the key factors influencing customer churn. The project provides
          meaningful insights through data visualization to support
          customer retention strategies and business decision-making.
        </p>

      </Accordion>

      <Accordion title="Technologies Used">

        <div className="flex flex-wrap gap-3">

          {[
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
          ].map((tech) => (

            <span
              key={tech}
              className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:scale-110 transition"
            >
              {tech}
            </span>

          ))}

        </div>

      </Accordion>

      <Accordion title="Key Features">

        <ul className="list-disc ml-6 space-y-3">

          <li>Data Cleaning & Preprocessing</li>

          <li>Customer Churn Analysis</li>

          <li>Contract Type Analysis</li>

          <li>Gender-based Analysis</li>

          <li>Tenure Analysis</li>

          <li>Monthly Charges Analysis</li>

          <li>Interactive Data Visualization</li>

        </ul>

      </Accordion>

      <Accordion title="Results">

        <ul className="list-disc ml-6 space-y-3">

          <li>Identified key factors contributing to customer churn.</li>

          <li>Generated visual insights for business decision making.</li>

          <li>Improved understanding of customer retention trends.</li>

        </ul>

      </Accordion>

      <div className="mt-8">

        <a
          href="https://github.com/sandhiyashreesandhiya2006-droid/churn_analysis"
          target="_blank"
          rel="noreferrer"
          className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:scale-105 transition"
        >
          <FaGithub />
          View on GitHub
        </a>

      </div>

    </div>

    {/* RIGHT */}

    <div className="lg:sticky lg:top-24 self-start">

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl"
      >

        <img
          src={churnDashboard}
          alt="Customer Churn Analysis Dashboard"
          className="w-full h-auto object-cover"
        />

      </motion.div>

    </div>

  </div>

</motion.div>
{/* ================= Employee Management Dashboard ================= */}

<motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-[#151515] rounded-3xl border border-yellow-500/20 p-8 mb-24 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-500"
>

  <div className="text-center mb-12">

    <h2 className="text-5xl font-extrabold text-yellow-400">
      👨‍💼 Employee Management Dashboard
    </h2>

    <p className="text-xl text-gray-400 mt-4">
      SQL • MySQL • Power BI • HR Analytics
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-10">

    {/* LEFT */}

    <div>

      <Accordion title="Description">

        <p>
          Developed an Employee Management Dashboard using SQL,
          MySQL and Power BI to automate employee data analysis,
          attendance monitoring, salary analysis and HR reporting
          through interactive dashboards.
        </p>

      </Accordion>

      <Accordion title="Technologies Used">

        <div className="flex flex-wrap gap-3">

          {[
            "SQL",
            "MySQL",
            "Power BI",
            "Excel",
            "Data Visualization",
          ].map((tech) => (

            <span
              key={tech}
              className="bg-yellow-400 text-black px-5 py-3 rounded-full font-bold shadow-lg hover:scale-110 transition"
            >
              {tech}
            </span>

          ))}

        </div>

      </Accordion>

      <Accordion title="Key Features">

        <ul className="list-disc ml-6 space-y-3">

          <li>Employee Database Management</li>

          <li>SQL Automation</li>

          <li>Attendance Analysis</li>

          <li>Department Analysis</li>

          <li>Salary Analysis</li>

          <li>HR KPI Dashboard</li>

          <li>Interactive Reports</li>

          <li>Business Insights</li>

        </ul>

      </Accordion>

      <Accordion title="Business Impact">

        <ul className="list-disc ml-6 space-y-3">

          <li>Automated employee reporting using SQL.</li>

          <li>Reduced manual HR analysis.</li>

          <li>Improved department performance tracking.</li>

          <li>Enabled faster business decision-making.</li>

        </ul>

      </Accordion>

      <div className="flex gap-5 mt-8">

        <a
          href="https://github.com/sandhiyashreesandhiya2006-droid/Employee-Management-Dashboard"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-yellow-400 text-black py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:scale-105 transition"
        >

          <FaGithub />

          GitHub

        </a>

      </div>

    </div>

    {/* RIGHT */}

    <div className="flex justify-center">

      <motion.div

        whileHover={{ scale: 1.02 }}

        transition={{ duration: 0.3 }}

        className="rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl bg-[#111]"

      >

        <img

          src={employeeDashboard}

          alt="Employee Management Dashboard"

          className="w-full h-[700px] object-contain p-5"

        />

      </motion.div>

    </div>

  </div>

</motion.div>

  {/* ================= SALES ANALYTICS DASHBOARD ================= */}

<motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-[#151515] rounded-3xl border border-yellow-500/20 p-8 mb-24 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-500"
>

  <div className="text-center mb-12">

    <h2 className="text-5xl font-extrabold text-yellow-400">
      📊 Sales Analytics Dashboard
    </h2>

    <p className="text-xl text-gray-400 mt-4">
      Python • Streamlit • Plotly • Machine Learning
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-12">

    <div>

      <Accordion title="Description">
        <p>
          Developed an interactive Sales Analytics Dashboard using Python,
          Streamlit, Plotly and Scikit-Learn to analyze sales performance,
          customer behavior, regional trends and predict future sales using
          Machine Learning.
        </p>
      </Accordion>

      <Accordion title="Technologies Used">
        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "Pandas",
            "NumPy",
            "Streamlit",
            "Plotly",
            "Scikit-Learn",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:scale-110 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </Accordion>

      <Accordion title="Key Features">
        <ul className="list-disc ml-6 space-y-3">
          <li>Total Sales Analysis</li>
          <li>Total Profit Analysis</li>
          <li>Monthly Sales Trend</li>
          <li>Monthly Profit Analysis</li>
          <li>Category-wise Sales Distribution</li>
          <li>Region-wise Sales Analysis</li>
          <li>Top 10 Customers Analysis</li>
          <li>Payment Method Analysis</li>
          <li>Future Sales Prediction</li>
        </ul>
      </Accordion>

      <Accordion title="Dashboard Insights">
        <ul className="list-disc ml-6 space-y-3">
          <li>Identifies high-performing regions.</li>
          <li>Tracks monthly sales growth.</li>
          <li>Analyzes customer purchasing behavior.</li>
          <li>Evaluates category-wise performance.</li>
          <li>Predicts future sales trends.</li>
        </ul>
      </Accordion>

      <Accordion title="Project Highlights">
        <ul className="list-disc ml-6 space-y-3">
          <li>Data Analysis</li>
          <li>Data Visualization</li>
          <li>Dashboard Development</li>
          <li>Business Intelligence</li>
          <li>Machine Learning Forecasting</li>
          <li>Deployment using Streamlit</li>
        </ul>
      </Accordion>

      <div className="flex gap-5 mt-8">

        <a
          href="https://github.com/sandhiyashreesandhiya2006-droid/ml-dashboard"
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-yellow-400 text-black py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:scale-105 transition"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://ml-s-dashboard-sandhiya.streamlit.app/"
          target="_blank"
          rel="noreferrer"
          className="flex-1 border-2 border-yellow-400 py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:bg-yellow-400 hover:text-black transition"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>

      </div>

    </div>

    <div className="lg:sticky lg:top-24 self-start">

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl"
      >

        <img
          src={salesDashboard}
          alt="Sales Analytics Dashboard"
          className="w-full h-auto object-cover"
        />

      </motion.div>

    </div>

  </div>

</motion.div>

{/* ================= Ticket Analysis Dashboard ================= */}

<motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-[#151515] rounded-3xl border border-yellow-500/20 p-8 mb-24 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(250,204,21,0.15)] transition-all duration-500"
>

  <div className="text-center mb-12">

    <h2 className="text-5xl font-extrabold text-yellow-400">
      🎫 Ticket Analysis Dashboard
    </h2>

    <p className="text-xl text-gray-400 mt-4">
      Microsoft Excel • Power Query • Pivot Tables • Dashboard Automation
    </p>

  </div>

  <div className="grid lg:grid-cols-2 gap-10">

    {/* LEFT */}

    <div>

      <Accordion title="Description">

        <p>
          Ticket Analysis Dashboard is an interactive Excel Automation project
          developed to analyze customer support tickets, monitor SLA performance,
          track ticket resolution status and generate actionable business
          insights using dynamic dashboards.
        </p>

      </Accordion>

      <Accordion title="Technologies Used">

        <div className="flex flex-wrap gap-3">

          {[
            "Microsoft Excel",
            "Pivot Tables",
            "Pivot Charts",
            "Power Query",
            "Excel Automation",
            "Data Visualization",
          ].map((tech) => (

            <span
              key={tech}
              className="bg-yellow-400 text-black px-5 py-3 rounded-full font-bold hover:scale-110 transition"
            >
              {tech}
            </span>

          ))}

        </div>

      </Accordion>

      <Accordion title="Key Features">

        <ul className="list-disc ml-6 space-y-3">

          <li>Automated Excel Data Processing</li>

          <li>Interactive KPI Dashboard</li>

          <li>Ticket Status Analysis</li>

          <li>Priority Analysis</li>

          <li>Resolution Time Tracking</li>

          <li>SLA Performance Monitoring</li>

          <li>Agent Performance Analysis</li>

          <li>Monthly Ticket Trend Analysis</li>

          <li>Dynamic Charts & Visualizations</li>

        </ul>

      </Accordion>

      <Accordion title="Dashboard Insights">

        <ul className="list-disc ml-6 space-y-3">

          <li>Total Tickets</li>

          <li>Open vs Closed Tickets</li>

          <li>Priority Distribution</li>

          <li>SLA Compliance</li>

          <li>Average Resolution Time</li>

          <li>Monthly Ticket Trends</li>

          <li>Agent Performance</li>

        </ul>

      </Accordion>

      <Accordion title="Project Outcome">

        <ul className="list-disc ml-6 space-y-3">

          <li>Automated support ticket reporting.</li>

          <li>Improved SLA monitoring.</li>

          <li>Reduced manual reporting effort.</li>

          <li>Enabled data-driven support decisions.</li>

        </ul>

      </Accordion>

      <div className="mt-8">

        <a
          href="https://github.com/sandhiyashreesandhiya2006-droid/Ticket-Analysis-Dashboard"
          target="_blank"
          rel="noreferrer"
          className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:scale-105 transition"
        >
          <FaGithub />
          View on GitHub
        </a>

      </div>

    </div>

    {/* RIGHT */}

    <div className="flex justify-center">

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl bg-[#111]"
      >

        <img
          src={ticketDashboard}
          alt="Ticket Analysis Dashboard"
          className="w-full h-[700px] object-contain p-5"
        />

      </motion.div>

    </div>

  </div>

</motion.div>


      </div>

    </section>

  );
}



      