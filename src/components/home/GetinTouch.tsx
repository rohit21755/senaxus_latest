import Link from "next/link";

export default function GetinTouch() {
    return (
        <>
            <div className="my-12 p-16 w-full flex flex-col items-center justify-center mb-20">
                <h1 className="font-bold text-4xl text-center text-slate-300 mb-6">
                    Have any Queries?
                </h1>
                <Link href="/contact">
                    <button
                        data-aos="fade-up"
                        data-aos-duration="50"
                        data-aos-delay="000"
                        className="bg-[#6E00FF] text-white border border-white 
                                   px-4 md:px-6 py-2 md:py-2.5 rounded 
                                   hover:bg-black 
                                   transition duration-300 
                                   text-sm md:text-base
                                   mx-auto"
                    >
                        Get in Touch
                    </button>
                </Link>
            </div>
        </>
    );
}
