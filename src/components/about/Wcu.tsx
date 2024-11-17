import wcu from '@/assets/wcu.png'
import Image from 'next/image'
import planwm from '@/assets/planwm.png'

export default function Wcu() {
    return (
        <>
            <div className="p-8 sm:p-12 md:p-16 text-center" style={{
                backgroundImage: `url(${planwm.src})`,
                backgroundSize: '50%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-300">Why choose Senaxus?</h1>
                <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg mt-4">
                    Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of
                    empowering young learners to reach their potential through innovative teaching methods and a supportive
                    learning environment.
                </p>

                <div className="border-2 rounded-lg p-4 my-8 md:my-12 flex flex-col md:flex-row justify-between gap-8 shadow-lg text-slate-300">
                    <div className='w-full md:w-1/2 text-start px-6 sm:px-8 md:px-12 pt-8 md:pt-12'>
                        <div className='my-4'   data-aos-anchor-placement="top-center">
                            <h2 className='text-xl sm:text-2xl font-bold my-2'>Resilience and Future Horizons</h2>
                            <p className='font-thin text-sm sm:text-base'>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
                        </div>
                        <div className='my-4'   data-aos-anchor-placement="top-center">
                            <h2 className='text-xl sm:text-2xl font-bold my-2'>Innovation and Technology</h2>
                            <p className='font-thin text-sm sm:text-base'>Innovation became the driving force behind our kindergarten&apos;s progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.</p>
                        </div>
                        <div className='my-4'   data-aos-anchor-placement="top-center">
                            <h2 className='text-xl sm:text-2xl font-bold my-2'>Expansion and Recognition</h2>
                            <p className='font-thin text-sm sm:text-base'>These years marked a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.</p>
                        </div>
                        <div className='my-4'   data-aos-anchor-placement="top-center">
                            <h2 className='text-xl sm:text-2xl font-bold my-2'>Inception and Growth</h2>
                            <p className='font-thin text-sm sm:text-base'>Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.</p>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2'>
                        <Image src={wcu} alt=''  data-aos-anchor-placement="top-center"/>
                    </div>
                </div>
            </div>
        </>
    );
}
