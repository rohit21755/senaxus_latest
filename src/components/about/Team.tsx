import profile from '@/assets/profile.png';
import Image from 'next/image';
import mail from '@/assets/mail.png';
import rohit from '@/assets/images/rohit_bhatt.png'
import niti from '@/assets/images/niti_tiwari.png'
export default function Team() {
    return (
        <>
            <div className="px-4 py-8 sm:px-8 md:px-16 lg:px-24 text-center">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-300 mb-6">Our Team</h1>
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-8 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="rounded-md p-6 sm:p-8 border-2" data-aos="fade-up"
                
                   
                    >
                    <div className="flex justify-between mb-6 sm:mb-8">
                        <div className="flex gap-4 sm:gap-6">
                            <Image src={profile} alt='' height={40} width={40} />
                            <div><p className="font-bold text-lg sm:text-xl md:text-2xl text-slate-300">Ramit Tiwari</p></div>
                            
                        </div>
                        <Image src={mail} height={30} width={30} alt='' />
                    </div>
                    <div className='bg-[#F8FCFE] p-4 rounded-md border-2 shadow-lg'>
                        <h1 className='font-bold text-base sm:text-lg'>Director, Aileron Air Private Limited</h1>
                        <p className='text-sm sm:text-base my-2'>Ramit Tiwari is a seasoned aviation professional with over 20 years of experience in aviation management and operations. Holding an MBA in Aviation Management and a Commercial Pilot License (CPL), he blends strategic leadership with technical expertise to drive excellence at Aileron Air Private Limited.
                        </p>
                        <p className='text-sm sm:text-base my-2'>As Director, Ramit has been pivotal in expanding the company’s private jet charter and aircraft management services, fostering a reputation for safety, innovation, and client satisfaction. His leadership focuses on operational efficiency, customer-centric service, and sustainable growth, making Aileron Air a trusted name in private aviation.
                        </p>
                        <p className='text-sm sm:text-base my-2'>Committed to mentoring future aviation professionals, Ramit continually champions excellence and collaboration within the industry.</p>
                    </div>
                </div>
                <div className="rounded-md p-6 sm:p-8 border-2" data-aos="fade-up"
                
                   
                    >
                    <div className="flex justify-between mb-6 sm:mb-8">
                        <div className="flex gap-4 sm:gap-6">
                            <Image src={profile} alt='' height={40} width={40} />
                            <div><p className="font-bold text-lg sm:text-xl md:text-2xl text-slate-300">Vikas Arora</p></div>
                            
                        </div>
                        <Image src={mail} height={30} width={30} alt='' />
                    </div>
                    <div className='bg-[#F8FCFE] p-4 rounded-md border-2 shadow-lg'>
                        <h1 className='font-bold text-base sm:text-lg'>Founder & CEO at Shrida Travels                        </h1>
                        <p className='text-sm sm:text-base my-2'>Vikas Arora, Founder and CEO of Shrida Travels, brings over 30 years of expertise in the travel and tourism industry.<br/> Under his leadership, this IATA-recognized agency has become a trusted provider of personalized travel services for corporate and individual clients.
                        </p>
                        <p className='text-sm sm:text-base my-2'>With a focus on strategic management, international partnerships, and operational excellence, Vikas has driven Shrida Travels’ remarkable growth by embracing innovation and maintaining a customer-first philosophy. Passionate about sustainability, he continues to expand the company’s global network and elevate its status as a market leader.
                        </p>
                        <p className='text-sm sm:text-base my-2'>His dedication to excellence and industry expertise ensure Shrida Travels delivers exceptional value and memorable travel experiences to clients worldwide.</p>
                    </div>
                </div>
                <div className="rounded-md p-6 sm:p-8 border-2" data-aos="fade-up"
                
                   
                    >
                    <div className="flex justify-between mb-6 sm:mb-8">
                        <div className="flex gap-4 sm:gap-6">
                            <Image src={profile} alt='' height={40} width={40} />
                            <div><p className="font-bold text-lg sm:text-xl md:text-2xl text-slate-300">Jyoti Arora                            </p></div>
                            
                        </div>
                        <Image src={mail} height={30} width={30} alt='' />
                    </div>
                    <div className='bg-[#F8FCFE] p-4 rounded-md border-2 shadow-lg'>
                        <h1 className='font-bold text-base sm:text-lg'>Founder & Director, Senaxus Air Pvt Ltd</h1>
                        <p className='text-sm sm:text-base my-2'>With 27 years in aviation, Jyoti Arora brings expertise across ground operations, flight management, and customer relations. As the founder of Senaxus Air Pvt Ltd, she is dedicated to delivering innovative, customer-focused solutions and driving operational excellence.
                        </p>
                        <p className='text-sm sm:text-base my-2'>Before founding Senaxus Air, Jyoti served as Duty Manager at Etihad Airways, managing ground and flight operations while upholding premium service standards. Her career also includes roles with Gulf Air, Malaysian Airlines, and Swiss Air, where she honed her skills in client relationship management and personalized service delivery.
                        </p>
                        <p className='text-sm sm:text-base my-2'>Her deep industry knowledge and leadership continue to shape the future of aviation through collaboration, innovation, and a steadfast commitment to customer satisfaction.</p>
                    </div>
                </div>
                <div className="rounded-md p-6 sm:p-8 border-2" data-aos="fade-up"
                
                   
                    >
                    <div className="flex justify-between mb-6 sm:mb-8">
                        <div className="flex gap-4 sm:gap-6">
                            <Image src={niti} alt='' height={40} width={40} className='rounded-full'/>
                            <div><p className="font-bold text-lg sm:text-xl md:text-2xl text-slate-300">Niti Tiwari                            </p></div>
                            
                        </div>
                        <Image src={mail} height={30} width={30} alt='' />
                    </div>
                    <div className='bg-[#F8FCFE] p-4 rounded-md border-2 shadow-lg'>
                        <h1 className='font-bold text-base sm:text-lg'>Founder & Director, Senaxus Air Pvt Ltd</h1>
                        <p className='text-sm sm:text-base my-2'>With over 30 years of experience in aviation, Niti Tiwari is a visionary leader blending technical expertise with a lifelong passion for flying. Holding a private pilot license and actively engaging in activities like microlight flying, gliding, and paragliding, she embodies a deep connection to aviation
                        </p>
                        <p className='text-sm sm:text-base my-2'>As Founder & Director of Senaxus Air Pvt Ltd, Niti has driven innovation, operational excellence, and sustainable growth. Under her guidance, the company has expanded to offer customer-focused, cutting-edge solutions that meet the evolving needs of modern aviation.
                        </p>
                        <p className='text-sm sm:text-base my-2'>Committed to safety, efficiency, and sustainability, Niti plays a key role in shaping the company’s strategy and fostering partnerships that elevate industry standards while maintaining her passion for aviation’s boundless possibilities.</p>
                    </div>
                </div>
               
                

                
            </div>
            <div className=' my-4 md:px-[440px] lg:px-[500px] px-8 mx-auto'>
            <div className="rounded-md p-6 sm:p-8 border-2" data-aos="fade-up"
                
                   
                >
                <div className="flex justify-between mb-6 sm:mb-8">
                    <div className="flex gap-4 sm:gap-6">
                        <Image src={rohit} alt='' height={40} width={40}  className='rounded-full'/>
                        <div><p className="font-bold text-lg sm:text-xl md:text-2xl text-slate-300">Rohit Bhatt                           </p></div>
                        
                    </div>
                    <a href='mailto:livingforclicking@gmail.com'>
                    <Image src={mail} height={30} width={30} alt='' />
                    </a>
                </div>
                <div className='bg-[#F8FCFE] p-4 rounded-md border-2 shadow-lg'>
                    <h1 className='font-bold text-base sm:text-lg'>Founder of LFC Ventures</h1>
                    <p className='text-sm sm:text-base my-2'>it’s been my dream. Like many aspiring pilots, I once envisioned myself in the cockpit, soaring through the skies. Unfortunately, due to a medical condition, I couldn’t clear the rigorous medical requirements for a Commercial Pilot License. But my passion for aviation never dimmed.
                    </p>
                    <p className='text-sm sm:text-base my-2'>Being the youngest member of this team, I bring a fresh perspective to the institute. Over the years, I’ve spent countless hours with aspiring pilots, understanding their challenges, dreams, and the dedication it takes to succeed in this field. Sitting with students every day has given me a unique insight into their journey, and I’ve made it my mission to create an environment that supports and empowers them at every step.
                    </p>
                    <p className='text-sm sm:text-base my-2'>For me, this isn’t just a business—it’s a way to give back to the aviation community and ensure that others can achieve the dream I once held close to my heart.</p>
                </div>
            </div>
            </div>
            

            <div className="flex justify-center w-full mt-8">
                <button data-aos="fade-down"

                  

                    data-aos-anchor-placement="top-center"
                    className="bg-[#3F3D56] text-white border border-white 
                               px-4 sm:px-6 py-2 sm:py-2.5 rounded 
                               hover:bg-black 
                               transition duration-300 
                               text-sm md:text-base
                               mt-4 sm:mt-6 lg:mt-8">
                    Gallery
                </button>
            </div>
        </>
    );
}
