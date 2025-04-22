import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials are not properly configured");
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.status === 200) {
        setLoading(false);
        alert("Thank you! Your message has been sent successfully.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error);
      alert(`Error: ${error.text || error.message}. Please try again later or contact me directly at paraskar06.vaishali@gmail.com`);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-pink-500`}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary 
                transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600 active:scale-95 active:bg-purple-700`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

        {/* Thank You Message */}
        <div className="flex justify-center mt-6">
          <p className="text-lg text-pink-400 text-center font-semibold">
            Thanks for being here!
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/vaishali-paraskar-23b2691a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-tertiary p-4 rounded-full hover:bg-[#0077b5] transition-all duration-300">
              <FaLinkedin className="text-white text-2xl" />
            </div>
          </a>
          <a
            href="https://github.com/paraskar22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-tertiary p-4 rounded-full hover:bg-gray-700 transition-all duration-300">
              <FaGithub className="text-white text-2xl" />
            </div>
          </a>
          <a href="mailto:paraskar06.vaishali@gmail.com">
            <div className="bg-tertiary p-4 rounded-full hover:bg-red-600 transition-all duration-300">
              <FaEnvelope className="text-white text-2xl" />
            </div>
          </a>
          <a
            href="https://discord.com/users/paraskar06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-tertiary p-4 rounded-full hover:bg-indigo-600 transition-all duration-300">
              <FaDiscord className="text-white text-2xl" />
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
