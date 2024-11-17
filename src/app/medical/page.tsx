import { FaLongArrowAltRight } from "react-icons/fa";
export default function Medical() {

    return <>
    <div className="p-16">
        <h1 className="text-4xl font-bold my-10 text-center text-slate-300">Medical Fitness For Pilot Training
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 my-8 md:my-12 md:px-24">
    <div className="flex-1 rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left text-slate-300 flex flex-col justify-between items-center md:items-start h-[250px] w-[300px]">
        <h1 className="text-xl sm:text-xl font-bold mb-4 mt-1">Class 2 medicals</h1>
        <p>
            It can be carried out throughout India with doctors appointed by DGCA. Post completion you will be handed a CA - 35 assessment form as fitness certification and your reports will be sent to the office of DGCA for the issue of medical assessment later on you receive a final medical assessment from DGCA.
        </p>
    </div>

    <FaLongArrowAltRight color="white" className="hidden md:block text-3xl" />

    <div className="flex-1 rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left text-slate-300 flex flex-col justify-between items-center md:items-start h-[250px] w-[300px]">
        <h1 className="text-xl sm:text-xl font-bold mb-4 mt-1">Class 1 medicals</h1>
        <p>
            Class 1 initial medical assessment can be carried out in only 5 cities (Mumbai, Banglore, Delhi, Chennai and Johrat). Class 1 medical assessment date can only be requested post receiving class 2 assessment from DGCA.
        </p>
    </div>

    <FaLongArrowAltRight color="white" className="hidden md:block text-3xl" />

    <div className="flex-1 rounded-md border-2 shadow-md py-8 px-4 md:py-12 md:px-4 text-center md:text-left text-slate-300 flex flex-col justify-between items-center md:items-start h-[250px] w-[300px]">
        <h1 className="text-xl sm:text-xl font-bold mb-4 mt-1">File Number</h1>
        <p>
            Will get issued along with your class 2 assessment and will be mentioned on the class 2 assessment for your reference. This is a permanent and unique file number issued to each individual and all your documents sent to DGCA will be housed in relation to this file number.
        </p>
    </div>
</div>

            </div>
    </>
}