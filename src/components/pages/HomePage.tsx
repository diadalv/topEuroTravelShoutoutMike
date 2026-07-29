// HPI 1.7-V
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

// --- Constants & Placeholders ---
const PLACEHOLDER_IMG = "https://static.wixstatic.com/media/5a118b_e30bfeb7d0824de0aa152abab6d2f65b~mv2.png?originWidth=960&originHeight=704";

// --- Animation Variants ---
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const imageScaleVariants = {
  hover: { scale: 1.05, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-clip">
      <Header />
      
      <main className="flex-1 w-full flex flex-col items-center">
        
        {/* --- HERO SECTION: The Modular Grid --- */}
        <section 
          ref={containerRef}
          className="w-full max-w-[120rem] mx-auto px-4 md:px-6 pt-24 pb-12 md:pt-32 md:pb-24 relative"
        >
          <motion.div 
            style={{ y: yParallax, opacity: opacityFade }}
            className="w-full"
          >
            {/* Grid Container - Uses bg-gridborder and gap to create crisp lines */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(40vh,auto)] lg:auto-rows-[45vh] gap-[2px] bg-gridborder p-[2px] w-full"
            >
              
              {/* Block 1: Main Text (Top Left, spans 2 cols) */}
              <motion.div 
                variants={fadeUpVariants}
                className="col-span-1 md:col-span-2 row-span-1 bg-secondary flex flex-col justify-between p-8 md:p-12 lg:p-16 relative overflow-hidden group"
              >
                <div className="z-10">
                  <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase mb-4">
                    Essence:
                    <br />
                    <span className="text-foreground/80">Pure Form.</span>
                  </h1>
                </div>
                
                <div className="z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-12">
                  <p className="font-paragraph text-base md:text-lg text-foreground/70 max-w-xs">
                    A foundational template designed for clarity, structure, and effortless elegance.
                  </p>
                  <a 
                    href="#explore" 
                    className="inline-flex items-center gap-2 font-heading font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors duration-300 group/link"
                  >
                    Explore Now 
                    <MoveRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                
                {/* Subtle background texture/gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/20 pointer-events-none" />
              </motion.div>

              {/* Block 2: Vertical Image (Top Middle) */}
              <motion.div 
                variants={fadeUpVariants}
                className="col-span-1 row-span-1 bg-background relative overflow-hidden group"
              >
                <motion.div variants={imageScaleVariants} whileHover="hover" className="w-full h-full">
                  <Image 
                    src={PLACEHOLDER_IMG} 
                    alt="Vertical structural element" 
                    className="w-full h-full object-cover object-center opacity-90 mix-blend-multiply"
                  />
                </motion.div>
              </motion.div>

              {/* Block 3: Square Image (Top Right) */}
              <motion.div 
                variants={fadeUpVariants}
                className="col-span-1 row-span-1 bg-secondary relative overflow-hidden group"
              >
                <motion.div variants={imageScaleVariants} whileHover="hover" className="w-full h-full">
                  <Image 
                    src={PLACEHOLDER_IMG} 
                    alt="Detail view" 
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </motion.div>

              {/* Block 4: Square Image (Bottom Left) */}
              <motion.div 
                variants={fadeUpVariants}
                className="col-span-1 row-span-1 bg-background relative overflow-hidden group"
              >
                <motion.div variants={imageScaleVariants} whileHover="hover" className="w-full h-full">
                  <Image 
                    src={PLACEHOLDER_IMG} 
                    alt="Texture detail" 
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              </motion.div>

              {/* Block 5: Square Image (Bottom Middle) */}
              <motion.div 
                variants={fadeUpVariants}
                className="col-span-1 row-span-1 bg-secondary relative overflow-hidden group"
              >
                <motion.div variants={imageScaleVariants} whileHover="hover" className="w-full h-full">
                  <Image 
                    src={PLACEHOLDER_IMG} 
                    alt="Material focus" 
                    className="w-full h-full object-cover object-center opacity-90 mix-blend-multiply"
                  />
                </motion.div>
              </motion.div>

              {/* Block 6: Horizontal Image (Bottom Right, spans 2 cols) */}
              <motion.div 
                variants={fadeUpVariants}
                className="col-span-1 md:col-span-2 row-span-1 bg-background relative overflow-hidden group flex items-center justify-center p-12"
              >
                <motion.div variants={imageScaleVariants} whileHover="hover" className="w-full h-full absolute inset-0">
                  <Image 
                    src={PLACEHOLDER_IMG} 
                    alt="Wide structural element" 
                    className="w-full h-full object-cover object-center opacity-80"
                  />
                </motion.div>
                {/* Overlay Text on the wide block */}
                <div className="relative z-10 text-center pointer-events-none">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mix-blend-difference">
                    STRUCTURAL INTEGRITY
                  </h3>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </section>

        {/* --- SECTION 2: The Visual Breather (Full Bleed Parallax) --- */}
        <section id="explore" className="w-full h-[80vh] relative overflow-hidden mt-12 md:mt-24">
          <div className="absolute inset-0 bg-secondary/50 z-10 mix-blend-multiply" />
          <Image 
            src={PLACEHOLDER_IMG} 
            alt="Atmospheric background" 
            className="w-full h-full object-cover fixed-parallax-bg"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-4xl bg-background/90 backdrop-blur-sm p-12 md:p-24 border border-gridborder/20"
            >
              <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 text-foreground">
                Space as a Canvas
              </h2>
              <p className="font-paragraph text-lg md:text-xl text-foreground/80">
                We believe in the power of negative space. It is not empty; it is filled with potential. It guides the eye, creates rhythm, and allows content to breathe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 3: Sticky Narrative Flow --- */}
        <section className="w-full max-w-[120rem] mx-auto px-4 md:px-6 py-24 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Sticky Left Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeUpVariants}
              >
                <div className="w-12 h-[2px] bg-primary mb-8" />
                <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                  The Architecture of Content.
                </h2>
                <p className="font-paragraph text-lg text-foreground/70 mb-8">
                  Every element is placed with intention. The grid is our foundation, providing a rigid structure that we can creatively break to establish hierarchy and visual interest.
                </p>
                <ul className="space-y-6 font-paragraph text-base text-foreground/80">
                  <li className="flex items-start gap-4">
                    <span className="font-heading font-bold text-primary mt-1">01</span>
                    <span>Modular design allows for infinite scalability and adaptation.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-heading font-bold text-primary mt-1">02</span>
                    <span>Typography acts as both information and graphic element.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-heading font-bold text-primary mt-1">03</span>
                    <span>Color is used sparingly to direct focus and establish mood.</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:col-span-7 space-y-12 md:space-y-24">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-secondary group"
                >
                  <Image 
                    src={PLACEHOLDER_IMG} 
                    alt={`Narrative image ${item}`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-background/90 to-transparent">
                    <p className="font-heading font-semibold text-sm tracking-widest uppercase text-foreground">
                      Principle {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* --- SECTION 4: The Final Call (Minimalist Banner) --- */}
        <section className="w-full bg-secondary py-32 md:py-48 px-6 text-center border-t border-gridborder">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <h2 className="font-heading font-bold text-4xl md:text-6xl mb-8 text-foreground">
              Begin Your Build.
            </h2>
            <button className="group relative px-8 py-4 bg-foreground text-background font-heading font-semibold uppercase tracking-wider overflow-hidden rounded-none">
              <span className="relative z-10 flex items-center gap-2">
                Initialize Template <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>
        </section>

      </main>

      <Footer />

      {/* --- Scoped CSS for specific effects --- */}
      <style>{`
        .fixed-parallax-bg {
          /* Fallback for simple parallax if JS fails, though Framer Motion handles the main hero */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}