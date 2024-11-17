export default function Medical() {
    return (
        <>
            <div className="p-6 sm:p-12 md:p-16 py-8 md:py-24">
                {/* Process Button */}
                <div className="flex justify-center">
                    <button className="border-2 py-1 px-3 rounded-lg border-black text-sm sm:text-base">
                        Process
                    </button>
                </div>

                {/* Header Section */}
                <div className="my-8 text-center">
                    <h1 className="text-2xl sm:text-3xl font-bold">Medical Fitness Requirements</h1>
                    <h5 className="text-base sm:text-lg md:w-2/3 lg:w-1/2 mx-auto mt-4 sm:mt-6">
                        We need to be 100% sure that you are medically fit to fly before you invest your money in a
                        pilot course as it&apos;s a mandatory requirement. The medicals are a 2-step process.
                    </h5>
                </div>

                {/* Step Section */}
                {/* <div className="flex p-12 md:block hidden">
        <div className="flex justify-start w-1/2">
        <div className="rounded-lg py-3 px-4 text-2xl border-2 border-black">
            01
        </div>
        </div>
        
        <div className="flex justify-start w-1/2">
        <div className="rounded-lg py-3 px-4 text-2xl border-2 border-black">
            02
        </div>
        </div>
    </div> */}

                {/* Medical Descriptions */}
                <div className="flex flex-col-reverse md:flex-row-reverse p-4 md:p-12 gap-6">
                    <div
                        className="border shadow-lg p-6 sm:p-8 w-full md:w-1/2"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <p className="font-semibold text-xl sm:text-2xl mb-3">Class 2 Medicals</p>
                        <p className="font-light text-sm sm:text-lg">
                            Conducted throughout India with doctors appointed by DGCA. You will receive a CA - 35 assessment form as fitness certification. Reports are sent to the DGCA for a final medical assessment.
                        </p>
                    </div>
                    <div
                        className="border shadow-lg p-6 sm:p-8 w-full md:w-1/2"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <p className="font-semibold text-xl sm:text-2xl mb-3">Class 1 Medicals</p>
                        <p className="font-light text-sm sm:text-lg">
                            The Class 1 Medical assessment is a rigorous process done at approved centers across India. It evaluates vision, hearing, cardiovascular, and overall physical and mental health.
                        </p>
                    </div>
                </div>

                {/* File Number Section */}
                <div className="p-4 sm:p-8 md:p-12">
                    <div
                        className="border-2 rounded-md p-6 sm:p-8 md:p-12 shadow-lg"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <h2 className="font-semibold text-xl sm:text-2xl my-4">File Number</h2>
                        <p className="font-light text-sm sm:text-lg">
                            Issued with your Class 2 assessment, this unique file number is used for all future documentation. It provides a permanent reference within DGCA records.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
