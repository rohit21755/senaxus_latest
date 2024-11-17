import Link from "next/link"
export default function Footer()
{
    return<>
    <div className="">
    <footer className="text-gray-300 py-8  border-t-2 border-slate-700">
    <div className="flex justify-between items-center px-6 md:px-12">
    <div className="flex-shrink-0 flex items-center">
                            <p className="text-white text-2xl font-bold">Senaxus</p>
    </div>
    <div className="flex gap-10">
    <Link href="/">
            <button className="
                               text-slate-600 
                               hover:text-white
                               transition duration-300
                                
                               text-sm md:text-base
                                 ">
                Home
            </button>
            </Link>
        <Link href="/contact">
            <button className="
                               text-slate-600 
                               hover:text-white
                               transition duration-300
                                
                               text-sm md:text-base
                               ">
                Contact Us
            </button>
            </Link>
            <Link href="/about">
            <button className="
                               text-slate-600 
                               hover:text-white
                               transition duration-300
                                
                               text-sm md:text-base
                               ">
                About Us
            </button>
            </Link>
            <Link href="/dgcaclass">
                <button className="
                               text-slate-600 
                               hover:text-white
                               transition duration-300
                                
                               text-sm md:text-base
                             ">
                                Process to Become Pilot
                               </button>
            </Link>
            
    </div>
    </div>
    <div className="border-t-2 border-slate-800 w-3/5 mx-auto my-3 text-center">
    <p>&copy;2024 Senaxus. All rights reserved.</p>
    </div>
</footer>
</div>

    </>
}