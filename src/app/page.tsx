import Filter from "@/components/ui/Filter";
import Hero from "@/components/shared/Hero";
import BookBike from "@/sections/HomePage/BookBike";
import Offers from "@/sections/HomePage/Offers";
import PopularDestination from "@/sections/HomePage/PopularDestination";
import PopularPackages from "@/sections/HomePage/PopularPackages";
import Services from "@/sections/HomePage/Services";
import Welcome from "@/sections/HomePage/Welcome";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero bg="/assets/imgs/bg.webp">
        <div className="max-w-[1920px] mx-auto text-center text-white" >
          <h1 className='text-2xl md:text-5xl lg:text-7xl mb-2 md:mb-4 font-podcast'>Enjoy in the best way!</h1>
          <p className='text-base md:text-2xl font-bold mb-4 lg:mb-16'>Enjoy our services for your trip anytime</p>
        </div>
        <Filter />
      </Hero>
      <PopularDestination/>
      <Welcome
        image="/assets/imgs/about-picture.png"
        subtitle="WELCOME TO OUR SITE!"
        title="We are the best company for your visit"
        width={450}
        height={650}
        gap="gap-[20px] min-[1200px]:gap-[214px]"  
        description="After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"
      />
      <Offers />
      <Services />
      <BookBike
        bikeImg="/assets/imgs/bike.png"
        title="Book Now Bike"
      />
      <PopularPackages />
      <Testimonials />
    </div>
  );
}
