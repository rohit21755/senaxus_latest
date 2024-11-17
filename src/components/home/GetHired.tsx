import Image from "next/image"
import airasia from '@/assets/airasia.svg'
import indigo from '@/assets/indigo.svg'
import airidi from '@/assets/airindia.svg'
import spicejet from '@/assets/spicejet.svg'
export default function GetHired() {
    return<>
    <div className="p-16 my-8">
        <h1 className="font-bold text-4xl text-center text-slate-300">Get Hired</h1>
        <div className="flex justify-between flex-col md:flex-row gap-20 items-center  px-20 mt-20">
            <div>
                <Image src={airasia} alt=""/>
            </div>
            <div>
                <Image src={indigo} alt=""/>
            </div>
            <div>
                <Image src={airidi} alt=""/>
            </div>
            <div>
                <Image src={spicejet} alt=""/>
            </div>
        </div>
    </div>
    </>
}