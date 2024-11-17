import Image from "next/image";
import airplane from '@/assets/images/airplane.png'
export default function Benefits() {
    return (
        <div className="p-4 sm:p-8 md:p-16">
            <div className=" md:flex-row">
                {/* Heading Section */}
                <div className="text-center py-8 pr-2 md:pl-6 text-center  text-slate-300">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold my-6 md:mt-10"
                        data-aos="fade-down"
                        data-aos-duration="20"
                        data-aos-delay="000">
                        DGCA Requirements
                    </h1>
                </div>

                {/* Benefits Grid Section */}
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-0  text-slate-300">
                        
                        {/* Each Benefit Card */}
                        <div className="flex rounded-xl py-2 px-4 border-2 items-center">
                            <div className="w-1/3  py-3 px-4 rounded-xl">
                                <Image src={airplane} width={100} height={100} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md ">100 HOURS PILOT IN COMMAND (PIC)</p>
                            </div>
                        </div>
                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3  py-3 px-4 rounded-xl">
                                <Image src={airplane} width={100} height={100} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">250 NAUTICAL MILES (NM) CHECK</p>
                            </div>
                        </div>
                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3  py-3 px-4 rounded-xl">
                                <Image src={airplane} width={100} height={100} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">40 HOURS INSTRUMENT FLIGHT OUT OF WHICH 20 HOURS IN THE SIMULATOR</p>
                            </div>
                        </div>

                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3  py-3 px-4 rounded-xl">
                                <Image src={airplane} width={100} height={100} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">50 HOURS OF SOLO CROSS COUNTRY</p>
                            </div>
                        </div>

                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3  py-3 px-4 rounded-xl">
                                <Image src={airplane} width={100} height={100} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">120 NAUTICAL MILES (NM) CHECK</p>
                            </div>
                        </div>

                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3  py-3 px-4 rounded-xl">
                                <Image src={airplane} width={100} height={100} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">10 HOURS OF MULTI-ENGINE</p>
                            </div>
                        </div>

                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3  py-3 px-4 rounded-xl">
                                <Image src={airplane} width={100} height={100} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">300 NAUTICAL MILES (NM) CHECK</p>
                            </div>
                        </div>

                        <div className="flex rounded-xl p-2 border-2 items-center">
                            <div className="w-1/3  py-3 px-4 rounded-xl">
                                <Image src={airplane} width={100} height={100} alt=""/>
                            </div>
                            <div className="p-4 w-2/3">
                                <p className="text-sm sm:text-md">10 TAKE OFF AND LANDING BY NIGHT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
