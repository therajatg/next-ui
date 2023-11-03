import Image from "next/image";
import logo from "@/public/logos/nextbase/Frame 34@2x.png";
import { PiPlayBold } from "react-icons/pi";
import { RxArrowTopRight } from "react-icons/rx";
import { HomeAvatars } from "./HomeAvatars";
import { HomeReviews } from "./HomeReviews";
import { features } from "./constants";

export function HomeHero() {
  return (
    <div className="mx-2 md:mx-4 lg:mx-24 flex flex-col gap-y-24 items-center justify-center pb-16">
      <div className="flex flex-col items-center gap-y-6 max-w-2xl">
        <h1 className="font-black text-7xl text-center">
          Build your SAAS in record time.
        </h1>
        <p className="text-center text-neutral-600 font-medium text-xl">
          NextBase is a powerful, production-ready Next.js 13+ & Supabase
          boilerplate for professional developers. Never waste time building
          boring pages again...
        </p>
        <div className="flex gap-x-2">
          <button className="border rounded-xl px-4 py-2 flex items-center font-bold gap-x-2 text-white bg-black">
            <RxArrowTopRight />
            Try Demo
          </button>
          <button className="border rounded-xl px-4 py-2 flex items-center font-bold gap-x-2">
            <PiPlayBold />
            Watch Video
          </button>
        </div>
        <div className="flex gap-x-4 items-center">
          <HomeAvatars />
          <div className="h-5 w-0.5 bg-stone-300" />
          <HomeReviews rating={5} />
        </div>
      </div>
      <div className="bg-stone-50 sm:py-20 sm:px-60 rounded-2xl">
        <Image src={logo} alt="logo" width={200} />
      </div>
      <div className="flex flex-col gap-y-20">
        <div className="flex flex-col items-center gap-y-6">
          <h2 className="font-black text-6xl text-center max-w-2xl">
            Never waste time on building boring pages again
          </h2>
          <p className="text-center text-stone-900 font-medium text-xl max-w-2xl">
            Build your next SAAS project with a modern stack of Next.js 13+,
            Supabase and Typescript, and save 3+ months of development time ~
            $15000
          </p>
          <div className="hidden lg:flex gap-x-8 bg-stone-200 rounded-lg py-1 px-2 font-medium">
            {features.map(({ name, status }) => (
              <span
                key={name}
                className={`${status && "bg-white rounded-md px-1"}`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-y-16 gap-x-28">
          <div className="flex flex-col gap-y-6 basis-1/2 lg:items-start items-center max-w-2xl lg:max-w-none">
            <h2 className="font-black text-5xl text-center lg:text-left">
              Built in user authentication system
            </h2>
            <p className="text-lg font-medium text-center lg:text-left">
              More than 15 authentication providers such as Google, GitHub,
              Twitter, Facebook, Apple, Discord etc are supported. Users can
              also sign in with email and password or even just with email.
              Forgot password functionality, updating email functionality is
              also built-in.
            </p>
            <button className="border rounded-xl px-4 py-2 flex items-center font-bold gap-x-2 text-white bg-black w-fit">
              <RxArrowTopRight />
              See Documentation
            </button>
          </div>
          <div className="lg:basis-1/2 h-[25rem] w-full bg-stone-100 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
