import profile from '@/assets/profile.png';
import Image from 'next/image';
import mail from '@/assets/mail.png';

export default function Team() {
    return (
        <>
            <div className="px-4 py-8 sm:px-8 md:px-16 lg:px-24 text-center">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-300 mb-6">Our Team</h1>
                <p className="text-gray-600 max-w-3xl mx-auto my-4 sm:my-6 md:my-8">
                    At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-8 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="rounded-md p-6 sm:p-8 border-2" data-aos="fade-up"
                
                   
                    >
                    <div className="flex justify-between mb-6 sm:mb-8">
                        <div className="flex gap-4 sm:gap-6">
                            <Image src={profile} alt='' height={40} width={40} />
                            <p className="font-bold text-lg sm:text-xl md:text-2xl text-slate-300">Ms. Sarah Anderson</p>
                        </div>
                        <Image src={mail} height={30} width={30} alt='' />
                    </div>
                    <div className='bg-[#F8FCFE] p-4 rounded-md border-2 shadow-lg'>
                        <h1 className='font-bold text-base sm:text-lg'>Qualification: Diploma in Child Psychology</h1>
                        <p className='text-sm sm:text-base my-2'>Ms. Emily&apos;s expertise in child psychology enables her to understand each child&apos;s unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.</p>
                    </div>
                </div>

                <div className="rounded-md p-6 sm:p-8 border-2" data-aos="fade-up"
>
                    <div className="flex justify-between mb-6 sm:mb-8">
                        <div className="flex gap-4 sm:gap-6">
                            <Image src={profile} alt='' height={40} width={40} />
                            <p className="font-bold text-lg sm:text-xl md:text-2xl text-slate-300">Ms. Sarah Anderson</p>
                        </div>
                        <Image src={mail} height={30} width={30} alt='' />
                    </div>
                    <div className='bg-[#F8FCFE] p-4 rounded-md border-2 shadow-lg'>
                        <h1 className='font-bold text-base sm:text-lg'>Qualification: Diploma in Child Psychology</h1>
                        <p className='text-sm sm:text-base my-2'>Ms. Emily&apos;s expertise in child psychology enables her to understand each child&apos;s unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.</p>
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
