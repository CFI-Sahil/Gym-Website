import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import local_img_2 from '../assets/images/local_img_2.jpg';
import local_img_3 from '../assets/images/local_img_3.jpg';
import local_img_4 from '../assets/images/local_img_4.jpg';
import local_img_5 from '../assets/images/local_img_5.jpg';
import local_img_6 from '../assets/images/local_img_6.jpg';
import local_img_7 from '../assets/images/local_img_7.jpg';
import local_img_8 from '../assets/images/local_img_8.jpg';

const scheduleData = {
  MON: [
    { time: '06:00 AM', class: 'Powerlifting', type: 'Strength', trainer: 'Marcus T.', img: local_img_2, status: 'BOOK NOW' },
    { time: '08:00 AM', class: 'HIIT Blast', type: 'Conditioning', trainer: 'Sarah K.', img: local_img_3, status: 'FULL' },
    { time: '12:00 PM', class: 'Mobility Flow', type: 'Recovery', trainer: 'David R.', img: local_img_4, status: 'BOOK NOW' },
    { time: '04:00 PM', class: 'Powerlifting', type: 'Strength', trainer: 'Marcus T.', img: local_img_2, status: 'BOOK NOW' },
    { time: '06:30 PM', class: 'Combat Sports', type: 'Combat', trainer: 'Alex J.', img: local_img_5, status: 'FULL' },
    { time: '08:00 PM', class: 'HIIT Blast', type: 'Conditioning', trainer: 'Sarah K.', img: local_img_3, status: 'BOOK NOW' },
  ],
  TUE: [
    { time: '06:00 AM', class: 'HIIT Blast', type: 'Conditioning', trainer: 'Sarah K.', img: local_img_3, status: 'BOOK NOW' },
    { time: '09:00 AM', class: 'Powerlifting', type: 'Strength', trainer: 'Marcus T.', img: local_img_2, status: 'BOOK NOW' },
    { time: '05:00 PM', class: 'Mobility Flow', type: 'Recovery', trainer: 'David R.', img: local_img_4, status: 'FULL' },
    { time: '07:30 PM', class: 'Combat Sports', type: 'Combat', trainer: 'Alex J.', img: local_img_5, status: 'BOOK NOW' },
  ],
  WED: [
    { time: '07:00 AM', class: 'Mobility Flow', type: 'Recovery', trainer: 'David R.', img: local_img_4, status: 'BOOK NOW' },
    { time: '11:00 AM', class: 'HIIT Blast', type: 'Conditioning', trainer: 'Sarah K.', img: local_img_3, status: 'BOOK NOW' },
    { time: '06:00 PM', class: 'Powerlifting', type: 'Strength', trainer: 'Marcus T.', img: local_img_2, status: 'FULL' },
  ],
  THU: [
    { time: '06:00 AM', class: 'Powerlifting', type: 'Strength', trainer: 'Marcus T.', img: local_img_2, status: 'BOOK NOW' },
    { time: '04:00 PM', class: 'Combat Sports', type: 'Combat', trainer: 'Alex J.', img: local_img_5, status: 'BOOK NOW' },
    { time: '08:00 PM', class: 'HIIT Blast', type: 'Conditioning', trainer: 'Sarah K.', img: local_img_3, status: 'BOOK NOW' },
  ],
  FRI: [
    { time: '06:00 AM', class: 'Mobility Flow', type: 'Recovery', trainer: 'David R.', img: local_img_4, status: 'BOOK NOW' },
    { time: '12:00 PM', class: 'Powerlifting', type: 'Strength', trainer: 'Marcus T.', img: local_img_2, status: 'FULL' },
    { time: '05:30 PM', class: 'Combat Sports', type: 'Combat', trainer: 'Alex J.', img: local_img_5, status: 'BOOK NOW' },
  ],
  SAT: [
    { time: '08:00 AM', class: 'HIIT Blast', type: 'Conditioning', trainer: 'Sarah K.', img: local_img_3, status: 'BOOK NOW' },
    { time: '10:00 AM', class: 'Powerlifting', type: 'Strength', trainer: 'Marcus T.', img: local_img_2, status: 'BOOK NOW' },
    { time: '02:00 PM', class: 'Mobility Flow', type: 'Recovery', trainer: 'David R.', img: local_img_4, status: 'BOOK NOW' },
  ],
  SUN: [
    { time: '10:00 AM', class: 'Mobility Flow', type: 'Recovery', trainer: 'David R.', img: local_img_4, status: 'BOOK NOW' },
    { time: '12:00 PM', class: 'Open Gym', type: 'Free Training', trainer: 'Staff', img: local_img_2, status: 'OPEN' },
  ]
};

