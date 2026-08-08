import marcusThorneImg from '../assets/images/marcus_thorne.png';
import AnimatedSection from '../components/AnimatedSection';
import local_img_9 from '../assets/images/local_img_9.jpg';
import local_img_10 from '../assets/images/local_img_10.jpg';

const Trainers = () => {
  return (
    <div className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      {/* Header Section */}
      <header className="mb-section-gap text-left grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 md:col-start-1">
          <AnimatedSection type="reveal" delay={0.1}>
            <h1 className="font-display-lg text-4xl md:text-display-lg uppercase mb-base tracking-wide block">ELITE COACHING.</h1>
          </AnimatedSection>

          <AnimatedSection type="reveal" delay={0.3}>
            <h2 className="font-headline-xl text-2xl md:text-headline-xl text-on-surface-variant uppercase block">NO COMPROMISES.</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <p className="font-body-lg text-body-lg text-on-surface max-w-2xl mt-gutter">
              Our coaching staff is forged from the same iron as our facility. Professional athletes, powerlifters, and specialists dedicated to pushing you beyond your perceived limits. Meet the team that will rebuild you.
            </p>
          </AnimatedSection>
        </div>
      </header>

      {/* Trainers Grid (Bento style) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

        {/* Trainer 1: Lead Strength Coach (Large Card) */}
        <AnimatedSection className="md:col-span-8" delay={0.1}>
          <article className="bg-[#1A1D1E] border border-[#2A2E30] relative overflow-hidden group h-full glass-shine cursor-pointer">
            <div className="absolute inset-0 z-0">
              <div
                className="bg-cover bg-center bg-no-repeat w-full h-full mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                style={{ backgroundImage: `url(${marcusThorneImg})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D1E] from-40% via-[#1A1D1E]/80 via-55% to-transparent"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full p-gutter min-h-[500px]">
              <div className="flex justify-between items-end">
                <div>
                  <span className="inline-block font-label-caps text-label-caps text-on-primary-fixed bg-primary-fixed px-2 py-1 mb-base uppercase border border-primary-fixed">Lead Coach</span>
                  <h3 className="font-headline-xl text-3xl md:text-headline-xl uppercase text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">Marcus "The Anvil" Thorne</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mt-2 uppercase tracking-widest">Powerlifting • Biomechanics</p>
                </div>
              </div>
              <div className="mt-gutter">
                <p className="font-body-md text-body-md text-on-surface-variant mb-gutter max-w-xl">
                  Former elite powerlifter with over a decade of coaching experience. Marcus specializes in raw strength development and structural integrity. His methods are relentless, technical, and proven.
                </p>
                <div className="flex flex-wrap gap-base">
                  <span className="font-label-caps text-label-caps border border-[#2A2E30] px-3 py-1 text-secondary">CSCS Certified</span>
                  <span className="font-label-caps text-label-caps border border-[#2A2E30] px-3 py-1 text-secondary">USAW Level 2</span>
                </div>
              </div>
              <button className="mt-gutter w-full md:w-auto self-start bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps px-6 py-3 uppercase hover:bg-primary-fixed transition-colors heavy-bottom">Book Session</button>
            </div>
          </article>
        </AnimatedSection>

        {/* Trainer 2: Hypertrophy Specialist */}
        <AnimatedSection className="md:col-span-4" delay={0.3}>
          <article className="bg-[#1A1D1E] border border-[#2A2E30] relative overflow-hidden group flex flex-col h-full glass-shine cursor-pointer">
            <div className="h-64 relative z-0 shrink-0">
              <div
                className="bg-cover bg-[center_25%] bg-no-repeat w-full h-full mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                style={{ backgroundImage: `url(${local_img_9})`, maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" }}
              ></div>
            </div>
            <div className="relative z-10 flex flex-col p-gutter flex-grow justify-between -mt-12">
              <div>
                <h3 className="font-headline-xl text-2xl md:text-headline-xl uppercase text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">Elena "Valkyrie" Rostova</h3>
                <p className="font-label-caps text-label-caps text-primary-fixed mt-1 uppercase tracking-wider">Hypertrophy Specialist</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-4">
                  Focuses on targeted muscle growth and physique refinement. Elena’s programming is methodical, intense, and demands perfection in execution.
                </p>
              </div>
              <button className="mt-8 w-full border border-primary-fixed text-primary-fixed font-label-caps text-label-caps px-4 py-2 uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors">Book Session</button>
            </div>
          </article>
        </AnimatedSection>

        {/* Trainer 3: Conditioning */}
        <AnimatedSection className="md:col-span-4" delay={0.1}>
          <article className="bg-[#1A1D1E] border border-[#2A2E30] relative overflow-hidden group flex flex-col h-full glass-shine cursor-pointer">
            <div className="h-64 relative z-0 shrink-0">
              <div
                className="bg-cover bg-top bg-no-repeat w-full h-full mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                style={{ backgroundImage: `url(${local_img_10})`, maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" }}
              ></div>
            </div>
            <div className="relative z-10 flex flex-col p-gutter flex-grow justify-between -mt-12">
              <div>
                <h3 className="font-headline-xl text-2xl md:text-headline-xl uppercase text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">Jaxon "The Blueprint" Davis</h3>
                <p className="font-label-caps text-label-caps text-primary-fixed mt-1 uppercase tracking-wider">Conditioning • Metcon</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-4">
                  Specializes in pushing cardiovascular and muscular endurance to the absolute limit. Prepare to find your breaking point and push past it.
                </p>
              </div>
              <button className="mt-8 w-full border border-primary-fixed text-primary-fixed font-label-caps text-label-caps px-4 py-2 uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors">Book Session</button>
            </div>
          </article>
        </AnimatedSection>

        {/* Join the Team CTA */}
        <AnimatedSection className="md:col-span-8" delay={0.3}>
          <article className="bg-[#1A1D1E] border border-[#2A2E30] flex flex-col justify-center p-8 md:p-margin-desktop text-left relative overflow-hidden h-full glass-shine cursor-pointer group">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#121415] to-[#1A1D1E] opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-gutter">
              <div className="max-w-md">
                <h3 className="font-headline-xl text-3xl md:text-headline-xl uppercase text-white mb-4">HAVE WHAT IT TAKES?</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">We are always looking for elite coaches to join the legacy. If you demand excellence from yourself and your athletes, we want to hear from you.</p>
              </div>
              <button className="w-full md:w-auto bg-transparent border-2 border-on-surface text-on-surface font-label-caps text-label-caps px-8 py-4 uppercase hover:bg-on-surface hover:text-[#1A1D1E] transition-colors whitespace-nowrap">Apply Now</button>
            </div>
          </article>
        </AnimatedSection>

      </section>

      {/* Engineered For Excellence */}
      <section className="mt-32 pb-24 border-b border-[#2A2E30]">
        <AnimatedSection>
          <h2 className="font-headline-xl text-3xl md:text-headline-xl text-white uppercase mb-8">ENGINEERED FOR EXCELLENCE</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="bg-[#1A1D1E] p-8 h-full glass-shine cursor-pointer group relative overflow-hidden">
              <span className="material-symbols-outlined text-3xl text-primary-fixed mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
              <h3 className="font-headline-sm text-headline-sm uppercase text-white mb-2">STRUCTURAL INTEGRITY</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">"We don't just build muscle; we build resilient machines."</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-[#1A1D1E] p-8 h-full glass-shine cursor-pointer group relative overflow-hidden">
              <span className="material-symbols-outlined text-3xl text-primary-fixed mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              <h3 className="font-headline-sm text-headline-sm uppercase text-white mb-2">NEURO-MECHANICAL FOCUS</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">"Precision movement patterns for maximum neurological output."</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="bg-[#1A1D1E] p-8 h-full glass-shine cursor-pointer group relative overflow-hidden">
              <span className="material-symbols-outlined text-3xl text-primary-fixed mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
              <h3 className="font-headline-sm text-headline-sm uppercase text-white mb-2">DATA-DRIVEN PROGRESSION</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">"No guesswork. Every rep, set, and session is tracked and optimized."</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Legacy In Action */}
      <section className="mt-24">
        <AnimatedSection>
          <h2 className="font-headline-xl text-3xl md:text-headline-xl text-white uppercase mb-8">THE LEGACY IN ACTION</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="bg-[#1A1D1E] p-8 border-l-4 border-primary-fixed flex flex-col justify-center h-full glass-shine cursor-pointer group relative overflow-hidden">
              <p className="font-label-caps text-label-caps text-primary-fixed mb-2 uppercase tracking-widest text-xs">ATHLETE RESULT</p>
              <h3 className="font-headline-md text-headline-md text-white uppercase mb-2">S. VANCE</h3>
              <div className="font-stats-number text-stats-number text-primary-fixed leading-none mb-2">+40KG</div>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs">BACK SQUAT / 12 WEEKS</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-[#1A1D1E] p-8 border-l-4 border-primary-fixed flex flex-col justify-center h-full glass-shine cursor-pointer group relative overflow-hidden">
              <p className="font-label-caps text-label-caps text-primary-fixed mb-2 uppercase tracking-widest text-xs">ATHLETE RESULT</p>
              <h3 className="font-headline-md text-headline-md text-white uppercase mb-2">M. CHEN</h3>
              <div className="font-stats-number text-stats-number text-primary-fixed leading-none mb-2">-8%</div>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs">BODY FAT / 16 WEEKS</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="bg-[#1A1D1E] p-8 border-l-4 border-primary-fixed flex flex-col justify-center h-full glass-shine cursor-pointer group relative overflow-hidden">
              <p className="font-label-caps text-label-caps text-primary-fixed mb-2 uppercase tracking-widest text-xs">ATHLETE RESULT</p>
              <h3 className="font-headline-md text-headline-md text-white uppercase mb-2">K. ROSS</h3>
              <div className="font-stats-number text-stats-number text-primary-fixed leading-none mb-2">+15KG</div>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs">CLEAN & JERK / 8 WEEKS</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
