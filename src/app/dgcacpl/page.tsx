export default function DgcaCpl() {
    return <>
    <div className="p-16 text-center text-slate-300">
        <h1 className="text-4xl font-bold my-10">Procedure</h1>
        
        <p className="text-xl text-justify">
        Computer number: To appear for theory papers you first need to obtain a computer number which can be done by following the guidelines given at
        <a href="www.pariksha.dgca.gov.in" className="text-blue-500 mx-[6px] underline">www.pariksha.dgca.gov.in</a> . 
        The application form along with required attested documents must reach the office of Dgca in 10 days from the time you fill out the online registration form otherwise the application will not be considered. Once the documents are received by DGCA you will get an email confirming the same on your registered email id.

        </p>
        <p className="text-xl text-justify my-8">Theory exams for all subjects are conducted 4 times a year. Mostly the theory papers are multi choice questions (MCQ) type and given that you have put enough work preparing for the exams you should be able to select the right answers. Theory papers you need to pass will depend primarily on the choice of your flight training school whether it is in India or abroad. The below table will simplify the same for your understanding.</p>
        <div className="my-12">
        <h1 className="text-3xl font-bold">Theory Exams</h1>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
            <div className="rounded-md p-4 border-2 border-slate-300 ">
                <p className="text-2xl font-bold">Air Navigation</p>
                <p className="text-xl my-4">
                This subject trains the process of accurately ascertaining one&apos;s position, planning, and following a route accurately to reach the preferred destination. These classes also involve directing the pilots about security measures during the journey

                </p>
            </div>
            <div className="rounded-md p-4 border-2 border-slate-300">
                <p className="text-2xl font-bold">Aviation Meteorology</p>
                <p className="text-xl my-4">
                This subject covers many interrelated subjects and engineering topics. These include ground-based operations related to adverse effects of frost, ice, snow, and visibility on aircraft performance and in-flight icing and turbulence. This explores the overall difficulties that a pilot can face in the future.

                </p>
            </div>
            <div className="rounded-md p-4 border-2 border-slate-300">
                <p className="text-2xl font-bold">Air Regulation
                </p>
                <p className="text-xl my-4">
                This subject is mandatory to clear for issuing the DGCA Commercial Pilot License. This course keeps up-to-date and explores the regulatory landscape of the Aviation Industry.

                </p>
            </div>
            

        </div>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mx-auto justify-items-center md:px-64 px-4">
    <div className="rounded-md p-4 border-2 border-slate-300">
        <p className="text-2xl font-bold">Radio Telephony</p>
        <p className="text-xl my-4">
            This subject aims to provide Airside Safety Operators with the knowledge, skills, and attitudes to effectively apply standard radio communication procedures/phraseology and adhere to airside markings/signage following national and international standards.
        </p>
    </div>
    <div className="rounded-md p-4 border-2 border-slate-300">
        <p className="text-2xl font-bold">Technical General/Specific</p>
        <p className="text-xl my-4">
            Technical is a vast subject and one of the most challenging theory parts of Pilot Training. To simplify the learning process, we have divided it into smaller chunks – Airframes and Systems, Principles of Flight, AC, DC, and Radio Propagation.
        </p>
    </div>
</div>

        </div>
    </div>
    </>
}