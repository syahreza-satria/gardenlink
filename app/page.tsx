"use client";

import Image from "next/image";
import { profile, links, social } from "@/app/src/data";
import LinkCard from "@/app/components/LinkCard";
import { FaCircleCheck } from "react-icons/fa6";
import ShinyText from "@/components/ShinyText";
import Social from "./components/Social";
import LiquidEther from "@/components/LiquidEther";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={true}
          autoDemo
          autoSpeed={1}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 p-4">
        <div className="max-w-xl mx-auto space-y-8 pt-8">
          <div className="max-w-xl mx-auto text-center space-y-4 flex flex-col items-center">
            <Image src={profile.avatar} width={128} height={128} className="rounded-full mx-auto border-2 border-white/10 shadow-lg" alt={profile.name} loading="eager" />

            <div className="flex flex-col space-y-1">
              <h1 className="text-xl font-bold flex gap-2 items-center mx-auto justify-center leading-none">
                {profile.name} <FaCircleCheck className="size-4 text-blue-400" />
              </h1>

              <div className="flex gap-4 justify-center items-center my-2">
                {social.map((socialLink, index) => (
                  <Social key={index} platform={socialLink.platform} url={socialLink.url} icon={socialLink.icon} />
                ))}
              </div>

              <ShinyText text={profile.role} speed={5} delay={0} color="#9ca3af" shineColor="#ffffff" spread={120} direction="left" yoyo={false} pauseOnHover={false} disabled={false} className="font-bold text-sm" />

              <p className="text-gray-300 text-sm sm:text-base px-0 sm:px-8 drop-shadow-md">{profile.bio}</p>
            </div>
          </div>
          <hr className="border-gray-800" />
          {/* Main Links */}
          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <LinkCard key={index} title={link.title} url={link.url} icon={link.icon} />
            ))}
          </div>
          <hr className="border-gray-800" />
          {/* Footer */}
          <footer className="text-center text-sm font-extralight pb-8">©2026 Copyright Syahreza Satria</footer>
        </div>
      </div>
    </main>
  );
}
