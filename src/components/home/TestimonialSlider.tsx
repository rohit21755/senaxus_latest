import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Rohit Sharma",
    username: "Ground Classes",
    body: "The instructors at Future Pilots are fantastic! They explained every DGCA topic in detail and provided excellent study materials. Thanks to them, I cleared all my exams easily and am now starting my flight training.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: " Aarav Mehta",
    username: "Flight Training",
    body: "Flying my first solo was a life-changing experience, and Future Pilots made it possible. The experienced instructors and advanced aircraft gave me the confidence to excel in every lesson. Highly recommend their program!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Nisha Kapoor",
    username: "Type Rating",
    body: "I completed my Airbus A320 type rating with Future Pilots, and the training exceeded my expectations. The simulators were state-of-the-art, and the instructors were professionals with years of airline experience.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Simram Kaur",
    username: "Ground Classes",
    body: "The small class sizes at Future Pilots made learning personalized and effective. I could ask questions freely, and the staff was always available to guide me. Their teaching methods are the best!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Aditya Gupta",
    username: "Flight Training",
    body: "The training environment at Future Pilots is outstanding. With highly qualified instructors and well-maintained aircraft, every flying hour felt safe and productive. I’m now working towards my multi-engine endorsement",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "kartik Iyer",
    username: "Type Rating",
    body: "Getting my Boeing 737 type rating at Future Pilots was one of the best decisions I’ve made. The trainers focused on real-world scenarios, making me confident and prepared for airline interviews.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Priya Naie",
    username: "Overall Experience",
    body: `Future Pilots is the perfect blend of professionalism and personalized training. From ground classes to flight training, they supported me at every step. I'm proud to say I’m now a commercial pilot, ready for airline opportunities!`,
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border border-slate-400 p-4",
        // light styles
        "border-slate-400 bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "border-slate-400 dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 text-slate-300">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-slate-200">{body}</blockquote>
    </figure>
  );
};

export default function TestimonialSlider() {
  return (<>

    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
    <h2 className=" text-center my-8 text-3xl font-bold tracking-tight text-gray-200 ">
      What our customers are saying
    </h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3  from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3  from-white dark:from-background"></div>
    </div>
    </>
  );
}
