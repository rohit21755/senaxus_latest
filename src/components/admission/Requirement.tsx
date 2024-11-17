// import { FaGraduationCap } from "react-icons/fa6";
import { TbRating18Plus } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
export default function Requirements(){
    return<>
    <div className="p-6 md:p-16 my-12">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Requirements</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                    <div
                        className="rounded-md border-2 shadow-md py-8 px-4 text-center"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2 mx-auto mb-4">
                            <TbRating18Plus size={30} />
                        </div>
                        <h2 className="text-xl font-bold mb-2">Minimum Age Requirement</h2>
                        <p className="font-thin text-gray-700">
                            Our passionate and qualified teachers create a supportive and stimulating learning environment.
                        </p>
                    </div>
                    
                    <div
                        className="rounded-md border-2 shadow-md py-8 px-4 text-center"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2 mx-auto mb-4">
                            <RiEnglishInput size={28} />
                        </div>
                        <h2 className="text-xl font-bold mb-2">English Proficiency</h2>
                        <p className="font-thin text-gray-700">
                            Our passionate and qualified teachers create a supportive and stimulating learning environment.
                        </p>
                    </div>

                    <div
                        className="rounded-md border-2 shadow-md py-8 px-4 text-center"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <div className="rounded-md p-2 bg-[#F1F9FD] w-fit border-2 mx-auto mb-4">
                            <LuGraduationCap size={30} />
                        </div>
                        <h2 className="text-xl font-bold mb-2">10+2 Physics/Math</h2>
                        <p className="font-thin text-gray-700">
                            Our passionate and qualified teachers create a supportive and stimulating learning environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}
