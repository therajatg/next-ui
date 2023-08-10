import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { PiPlayBold } from "react-icons/pi";
import { RxArrowTopRight } from "react-icons/rx";
import { HomeFeatureList } from "@/components/HomeFeatureList";

export function HomeHero() {
  return (
    <div>
      <div>
        <div className="w-[50%] flex flex-col gap-y-4">
          <h1 className="font-black text-7xl">
            Build your SAAS in record time.
          </h1>
          <p>
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
        </div>
        <Image
          src={logo}
          alt="logo"
          width={400}
          className="p-20 object-cover bg-gray-50"
        />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="font-black text-5xl max-w-xl text-center">
          Never waste time on building boring pages again
        </h1>
        <p className="max-w-xl">
          Build your next SAAS project with a modern stack of Next.js 13+,
          Supabase and Typescript, and save 3+ months of development time ~
          $15000
        </p>
        <div className="bg-stone-100 lg:flex justify-between hidden py-1.5 px-2 rounded-xl min-w-[65rem] font-medium">
          <span className="bg-white border rounded-xl px-1">
            User Authentication
          </span>
          <span>Admin Panel</span>
          <span>Organizations, Teams</span>
          <span>User Impersonation</span>
          <span>Stripe Payments</span>
          <span>Incredible Performance</span>
        </div>
      </div>
    </div>
  );
}
