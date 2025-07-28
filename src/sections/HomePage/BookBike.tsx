import Image from 'next/image'
import form from '@/data/FormData';
import BookingForm from '@/components/ui/Form/BookingForm';
import TitleComponent from '@/components/shared/TitleComponent';
interface bikeData
{
    bikeImg: string;
    title: string;
}

export default function BookBike({bikeImg , title} : bikeData) {
  return (
    <section className='relative h-fit px-[40px] min-[1260px]:pl-[10%] min-[1260px]:pr-[8%] bg-cover bg-center' style={{ backgroundImage: `url("/assets/imgs/bg.png")` }}>
      <div className='min-[2000px]:mx-auto max-w-[1920px] min-[992px]:flex justify-between align-center' data-aos="zoom-in">
      <div className='self-start min-[992px]:w-[50%] w-full min-[992px]:my-[60px]  my-5 '>
        <TitleComponent title={title} padding='text-center'/> 
        <BookingForm data={form} btn='Book Now'/>
      </div>
      <Image
       src={bikeImg}
       alt='bike'
       className='self-end min-[768px]:block hidden'
       width={724} height={542}
       loading= "lazy"
      />
      </div>
    </section>
  )
}
