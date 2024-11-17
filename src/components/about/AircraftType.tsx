import { SiBoeing } from "react-icons/si";
import { SiAirbus } from "react-icons/si";

export default function AircraftType() {
    return (
        <>
            <div className="py-8 px-4 sm:px-8 md:px-16 lg:px-32">
                <div className="rounded-lg  p-6 sm:p-8 md:p-10 border-2 border-gray-700 shadow-xl">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-6 text-slate-300">
                        Aircraft Type Rating
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-8">
                        <div className="bg-white py-4 px-6 md:py-5 md:px-8 rounded-lg flex items-center gap-4 md:gap-6 w-full md:w-auto">
                            <SiBoeing size={24} className="text-gray-800 md:size-[30px]" />
                            <p className="font-bold text-sm md:text-base lg:text-lg">Boeing 737 Type Rating</p>
                        </div>
                        <div className="bg-white py-4 px-6 md:py-5 md:px-8 rounded-lg flex items-center gap-4 md:gap-6 w-full md:w-auto">
                            <SiAirbus size={26} className="text-gray-800 md:size-[33px]" />
                            <p className="font-bold text-sm md:text-base lg:text-lg">Airbus A320 Type Rating</p>
                        </div>
                    </div>
                    <p className="text-center text-xl md:py-20 md:px-32 py-4 px-2 text-slate-300">
                    A320 type rating is a great decision to
                    enhance your career prospects and surpass the competition in your airline pilot job. The Indian skies are dominated by Airbus 320 and are the aircraft of choice by a majority of the Airlines operating in India. All over the world Airbus 320 surpassed its biggest competitor Boeing 737 in October 2019 to become the highest-selling single-aisle commercial airliner and has 8500 + aircraft in service with another 6000 aircraft on ?rm order for the coming future. Between all the Airlines combined India will take delivery of 1 Airbus aircraft every week making it an absolute choice for your Type Rating.
                     </p>
                </div>
            </div>
        </>
    );
}
