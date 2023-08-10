import { avatars } from "./constants";
import Image from "next/image";

export const HomeAvatars = () => (
  <div className="flex items-center space-x-2">
    <div className="flex flex-shrink-0 -space-x-1">
      {avatars.map(({ src, alt }) => (
        <Image
          className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
          src={src}
          alt={alt}
        />
      ))}
    </div>
    <span className="flex-shrink-0 text-xs font-medium leading-5">15+</span>
  </div>
);
