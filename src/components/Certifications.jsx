import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({ index, name, provider, description, cert_link, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='certification_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(cert_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <span className='text-white text-sm'>PDF</span>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          <p className='text-secondary text-[14px]'>{provider}</p>
          <p className='mt-2 text-secondary text-[13px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Credentials & Achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These certifications represent my commitment to continuous learning and professional growth. 
          They cover a wide range of skills, from data analysis and machine learning to cloud services and development best practices.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
