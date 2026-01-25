"use client";

import Image from "next/image";
import { profile, links } from "@/app/src/data";
import LinkCard from "@/app/components/LinkCard";
import { FaCircleCheck } from "react-icons/fa6";
import ShinyText from "@/components/ShinyText";

export default function Home() {
  return (
    <main className="h-screen bg-black text-white">
      <div className="max-w-xl mx-auto px-4 xl:px-0 py-16 space-y-8">
        <div className="max-w-xl mx-auto text-center space-y-4 flex flex-col items-center">
          <Image src={profile.avatar} width={128} height={128} className="rounded-full mx-auto" alt={profile.name} loading="eager" />
          <div className="flex flex-col space-y-1">
            <h1 className="text-xl font-bold flex gap-2 items-center mx-auto justify-center">
              {profile.name} <FaCircleCheck className="text-blue-400" />
            </h1>
            <ShinyText text={profile.role} speed={5} delay={0} color="#6b7280" shineColor="#ffffff" spread={120} direction="left" yoyo={false} pauseOnHover={false} disabled={false} className="font-bold uppercase text-sm" />
            <p className="text-gray-700 text-sm">{profile.bio}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {links.map((link, index) => (
            <LinkCard key={index} title={link.title} url={link.url} icon={link.icon} />
          ))}
        </div>
      </div>
      <footer className="text-center text-sm text-gray-500 font-extralight">©2026 Copyright Syahreza Satria</footer>
    </main>
  );
}
