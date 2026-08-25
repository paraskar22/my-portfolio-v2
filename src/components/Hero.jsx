import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { Canvas } from "@react-three/fiber";
import Stars from "./Stars";
import { useTheme } from "../context/ThemeContext";


const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* 3D Background with Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars theme={theme} />
        </Canvas>
      </div>

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="sm:ml-[35%] md:ml-[40%] lg:ml-[45%] xl:ml-[42%]">
          <h1 className="hero-title text-3xl sm:text-5xl font-semibold">
            Hi, I'm <span className="text-[#915EFF] text-2xl sm:text-4xl font-bold">Vaishali Paraskar</span>
          </h1>
          <p className="hero-subtitle mt-2 text-sm sm:text-base leading-relaxed max-w-2xl">
            I am a Full Stack Software Engineer   <br className="sm:block hidden" />
            leveraging modern frameworks to build data-driven, AI-enhanced applications with seamless frontend and backend integration.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/Vaishali_Paraskar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#915EFF] text-white font-semibold rounded-lg hover:bg-[#7a4fdd] transition-all duration-300 shadow-lg hover:shadow-[#915EFF]/40 hover:scale-105 text-sm sm:text-base"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-[#915EFF] text-[#915EFF] font-semibold rounded-lg hover:bg-[#915EFF] hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image - Responsive positioning - LEFT SIDE */}
      <div className="absolute top-[400px] sm:top-[200px] md:top-[180px] left-1/2 sm:left-[15%] md:left-[10%] lg:left-[10%] transform -translate-x-1/2 sm:translate-x-0 z-10">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <img 
            src="/vaishaliIMG.jpg"
            alt="Vaishali Paraskar"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg border-4 border-[#915EFF] shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[40px] h-[70px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
