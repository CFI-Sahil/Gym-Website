import heroTrenchesImg from '../assets/images/built_trenches_updated.png';
import AnimatedSection from '../components/AnimatedSection';

const Membership = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center border-b border-outline-variant overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full opacity-40 mix-blend-luminosity"
            style={{ backgroundImage: `url(${heroTrenchesImg})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-left mt-20 md:mt-0">
          <div className="max-w-3xl">
            <h1 className="font-display-lg text-[40px] leading-tight md:text-display-lg text-tertiary uppercase mb-4 md:mb-6 drop-shadow-lg flex flex-col md:gap-2">
              <AnimatedSection type="reveal" delay={0.1}>
                <span>BUILT IN THE</span>
              </AnimatedSection>
              <AnimatedSection type="reveal" delay={0.3}>
                <span className="text-primary-fixed block bg-primary-fixed/10 md:bg-transparent px-2 -mx-2 md:p-0 md:m-0 w-fit">TRENCHES</span>
              </AnimatedSection>
            </h1>

            <AnimatedSection delay={0.3}>
              <p className="font-body-md md:font-body-lg text-on-surface-variant mb-8 md:mb-10 max-w-xl pr-4 md:pr-0">
                Unapologetic focus on performance. A heavy, structural environment designed for professional athletes and serious fitness enthusiasts.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <button
                onClick={() => {
                  const element = document.getElementById('membership-tiers');
                  if (element) {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navbarHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="w-full md:w-auto font-label-caps text-label-caps bg-primary-fixed text-on-primary-fixed px-8 py-4 uppercase font-bold heavy-bottom transition-all text-sm md:text-lg tracking-widest border border-primary-fixed hover:bg-transparent hover:text-primary-fixed"
              >
                JOIN THE FACTORY &rarr;
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <AnimatedSection className="mb-8 md:mb-16">
          <div className="font-label-caps text-primary-fixed mb-2 tracking-widest">// THE STANDARD</div>
          <h2 className="font-headline-xl text-3xl md:text-headline-xl text-tertiary uppercase mb-4">No Excuses.<br className="md:hidden"/> Just Results.</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-gutter">
          {/* Feature 1 */}
          <AnimatedSection delay={0.1}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] flex flex-row md:flex-col p-6 md:p-8 relative overflow-hidden group hover:border-[#444748] transition-colors h-full glass-shine cursor-pointer">
              <span className="material-symbols-outlined text-primary-fixed mr-4 md:mb-6 text-2xl md:text-4xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
              <div className="flex-grow z-10">
                <h3 className="font-headline-sm md:font-headline-md text-tertiary uppercase mb-1 md:mb-2 text-lg md:text-2xl">Elite Equipment</h3>
                <p className="font-body-md text-on-surface-variant text-sm md:text-base">Calibrated plates, competition benches, and specialty bars. We stock only the highest grade iron.</p>
              </div>
              <div className="absolute top-4 -right-4 md:top-6 md:-right-4 bg-primary-fixed/90 text-[#1A1D1E] px-4 py-1 md:px-8 md:py-2 transform rotate-12 z-0 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-[0_4px_20px_rgba(255,204,0,0.15)]">
                <span className="material-symbols-outlined text-2xl md:text-5xl block">fitness_center</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Feature 2 */}
          <AnimatedSection delay={0.3}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] flex flex-row md:flex-col p-6 md:p-8 relative overflow-hidden group hover:border-[#444748] transition-colors h-full glass-shine cursor-pointer">
              <span className="material-symbols-outlined text-primary-fixed mr-4 md:mb-6 text-2xl md:text-4xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>sports_martial_arts</span>
              <div className="flex-grow z-10">
                <h3 className="font-headline-sm md:font-headline-md text-tertiary uppercase mb-1 md:mb-2 text-lg md:text-2xl">Pro Coaching</h3>
                <p className="font-body-md text-on-surface-variant text-sm md:text-base">Learn from competitive lifters. Flawless execution, programming, and meet day prep.</p>
              </div>
              <div className="absolute top-4 -right-4 md:top-6 md:-right-4 bg-primary-fixed/90 text-[#1A1D1E] px-4 py-1 md:px-8 md:py-2 transform rotate-12 z-0 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-[0_4px_20px_rgba(255,204,0,0.15)]">
                <span className="material-symbols-outlined text-2xl md:text-5xl block">sports_martial_arts</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Feature 3 */}
          <AnimatedSection delay={0.5}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] flex flex-row md:flex-col p-6 md:p-8 relative overflow-hidden group hover:border-[#444748] transition-colors h-full glass-shine cursor-pointer">
              <span className="material-symbols-outlined text-primary-fixed mr-4 md:mb-6 text-2xl md:text-4xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              <div className="flex-grow z-10">
                <h3 className="font-headline-sm md:font-headline-md text-tertiary uppercase mb-1 md:mb-2 text-lg md:text-2xl">24/7 Access</h3>
                <p className="font-body-md text-on-surface-variant text-sm md:text-base">The grind doesn't sleep. Secure, round-the-clock access for members on their own schedule.</p>
              </div>
              <div className="absolute top-4 -right-4 md:top-6 md:-right-4 bg-primary-fixed/90 text-[#1A1D1E] px-4 py-1 md:px-8 md:py-2 transform rotate-12 z-0 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-[0_4px_20px_rgba(255,204,0,0.15)]">
                <span className="material-symbols-outlined text-2xl md:text-5xl block">schedule</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership-tiers" className="py-12 md:py-section-gap w-full px-margin-mobile md:px-margin-desktop border-t border-outline-variant flex justify-center">
        <div className="w-full max-w-[1200px]">
          <AnimatedSection className="mb-10 md:mb-16 text-left md:text-center">
            <div className="font-label-caps text-primary-fixed mb-2 tracking-widest md:justify-center flex">// COMMITMENT</div>
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-tertiary uppercase mb-4">Membership Tiers</h2>
            <div className="w-16 md:w-24 h-1 bg-primary-fixed md:mx-auto"></div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center mt-8 md:mt-12">
            {/* Tier 1 */}
            <AnimatedSection delay={0.1}>
              <div className="bg-[#1A1D1E] border border-[#2A2E30] p-6 md:p-8 flex flex-col hover:border-[#444748] transition-colors glass-shine cursor-pointer group relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline-md text-tertiary uppercase text-xl md:text-2xl mb-1">Recruit</h3>
                    <div className="font-label-caps text-on-surface-variant text-[10px] md:text-xs">Open Gym Access</div>
                  </div>
                  <div className="text-right">
                    <div className="font-stats-number text-tertiary text-2xl md:text-3xl">₹4,999</div>
                    <div className="font-label-caps text-on-surface-variant text-[10px] md:text-xs">/month</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center text-on-surface text-sm md:text-body-md">
                    <span className="material-symbols-outlined text-primary-fixed mr-3 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> Open Gym Access
                  </li>
                  <li className="flex items-center text-on-surface text-sm md:text-body-md">
                    <span className="material-symbols-outlined text-primary-fixed mr-3 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> Locker Room Use
                  </li>
                  <li className="flex items-center text-[#444748] text-sm md:text-body-md">
                    <span className="material-symbols-outlined mr-3 text-base">close</span> Classes / Programming
                  </li>
                </ul>
                <button className="w-full font-label-caps text-xs md:text-label-caps border border-[#444748] text-tertiary bg-transparent py-3 md:py-4 uppercase hover:border-primary-fixed hover:text-primary-fixed transition-colors mt-auto tracking-wider">Select Recruit</button>
              </div>
            </AnimatedSection>

            {/* Tier 2 (Highlighted) */}
            <AnimatedSection delay={0.3}>
              <div className="relative z-10 transform md:-translate-y-2 md:scale-105 h-full pt-3 md:pt-0">
                <div className="absolute top-0 md:-top-3 left-1/2 -translate-x-1/2 bg-primary-fixed text-on-primary-fixed font-label-caps text-[10px] px-3 py-1 uppercase font-bold tracking-widest whitespace-nowrap z-20">Most Popular</div>
                <div className="bg-[#1A1D1E] border border-primary-fixed p-6 md:px-8 md:py-12 flex flex-col neon-glow relative shadow-2xl glass-shine cursor-pointer group overflow-hidden h-full">
                  
                  <div className="flex justify-between items-start mb-6 mt-2 md:mt-0">
                  <div>
                    <h3 className="font-headline-md text-primary-fixed uppercase text-xl md:text-2xl mb-1">Elite</h3>
                    <div className="font-label-caps text-on-surface-variant text-[10px] md:text-xs">Coached Programming</div>
                  </div>
                  <div className="text-right">
                    <div className="font-stats-number text-primary-fixed text-2xl md:text-3xl">₹7,999</div>
                    <div className="font-label-caps text-on-surface-variant text-[10px] md:text-xs">/month</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center text-on-surface text-sm md:text-body-md">
                    <span className="material-symbols-outlined text-primary-fixed mr-3 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> 24/7 Facility Access
                  </li>
                  <li className="flex items-center text-on-surface text-sm md:text-body-md">
                    <span className="material-symbols-outlined text-primary-fixed mr-3 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> Custom Weekly Programming
                  </li>
                  <li className="flex items-center text-on-surface text-sm md:text-body-md">
                    <span className="material-symbols-outlined text-primary-fixed mr-3 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> 2x Week Group Coaching
                  </li>
                </ul>
                <button className="w-full font-label-caps text-xs md:text-label-caps bg-primary-fixed text-on-primary-fixed py-3 md:py-4 uppercase font-bold heavy-bottom mt-auto tracking-wider">Select Elite</button>
                </div>
              </div>
            </AnimatedSection>

            {/* Tier 3 */}
            <AnimatedSection delay={0.5}>
              <div className="bg-[#1A1D1E] border border-[#2A2E30] p-6 md:p-8 flex flex-col hover:border-[#444748] transition-colors glass-shine cursor-pointer group relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline-md text-tertiary uppercase text-xl md:text-2xl mb-1">Legacy</h3>
                    <div className="font-label-caps text-on-surface-variant text-[10px] md:text-xs">Full Competitor Prep</div>
                  </div>
                  <div className="text-right">
                    <div className="font-stats-number text-tertiary text-2xl md:text-3xl">₹12,999</div>
                    <div className="font-label-caps text-on-surface-variant text-[10px] md:text-xs">/month</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center text-on-surface text-sm md:text-body-md">
                    <span className="material-symbols-outlined text-primary-fixed mr-3 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> All Elite Benefits
                  </li>
                  <li className="flex items-center text-on-surface text-sm md:text-body-md">
                    <span className="material-symbols-outlined text-primary-fixed mr-3 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> 1-on-1 Nutrition Plan
                  </li>
                  <li className="flex items-center text-on-surface text-sm md:text-body-md">
                    <span className="material-symbols-outlined text-primary-fixed mr-3 text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> Meet Day Handling
                  </li>
                </ul>
                <button className="w-full font-label-caps text-xs md:text-label-caps border border-[#444748] text-tertiary bg-transparent py-3 md:py-4 uppercase hover:border-primary-fixed hover:text-primary-fixed transition-colors mt-auto tracking-wider">Select Legacy</button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Pillars of Performance -> styled as Recovery Lounge lists */}
      <section className="py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full border-t border-outline-variant">
        <AnimatedSection className="mb-8 md:mb-12">
          <h2 className="font-headline-xl text-3xl md:text-headline-xl text-white uppercase mb-2 md:mb-4">THE PILLARS OF PERFORMANCE</h2>
          <div className="w-16 h-1 bg-primary-fixed"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <AnimatedSection delay={0.1}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] p-6 flex flex-col relative overflow-hidden group hover:border-[#444748] transition-colors h-full glass-shine cursor-pointer">
              <span className="material-symbols-outlined text-primary-fixed mb-4 text-2xl z-10" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
              <div className="z-10 pr-12">
                <h3 className="font-label-caps text-xs tracking-widest uppercase mb-2 text-white">Strength</h3>
                <p className="font-body-md text-on-surface-variant text-sm">Heavy compound focus. Building raw power through progressive overload.</p>
              </div>
              <div className="absolute right-4 top-4 font-headline-xl text-6xl text-[#2A2E30] z-0 font-bold leading-none">01</div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] p-6 flex flex-col relative overflow-hidden group hover:border-[#444748] transition-colors h-full glass-shine cursor-pointer">
              <span className="material-symbols-outlined text-primary-fixed mb-4 text-2xl z-10" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              <div className="z-10 pr-12">
                <h3 className="font-label-caps text-xs tracking-widest uppercase mb-2 text-white">Mindset</h3>
                <p className="font-body-md text-on-surface-variant text-sm">Uncompromising discipline. Mental fortitude forged under the bar.</p>
              </div>
              <div className="absolute right-4 top-4 font-headline-xl text-6xl text-[#2A2E30] z-0 font-bold leading-none">02</div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.5}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] p-6 flex flex-col relative overflow-hidden group hover:border-[#444748] transition-colors h-full glass-shine cursor-pointer">
              <span className="material-symbols-outlined text-primary-fixed mb-4 text-2xl z-10" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              <div className="z-10 pr-12">
                <h3 className="font-label-caps text-xs tracking-widest uppercase mb-2 text-white">Community</h3>
                <p className="font-body-md text-on-surface-variant text-sm">Forged together. An elite brotherhood driving each other to greatness.</p>
              </div>
              <div className="absolute right-4 top-4 font-headline-xl text-6xl text-[#2A2E30] z-0 font-bold leading-none">03</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Common Queries */}
      <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full border-t border-outline-variant flex flex-col items-center">
        <AnimatedSection className="mb-8 md:mb-12 text-center w-full">
          <h2 className="font-headline-xl text-3xl md:text-headline-xl text-white uppercase mb-2 md:mb-4">COMMON QUERIES</h2>
          <div className="w-16 h-1 bg-primary-fixed mx-auto"></div>
        </AnimatedSection>

        <div className="space-y-2 md:space-y-4 max-w-4xl w-full text-left">
          <AnimatedSection delay={0.1}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] p-6 md:p-8 hover:border-primary-fixed transition-colors cursor-pointer group flex items-start gap-4 glass-shine relative overflow-hidden">
              <span className="material-symbols-outlined text-primary-fixed flex-shrink-0 mt-0.5 text-xl opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward_ios</span>
              <div>
                <h3 className="font-label-caps text-xs md:text-sm text-white mb-2 uppercase tracking-widest">DO YOU OFFER GUEST PASSES?</h3>
                <p className="font-body-md text-on-surface-variant text-sm md:text-base">Yes, day passes are available for ₹999. Valid ID and signed waiver required.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] p-6 md:p-8 hover:border-primary-fixed transition-colors cursor-pointer group flex items-start gap-4 glass-shine relative overflow-hidden">
              <span className="material-symbols-outlined text-primary-fixed flex-shrink-0 mt-0.5 text-xl opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward_ios</span>
              <div>
                <h3 className="font-label-caps text-xs md:text-sm text-white mb-2 uppercase tracking-widest">WHAT ARE YOUR PEAK HOURS?</h3>
                <p className="font-body-md text-on-surface-variant text-sm md:text-base">Peak hours are typically 6:00 PM - 8:00 PM on weekdays. Elite members have 24/7 access to beat the rush.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] p-6 md:p-8 hover:border-primary-fixed transition-colors cursor-pointer group flex items-start gap-4 glass-shine relative overflow-hidden">
              <span className="material-symbols-outlined text-primary-fixed flex-shrink-0 mt-0.5 text-xl opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward_ios</span>
              <div>
                <h3 className="font-label-caps text-xs md:text-sm text-white mb-2 uppercase tracking-widest">IS THERE A TRIAL PERIOD?</h3>
                <p className="font-body-md text-on-surface-variant text-sm md:text-base">We don't do trials. If you're serious, you drop in or commit. Check out our 'guest pass' to start.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Membership;
