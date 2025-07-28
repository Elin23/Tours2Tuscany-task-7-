'use client';

import TestimonialCard from "@/components/cards/TestimonialCard";
import Slider from "@/components/ui/Slider";
import { TestimonialData } from "@/data/TestimonialData";

const Testimonials = () => {
  return (
    <div className="px-10 min-[1260px]:px-[10%] min-[2000px]:px-0 py-[50px] md:py-[123px] min-[2000px]:mx-auto max-w-[1920px]" data-aos="zoom-in">
      <Slider
        items={TestimonialData}
        title="Happy Customers Say"
        cardsPerView={{ desktop: 2, tablet: 1, mobile: 1 }}
        renderCard={(testimonial) => (
          <TestimonialCard
            image={testimonial.image}
            name={testimonial.name}
            text={testimonial.text}
          />
        )}
      />
    </div>
  );
};

export default Testimonials;
