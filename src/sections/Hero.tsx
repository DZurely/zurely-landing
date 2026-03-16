import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[fit-content] flex flex-col z-[2]">
      <div className="flex-1 flex items-center justify-center max-md:pt-6 max-md:px-5 max-md:pb-0 md:pt-10 md:px-6 md:pb-[50px]">
        <div className="max-w-[860px] w-full text-center">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ marginBottom: 5 }}
          >
            <img
              src="/zurely-w-text-transparent.png"
              alt="Zurely"  
              style={{
                height: "clamp(132px, 12vw, 168px)",
                display: "inline-block",
                filter: "drop-shadow(0 4px 24px rgba(44,203,111,0.18))",
              }}
            />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-[30px]"
          >
            <div className="inline-flex items-center gap-1.5 bg-[rgba(44,203,111,0.1)] border border-[rgba(44,203,111,0.25)] text-[#23A259] rounded-full py-1.5 px-3.5 text-[13px] font-semibold tracking-[0.02em]">
              <span className="w-2 h-2 rounded-full bg-[#2CCB6F] animate-[dotPulse_2s_ease-in-out_infinite]" />
              Coming Soon...
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[clamp(2.8rem,4.8vw,4rem)] font-extrabold leading-[1.15] tracking-[tight] mb-4 text-[color:var(--text-primary)]"
          >
            The All-in-One Digital Workspace
            <br />
            <span className="bg-gradient-to-br from-[#2CCB6F] to-[#1A47A9] bg-clip-text text-transparent">
              for the Modern Real Estate Professional
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="text-[clamp(1.1rem,1.8vw,1.4rem)] max-w-[640px] mx-auto mb-2.5 leading-[1.75] text-[color:var(--text-secondary)]"
          >
            Modernising compliance and documentation for the Malaysian property
            ecosystem. Designed by industry veterans for the next generation of
            agents.
          </motion.p>


        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex justify-center pb-5"
      >
        <motion.a
          href="#features"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[color:var(--text-muted)] no-underline flex flex-col items-center gap-1 text-[11px] font-medium tracking-[0.08em] uppercase"
        >
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
