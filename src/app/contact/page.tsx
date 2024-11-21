export default function Contact(){
    return<>
    <div className="relative flex items-top justify-center min-h-screen  sm:items-center sm:pt-0 p-16">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="flex justify-center">
                        {/* Contact Information Section */}
                        <div className="p-6 border-salte-500 border-2  sm:rounded-lg p-24">
                            <h1 className="text-4xl sm:text-5xl text-slate-200  font-extrabold tracking-tight">
                                Get in touch
                            </h1>
                            

                            <div className="flex items-center mt-8 text-gray-600 ">
                                {/* Placeholder for additional address or information */}
                            </div>

                            {/* Phone Number */}
                            <div className="flex items-center mt-4 text-gray-600 ">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide text-slate-300 font-semibold w-40">
                                +919266541414
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center mt-2 text-gray-600  ">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    <a
                                        href="mailto:enquiry@futurepilot.in"
                                        className="text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        enquiry@futurepilot.in
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        
                    </div>
                </div>
            </div>
        </div>
    </>
}