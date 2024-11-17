import { TbRating18Plus } from "react-icons/tb";
import Link from "next/link";
import planwm from '@/assets/planwm.png'
export default function Requirements() {
    return (
        <>
            <div className="my-8 p-4 sm:p-8 md:p-16" id="requirements">
                <div className="text-center w-full text-slate-300  rounded-xl shadow-xl" style={{
                    backgroundImage: `url(${planwm.src})`,
                    backgroundSize: '40%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold" data-aos="fade-down"
                data-aos-duration="10"
                data-aos-delay="000">Requirements to become a pilot</h1>
                    <p className="text-center w-full sm:w-[80%] md:w-[70%] mx-auto mt-4 sm:mt-6 md:mt-8" data-aos="fade-down"
                data-aos-duration="10"
                data-aos-delay="000">
                        With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child&apos;s future.
                    </p>
                    <Link href="/dgcaclass#pilot">
                    <button data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="000" className="bg-[#6E00FF] text-white border border-white 
                                      px-4 md:px-6 py-2 md:py-2.5 rounded 
                                      hover:bg-black transition duration-300 
                                      text-sm md:text-base mt-4 sm:mt-6 md:mt-8">
                        Learn More
                    </button>
                    </Link>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-8 md:gap-20 my-8 md:my-12">
    <div
        className="flex-1 rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left text-slate-300 flex flex-col justify-between items-center md:items-start h-full"
        data-aos="fade-up"
        data-aos-duration="70"
        data-aos-delay="000"
    >
        <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2">
            <TbRating18Plus size={30} />
        </div>
        <h2 className="text-lg sm:text-xl font-bold mb-4 mt-1">
            Minimum age requirement
        </h2>
        <p className="font-thin">
            You can enroll for the Pilot training program at 17 years of age as it would take you a 1 year to complete you pilot course and submit your documents for the issue of commercial pilot license
        </p>
    </div>

    <div
        className="flex-1 rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left text-slate-300 flex flex-col justify-between items-center md:items-start h-full"
        data-aos="fade-up"
        data-aos-duration="70"
        data-aos-delay="000"
    >
        <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2">
            <TbRating18Plus size={30} />
        </div>
        <h2 className="text-lg sm:text-xl font-bold mb-4 mt-1">
            Minimum Qualification for CPL issue
        </h2>
        <p className="font-thin">
            Pass in 10+2 with maths and physics / Diploma Equivalent Incase your educational background is from other streams for e.g - commerce, arts, etc you will have to appear for physics and mathematics separately from recognised open schools such as NIOS &ldquo;National institute of Open Schooling &ldquo;
        </p>
    </div>

    <div
        className="flex-1 rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left text-slate-300 flex flex-col justify-between items-center md:items-start h-full"
        data-aos="fade-up"
        data-aos-duration="70"
        data-aos-delay="000"
    >
        <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2">
            <TbRating18Plus size={30} />
        </div>
        <h2 className="text-lg sm:text-xl font-bold mb-4 mt-1">
            Proficiency in English Language
        </h2>
        <p className="font-thin">
            You should be able to understand, read and write english to pursue your cpl course
        </p>
    </div>
</div>
<div className="flex justify-center ">
    <div className=" text-center rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-8 text-center md:text-left text-slate-300  items-center md:items-start h-full w-[500px] ">
    <h2 className="text-lg sm:text-xl font-bold mb-4 mt-1 ">
    Medical Fitness For Pilot Training

        </h2>

        <p className="my-6 text-slate-300">
        We need to be 100% sure that you are medically fit to fly before you invest your money in a pilot course as it&apos;s a mandatory requirement. The medicals are a 2 step process.
        </p>
        <Link href="/medical">
                    <button data-aos="fade-down"
                data-aos-duration="5"
             className="bg-[#6E00FF] text-white border border-white 
                                      px-4 md:px-6 py-2 md:py-2.5 rounded 
                                      hover:bg-black transition duration-300 
                                      text-sm md:text-base mt-4 sm:mt-6 md:mt-8 mx-auto">
                        Learn More
                    </button>
                    </Link>
        
    </div>
</div>

            </div>
        </>
    );
}
