import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className="text-white text-3xl sm:text-5xl font-semibold">
            Hi, I'm <span className="text-[#915EFF] text-2xl sm:text-4xl font-bold">Vaishali Paraskar</span>
          </h1>
          <p className="mt-2 text-white-100 text-sm sm:text-base leading-relaxed">
            I am a Data Analyst <br className="sm:block hidden" />
            I develop AI-driven solutions, statistical modeling, and data analytics
          </p>
        </div>
      </div>

      {/* Moved image to the left */}
      <div className="absolute top-[250px] left-[18%]">
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
            src="/src/assets/vaishaliIMG.jpg"
            alt="Vaishali Profile"
            className="w-96 h-96 object-cover rounded-lg border-4 border-[#915EFF] shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
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

export default Hero;
