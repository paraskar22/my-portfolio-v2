import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Footer, Personal } from "./components";
import Certifications from "/src/components/Certifications.jsx";
import ChatBot from "./components/ChatBot";
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load Feedbacks
const Feedbacks = lazy(() => import("./components/Feedbacks"));

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Certifications />
          <Personal />
          <Suspense fallback={<div className="h-20" />}>
            <Feedbacks />
          </Suspense>
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
          <ChatBot />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
