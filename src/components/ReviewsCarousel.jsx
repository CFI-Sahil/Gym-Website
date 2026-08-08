import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const reviews = [
  {
    id: 1,
    name: 'Sandeep Yadav',
    rating: 5,
    text: 'The gym has a great environment for workouts. The trainers are very supportive and always help with exercises and workout routines. They also provide useful diet guidance and nutrition tips.',
  },
  {
    id: 2,
    name: 'Manju Yadav / 80',
    rating: 5,
    text: 'The gym has a good and safe environment, especially for girls. The trainers are very supportive and always help with workouts and exercise techniques. They also provide proper diet guidance and nutrition tips to help achieve fitness goals.',
  },
  {
    id: 3,
    name: 'Jiya tu Bihar ke lala',
    rating: 5,
    text: 'Power Factory is a great gym with a friendly atmosphere and good equipment. The trainers are helpful, and the gym is always clean and well-maintained. Plenty of machines and weights for all types of workouts. I\'ve had a great experience here and would definitely recommend it to anyone looking for a good gym to train consistently. 🔥🔥',
  },
  {
    id: 4,
    name: 'Vasikar S',
    rating: 5,
    text: 'Hands down the best gym in JB nagar! The facilities are top-notch — clean, spacious, and well-maintained with all the latest equipment. What sets this gym apart, though, is the amazing team of trainers. They\'re not only certified and knowledgeable, but they actually take the time to understand your goals and push you just enough to keep progressing. I\'ve seen real results here, and I actually look forward to my workouts now!',
  },
  {
    id: 5,
    name: 'Shanoo Revankar',
    rating: 5,
    text: 'My mom used to go here some 20 years back. Great place to attend. Lots of young folks with good energy and vibe. Trainers are helpful and are motivating. Tucked in private space. You can go as much. Equipment is updated and training programs are also provided. Go for it!!',
  },
  {
    id: 6,
    name: 'Yash Kelaskar',
    rating: 5,
    text: 'I\'ve been going to this gym since almost a year now. It has all the equipments required for a full satisfying workout experience. The gym is well maintained at all times. The trainers are always on the floor available for guidance and motivation to everyone. The owners of the gym Sainath, Sandesh and Amit are the sweetest and kindest people who manage the gym to its best and create an environment which makes me go there everyday and keeps me motivated.',
  },
  {
    id: 7,
    name: 'Papireddygari Maneesha',
    rating: 5,
    text: 'Went for a demo session and it was great. I wish I remembered the trainers name but he was great and instructed me well and kept corrected my posture. I wanted to join but it was a long commute for me so decided against it, but will recommend it to others.',
  },
  {
    id: 8,
    name: 'Sainisha Ghanekar',
    rating: 5,
    text: 'Friendly and professional trainers who has good knowledge and very supportive. Every kind of gym equipment is available. Three different sections are there for cardio, weight training and cross fit. Well maintained gym in reasonable price. Ambience is very positive and motivational.',
  },
  {
    id: 9,
    name: 'Prashant Gholam',
    rating: 5,
    text: 'The ambience of the gym is positive. All Equipments are very innovative and impressive. Trainers are very helpful and positive with clients. Well maintained gym. I always loved to spend my precious time at time place. ✌️🤗Thank u so much sainath and sandesh.',
  },
  {
    id: 10,
    name: 'Kartika Kharat',
    rating: 5,
    text: 'Let me start by saying that this gym caters to all your needs. There are plenty of equipments which allow you to perform a variety of exercises. I\'d like to mention the extremely coordinative, caring and professional staff which guides well during each workout. If you\'re looking for a gym, I think this one offers the best service at a very reasonable cost, go for it!',
  }
];

const ReviewCard = ({ review }) => (
  <div className="bg-surface-container-highest border border-[#2A2E30] p-6 flex flex-col h-full w-[300px] md:w-[400px] flex-shrink-0 mx-2 sm:mx-4 hover:border-primary-fixed transition-colors">
    <div className="flex flex-col gap-1 mb-4">
      <h4 className="text-on-background font-bold text-lg">{review.name}</h4>
      <div className="flex text-primary-fixed">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
    </div>
    <p className="text-on-surface-variant text-sm flex-grow line-clamp-6 whitespace-normal">{review.text}</p>
  </div>
);

const ReviewsCarousel = () => {
  // We duplicate the array to allow infinite seamless scrolling
  const desktopReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 border-t border-surface-container-highest overflow-hidden relative">
      <div className="mb-12">
        <AnimatedSection>
          <h2 className="font-headline-xl text-3xl md:text-headline-xl text-white uppercase mb-2">The Word on the Floor</h2>
          <div className="w-16 h-1 bg-primary-fixed"></div>
        </AnimatedSection>
      </div>

      <div className="relative w-full group overflow-hidden" data-cursor="drag">
        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] w-max">
          {desktopReviews.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
