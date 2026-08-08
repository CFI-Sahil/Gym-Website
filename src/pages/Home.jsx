import nonVegMealImg from '../assets/images/non_veg_meal.png';
import ironFloorImg from '../assets/images/iron_floor_updated.jpg';
import conditioningZoneImg from '../assets/images/conditioning_zone.png';
import AnimatedSection from '../components/AnimatedSection';
import ReviewsCarousel from '../components/ReviewsCarousel';
import local_img_1 from '../assets/images/local_img_1.jpg';

const Home = () => {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
      {/* Hero Header */}
      <header className="py-24 md:py-32 border-b border-surface-container-highest">
        <h1 className="font-display-lg text-4xl md:text-display-lg text-on-background uppercase mb-6 w-full md:w-3/4 leading-tight flex flex-col gap-2">
          <AnimatedSection type="reveal" delay={0.1}>
            <span>THE FORGE.</span>
          </AnimatedSection>
          <AnimatedSection type="reveal" delay={0.3}>
            <span className="text-surface-variant block">ENGINEERED FOR POWER.</span>
          </AnimatedSection>
        </h1>

        <AnimatedSection delay={0.3}>
          <p className="font-body-lg text-body-lg text-on-surface-variant md:w-1/2">
            Our facility is a carefully constructed ecosystem designed for maximum output. No distractions, no fluff. Just heavy iron, elite engineering, and an atmosphere built for serious athletes.
          </p>
        </AnimatedSection>
      </header>

      {/* Main Gallery & Layout */}
      <section className="mt-24 space-y-24">
        {/* Bento Grid 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[600px]">
          <AnimatedSection className="md:col-span-8 h-full" delay={0.1}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] relative overflow-hidden group h-full min-h-[400px] glass-shine cursor-pointer">
              <img
                alt="Main Gym Floor"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-[inset_0_0_80px_rgba(0,0,0,0.7)]"
                src={ironFloorImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full border-t border-surface-container-high bg-surface/80 backdrop-blur-sm">
                <h2 className="font-headline-xl text-3xl md:text-headline-xl text-primary-fixed uppercase mb-2">The Iron Floor</h2>
                <p className="font-body-md text-sm md:text-body-md text-on-surface-variant">Over 10,000 sq ft of dedicated strength training space featuring competition-grade platforms, monolifts, and calibrated plates.</p>
                <div className="flex gap-4 mt-4">
                  <span className="font-label-caps text-label-caps border border-outline px-3 py-1 text-on-surface">FREE WEIGHTS</span>
                  <span className="font-label-caps text-label-caps border border-outline px-3 py-1 text-on-surface">POWERLIFTING</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="md:col-span-4 flex flex-col gap-gutter">
            <AnimatedSection delay={0.3} className="flex-1">
              <div className="h-full bg-[#1A1D1E] border border-[#2A2E30] p-6 flex flex-col justify-center glass-shine cursor-pointer">
                <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
                <h3 className="font-headline-md text-headline-md uppercase mb-2 text-on-background">Arsenal Strength</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Full line of plate-loaded machines designed for optimal biomechanics and maximum load capacity.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="flex-1">
              <div className="h-full bg-[#1A1D1E] border border-[#2A2E30] p-6 flex flex-col justify-center border-l-4 border-l-primary-fixed glass-shine cursor-pointer">
                <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                <h3 className="font-headline-md text-headline-md uppercase mb-2 text-on-background">Calibrated Focus</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Rogue and Eleiko calibrated plates available at every major lifting station to ensure precision.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Specs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <AnimatedSection delay={0.1}>
            <div>
              <h2 className="font-headline-xl text-3xl md:text-headline-xl text-on-background uppercase mb-8 border-b border-surface-container-highest pb-4">Cardio Deck</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-surface-container-highest pb-2">
                  <span className="font-label-caps text-label-caps text-on-surface">ASSAULT BIKES</span>
                  <span className="font-stats-number text-stats-number text-primary-fixed">12x</span>
                </div>
                <div className="flex justify-between items-end border-b border-surface-container-highest pb-2">
                  <span className="font-label-caps text-label-caps text-on-surface">CONCEPT2 ROWERS</span>
                  <span className="font-stats-number text-stats-number text-primary-fixed">8x</span>
                </div>
                <div className="flex justify-between items-end border-b border-surface-container-highest pb-2">
                  <span className="font-label-caps text-label-caps text-on-surface">MANUAL TREADMILLS</span>
                  <span className="font-stats-number text-stats-number text-primary-fixed">6x</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant pt-4">
                  High-intensity, self-powered cardio equipment positioned on an elevated deck overlooking the main floor.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] p-8 relative overflow-hidden group min-h-[300px] h-full glass-shine cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"
                style={{ backgroundImage: `url(${conditioningZoneImg})` }}
              ></div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <span className="font-label-caps text-label-caps border border-primary-fixed text-primary-fixed px-3 py-1 inline-block w-fit mb-4">CONDITIONING ZONE</span>
                <h3 className="font-headline-md text-headline-md uppercase text-on-background">Engine Building</h3>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Elite Fuel Section */}
        <div className="mt-24">
          <header className="mb-12">
            <h2 className="font-display-lg text-4xl md:text-display-lg uppercase mb-2 leading-tight text-on-background flex flex-col gap-2">
              <AnimatedSection type="reveal" delay={0.1}>
                <span>ELITE FUEL.</span>
              </AnimatedSection>
              <AnimatedSection type="reveal" delay={0.3}>
                <span className="text-surface-variant block">PRECISION NUTRITION.</span>
              </AnimatedSection>
            </h2>

            <AnimatedSection delay={0.3}>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-6">
                Training is only half the battle. Fuel your performance with custom-tailored nutrition protocols designed for uncompromising results.
              </p>
            </AnimatedSection>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-gutter">
            {/* Meal 1 */}
            <AnimatedSection delay={0.1}>
              <div className="bg-[#1A1D1E] border border-[#2A2E30] group flex flex-col h-full glass-shine cursor-pointer relative overflow-hidden">
                <div className="h-64 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    style={{ backgroundImage: `url(${local_img_1})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D1E] to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline-md text-headline-md uppercase text-primary-fixed mb-2">Fuel Your Aim</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Optimized morning macros for sustained energy and muscle preservation.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Meal 2 */}
            <AnimatedSection delay={0.3}>
              <div className="bg-[#1A1D1E] border border-[#2A2E30] group flex flex-col h-full glass-shine cursor-pointer relative overflow-hidden">
                <div className="h-64 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    style={{ backgroundImage: `url(${nonVegMealImg})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D1E] to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="font-headline-md text-headline-md uppercase text-primary-fixed mb-2">Post-Grind Recovery</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Nutrient-dense rebuilding blocks for maximal recovery after intense training.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* The Shred */}
            <AnimatedSection delay={0.1}>
              <div className="bg-[#1A1D1E] border border-[#2A2E30] p-8 flex flex-col h-full glass-shine cursor-pointer group relative overflow-hidden">
                <span className="font-label-caps text-label-caps text-primary-fixed mb-4">FAT LOSS & DEFINITION</span>
                <h3 className="font-headline-md text-headline-md text-on-background uppercase mb-4">The Shred</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                  Focus on high protein, moderate fat, and carb cycling to strip body fat while preserving lean muscle mass.
                </p>
                <button className="w-full font-label-caps text-label-caps bg-primary-fixed text-on-primary-fixed py-3 uppercase font-bold heavy-bottom mt-auto">
                  VIEW SAMPLE MENU
                </button>
              </div>
            </AnimatedSection>

            {/* The Bulk */}
            <AnimatedSection delay={0.3}>
              <div className="bg-[#1A1D1E] border border-[#2A2E30] p-8 flex flex-col h-full glass-shine cursor-pointer group relative overflow-hidden">
                <span className="font-label-caps text-label-caps text-primary-fixed mb-4">HYPERTROPHY & POWER</span>
                <h3 className="font-headline-md text-headline-md text-on-background uppercase mb-4">The Bulk</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                  Focus on high calorie surplus, complex carbohydrates, and recovery-focused nutrients for maximum size gains.
                </p>
                <button className="w-full font-label-caps text-label-caps bg-primary-fixed text-on-primary-fixed py-3 uppercase font-bold heavy-bottom mt-auto">
                  VIEW SAMPLE MENU
                </button>
              </div>
            </AnimatedSection>

            {/* The Performance */}
            <AnimatedSection delay={0.5}>
              <div className="bg-[#1A1D1E] border border-[#2A2E30] p-8 flex flex-col h-full glass-shine cursor-pointer group relative overflow-hidden">
                <span className="font-label-caps text-label-caps text-primary-fixed mb-4">ATHLETIC CONDITIONING</span>
                <h3 className="font-headline-md text-headline-md text-on-background uppercase mb-4">The Performance</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                  Balanced macros for sustained energy and metabolic efficiency during high-intensity training cycles.
                </p>
                <button className="w-full font-label-caps text-label-caps bg-primary-fixed text-on-primary-fixed py-3 uppercase font-bold heavy-bottom mt-auto">
                  VIEW SAMPLE MENU
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
        {/* Recovery Lounge */}
        <AnimatedSection>
          <div className="bg-[#1A1D1E] border border-[#2A2E30] p-12 mt-24 text-center relative border-t-2 border-t-primary-fixed glass-shine cursor-pointer group overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
              <span className="material-symbols-outlined text-primary-fixed text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
            </div>
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-on-background uppercase mb-4">Recovery Lounge</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
              Professional-grade recovery tools to rebuild tissue and prepare the central nervous system for the next session.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-outline-variant p-6 bg-background h-full">
                <span className="font-stats-number text-stats-number text-on-background block mb-2">01</span>
                <h4 className="font-label-caps text-label-caps text-primary-fixed mb-2">COLD PLUNGE</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Two commercial tubs maintained at 39°F for optimal inflammation reduction.</p>
              </div>
              <div className="border border-outline-variant p-6 bg-background h-full">
                <span className="font-stats-number text-stats-number text-on-background block mb-2">02</span>
                <h4 className="font-label-caps text-label-caps text-primary-fixed mb-2">INFRARED SAUNA</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Full-spectrum infrared therapy to promote deep tissue recovery and cellular health.</p>
              </div>
              <div className="border border-outline-variant p-6 bg-background h-full">
                <span className="font-stats-number text-stats-number text-on-background block mb-2">03</span>
                <h4 className="font-label-caps text-label-caps text-primary-fixed mb-2">COMPRESSION</h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Normatec dynamic air compression systems available for post-training flush.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel />
    </div>
  );
};

export default Home;