const Services = () => {
  const [activeDay, setActiveDay] = useState('MON');

  return (
    <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop pb-section-gap">
      {/* Page Header */}
      <section className="mb-20 text-left border-l-4 border-l-primary-fixed pl-6 mt-16">
        <AnimatedSection delay={0.1}>
          <h1 className="font-display-lg text-4xl md:text-display-lg uppercase mb-4 tracking-tighter">Classes & Schedule</h1>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <p className="font-body-md md:font-body-lg text-on-surface-variant max-w-2xl">Push your limits. Our elite training programs are designed for serious athletes who demand results.</p>
        </AnimatedSection>
      </section>

      {/* Class Types Grid */}
      <section className="mb-section-gap">
        <AnimatedSection>
          <h2 className="font-headline-xl text-3xl md:text-headline-xl mb-10 uppercase tracking-wide">Training Disciplines</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Powerlifting */}
          <AnimatedSection delay={0.1}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] relative h-80 flex flex-col justify-end group overflow-hidden glass-shine cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500 bg-gradient-to-t from-surface-container-lowest to-transparent" 
                style={{ backgroundImage: `url(${local_img_6})` }}
              ></div>
              <div className="relative p-6 z-10">
                <span className="font-label-caps text-label-caps text-primary-fixed mb-2 block">Strength</span>
                <h3 className="font-headline-md text-headline-md uppercase mb-2">Powerlifting</h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">Master the big three: Squat, Bench, and Deadlift. Build absolute strength.</p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* HIIT */}
          <AnimatedSection delay={0.3}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] relative h-80 flex flex-col justify-end group overflow-hidden glass-shine cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500 bg-gradient-to-t from-surface-container-lowest to-transparent" 
                style={{ backgroundImage: `url(${local_img_7})` }}
              ></div>
              <div className="relative p-6 z-10">
                <span className="font-label-caps text-label-caps text-primary-fixed mb-2 block">Conditioning</span>
                <h3 className="font-headline-md text-headline-md uppercase mb-2">HIIT</h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">High-Intensity Interval Training to maximize endurance and metabolic conditioning.</p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Mobility */}
          <AnimatedSection delay={0.5}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] relative h-80 flex flex-col justify-end group overflow-hidden glass-shine cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500 bg-gradient-to-t from-surface-container-lowest to-transparent" 
                style={{ backgroundImage: `url(${local_img_8})` }}
              ></div>
              <div className="relative p-6 z-10">
                <span className="font-label-caps text-label-caps text-primary-fixed mb-2 block">Recovery</span>
                <h3 className="font-headline-md text-headline-md uppercase mb-2">Mobility</h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">Enhance joint health, flexibility, and athletic longevity.</p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Combat Sports */}
          <AnimatedSection delay={0.7}>
            <div className="bg-[#1A1D1E] border border-[#2A2E30] relative h-80 flex flex-col justify-end group overflow-hidden glass-shine cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500 bg-gradient-to-t from-surface-container-lowest to-transparent" 
                style={{ backgroundImage: `url(${local_img_5})` }}
              ></div>
              <div className="relative p-6 z-10">
                <span className="font-label-caps text-label-caps text-primary-fixed mb-2 block">Combat</span>
                <h3 className="font-headline-md text-headline-md uppercase mb-2">Combat Sports</h3>
                <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">Boxing and MMA conditioning drills for power and speed.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Schedule */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-surface-container-high pb-4 gap-4 md:gap-0 w-full overflow-hidden">
          <AnimatedSection>
            <h2 className="font-headline-xl text-3xl md:text-headline-xl uppercase tracking-wide">Weekly Schedule</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="w-full md:w-auto">
            {/* Scrollable container on mobile */}
            <div className="flex gap-2 md:gap-4 font-label-caps text-label-caps overflow-x-auto hide-scrollbar w-full pb-2 md:pb-0 scroll-smooth">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                <button 
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`relative px-4 py-2 transition-colors flex-shrink-0 z-10 ${activeDay === day ? 'text-primary-fixed' : 'text-on-surface hover:text-primary-fixed'}`}
                >
                  {activeDay === day && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 border border-primary-fixed bg-[#1A1D1E] z-[-1]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {day}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
        
        <div className="flex flex-col w-full min-h-[400px]">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-4 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest border-b border-surface-container-high">
            <div className="col-span-2">Time</div>
            <div className="col-span-4">Class</div>
            <div className="col-span-3">Trainer</div>
            <div className="col-span-3 text-right">Action</div>
          </div>
          
          {/* Dynamic Schedule Items */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col w-full"
            >
              {scheduleData[activeDay]?.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 schedule-row items-center hover:bg-surface-container-lowest transition-colors group border-b border-surface-container-high md:border-none">
                  <div className="col-span-2 font-headline-md text-3xl md:text-xl">{item.time}</div>
                  <div className="col-span-4 flex flex-col">
                    <span className="font-headline-md text-2xl md:text-headline-md uppercase mb-1">{item.class}</span>
                    <span className="font-label-caps text-xs md:text-label-caps text-primary-fixed">{item.type}</span>
                  </div>
                  <div className="col-span-3 flex items-center gap-3 text-on-surface-variant mt-2 md:mt-0">
                    <img className="w-10 h-10 object-cover border border-outline-variant grayscale" src={item.img} alt={item.trainer} />
                    <span className="text-sm md:text-base">{item.trainer}</span>
                  </div>
                  <div className="col-span-3 flex justify-start md:justify-end mt-6 md:mt-0">
                    <button className={`${item.status === 'BOOK NOW' ? 'bg-primary-fixed text-on-primary-fixed heavy-bottom font-bold border-transparent' : item.status === 'FULL' ? 'border border-outline-variant text-on-surface cursor-not-allowed opacity-50' : 'bg-white text-black font-bold'} font-label-caps text-sm md:text-label-caps px-6 py-3 w-full md:w-auto uppercase transition-colors`}>
                      {item.status}
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Services;
