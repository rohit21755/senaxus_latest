import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="">
        <footer className="text-gray-300 py-8 border-t-2 border-slate-700">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left px-6 md:px-12">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
              <p className="text-white text-2xl font-bold">Future pilot</p>
            </div>

            {/* Links Section */}
            <div className="flex md:flex-row flex-col gap-6 md:gap-10 justify-center">
              <Link href="/">
                <button
                  className="
                     text-slate-600 
                     hover:text-white
                     transition duration-300
                     text-sm md:text-base
                   "
                >
                  Home
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="
                     text-slate-600 
                     hover:text-white
                     transition duration-300
                     text-sm md:text-base
                   "
                >
                  Contact Us
                </button>
              </Link>
              <Link href="/about">
                <button
                  className="
                     text-slate-600 
                     hover:text-white
                     transition duration-300
                     text-sm md:text-base
                   "
                >
                  About Us
                </button>
              </Link>
              <Link href="/dgcaclass">
                <button
                  className="
                     text-slate-600 
                     hover:text-white
                     transition duration-300
                     text-sm md:text-base
                   "
                >
                  Process to Become Pilot
                </button>
              </Link>
            </div>
          </div>

          {/* Divider and Copyright Section */}
          <div className="border-t-2 border-slate-800 w-4/5 mx-auto my-4"></div>
          <div className="text-center">
            <p>&copy; 2024 Future pilot. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
