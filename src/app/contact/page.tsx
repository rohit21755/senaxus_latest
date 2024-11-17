export default function Contact(){
    return<>
    <div className="relative flex items-top justify-center min-h-screen  sm:items-center sm:pt-0 p-16">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Contact Information Section */}
                        <div className="p-6 border-salte-500 border-2  sm:rounded-lg">
                            <h1 className="text-4xl sm:text-5xl text-slate-200  font-extrabold tracking-tight">
                                Get in touch
                            </h1>
                            <p className="text-lg sm:text-2xl font-medium text-gray-600  mt-2">
                                Fill in the form to start a conversation
                            </p>

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
                                    +44 1234567890
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
                                        href="https://veilmail.io/irish-geoff"
                                        className="text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        https://veilmail.io/irish-geoff
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form
                            action="https://fabform.io/f/xxxxx"
                            method="post"
                            className="p-6 flex flex-col justify-center   border-salte-500 border-2  "
                        >
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full mt-2 py-3 px-3 rounded-lg  bg-transparent border-2 border-gray-400  text-gray-800  font-semibold focus:border-indigo-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-transparent  border-2 border-gray-400  text-gray-800  font-semibold focus:border-indigo-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="message" className="hidden">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Your Message"
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-transparent  border-2 border-gray-400  text-gray-800  font-semibold focus:border-indigo-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-3 md:w-32 bg-[#6E00FF]  hover:bg-gray-900  text-white font-bold py-3 px-6 rounded-lg transition ease-in-out duration-300"
                            >
                                Submit
                            </button>

                            <p className="leading-relaxed text-base sm:text-xl text-gray-300  mt-8">
                                We use VeilMail.io to{' '}
                                <a
                                    className="font-medium text-blue-600  hover:underline"
                                    href="https://veilmail.io"
                                >
                                    hide email addresses from spammers
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}