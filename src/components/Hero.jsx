import profile from "../assets/profile.png";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen text-white flex items-center justify-center px-6 pt-28 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.10),transparent_35%),#000]"
    >

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div
  data-aos="fade-right"
  data-aos-duration="1200"
>

          <p className="text-yellow-400 text-xl mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight whitespace-nowrap">
            Sandhiya{" "}
            <span className="text-yellow-400">
              Shree S
            </span>
          </h1>

          <h2 className="text-2xl text-gray-300 mt-6">
            Data Analyst | AI & Data Science Student
          </h2>

          <p className="text-gray-400 mt-8 leading-8 max-w-xl">
            Passionate about Data Analytics, Artificial Intelligence,
            Machine Learning, Power BI, Python and SQL.
            I love transforming raw data into meaningful insights.
          </p>

          <div className="flex gap-6 mt-10">

            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sandhiyashreesaravanakumar@gmail.com&su=Portfolio%20Inquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300 inline-flex items-center justify-center"
>
  Contact Me
</a>

            <a
  href="https://drive.google.com/file/d/1mJUFEV9ncOImisilUCBZUrY68KEeGohv/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-black hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300 inline-flex items-center justify-center"
>
  Resume
</a>
  

          </div>

        </div>

        {/* RIGHT */}
        <div
  className="flex justify-center"
  data-aos="fade-left"
  data-aos-duration="1200"
>

          <div className="relative animate-[float_5s_ease-in-out_infinite]">

            <div className="absolute inset-0 rounded-full bg-yellow-400/40 blur-[80px] scale-110"></div>

            <div className="relative rounded-full p-[6px] bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 shadow-[0_0_70px_rgba(250,204,21,0.7)]">

              <img
                src={profile}
                alt="Sandhiya"
                className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px]
                rounded-full object-cover object-top border-[4px] border-black"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
