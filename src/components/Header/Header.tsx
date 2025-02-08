"use client";

import { useRouter } from "next/navigation";

import { Calendar, Globe, LinkIcon } from "lucide-react";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-end gap-4 sm:w-full">
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={() => router.push("/discover-anime")}
      >
        <Globe />
        <p className="hidden xl:block">Discover Anime</p>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <Calendar />
        <p className="hidden xl:block">Discover Seasons</p>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <LinkIcon />
        <p className="hidden xl:block">Random Anime</p>
      </div>
    </div>
  );
};

export default Header;
