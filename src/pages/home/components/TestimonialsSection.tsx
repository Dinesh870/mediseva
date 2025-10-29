
import React, { useState } from 'react';

export const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: 'Akshay H.',
      image: 'https://medisevahealthcare.com/images/test-image1.png',
      rating: 5,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution. Long established fact that a reader will be distracted.'
    },
    {
      name: 'Priya S.',
      image: 'https://medisevahealthcare.com/images/test-image2.png',
      rating: 5,
      text: 'Excellent service and professional doctors. The online booking system is very convenient and user-friendly. I was able to get an appointment quickly and the consultation was thorough. Highly recommend MediSeva Healthcare for quality medical care.'
    },
    {
      name: 'Rajesh K.',
      image: 'https://medisevahealthcare.com/images/test-image1.png',
      rating: 5,
      text: 'Outstanding healthcare platform! The doctors are highly qualified and the staff is very supportive. Emergency services are prompt and reliable. The 24/7 availability gives me peace of mind knowing help is always available.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-blue-600 font-semibold text-lg mb-2">Testimonials</h6>
          <h2 className="text-4xl font-bold text-blue-800">What Our Clients Say</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-lg mr-1"></i>
                  ))}
                </div>
                
                <p className="text-blue-600 text-lg leading-relaxed mb-6">
                  "{testimonials[currentSlide].text}"
                </p>
                
                <h4 className="text-xl font-bold text-blue-800">
                  - {testimonials[currentSlide].name}
                </h4>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
          >
            <i className="fas fa-angle-left text-blue-600"></i>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
          >
            <i className="fas fa-angle-right text-blue-600"></i>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-blue-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
