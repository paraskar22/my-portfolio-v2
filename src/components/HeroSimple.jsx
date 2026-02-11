import { motion } from "framer-motion";
import { styles } from "../styles";

const HeroSimple = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-primary`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className="text-white text-3xl sm:text-5xl font-semibold">
            Hi, I'm <span className="text-[#915EFF]">Vaishali Paraskar</span>
          </h1>
          <p className="mt-2 text-secondary text-sm sm:text-base">
            Full Stack Software Engineer
          </p>
        </div>
      </div>

      <div className="absolute top-[400px] sm:top-[200px] left-1/2 sm:left-[15%] transform -translate-x-1/2 sm:translate-x-0 z-10">
        <img 
          src="/vaishaliIMG.jpg"
          alt="Vaishali Paraskar"
          className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-lg border-4 border-[#915EFF]"
        />
      </div>
    </section>
  );
};

export default HeroSimple;
