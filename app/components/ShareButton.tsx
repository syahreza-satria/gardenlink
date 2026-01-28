"use client";

import { useState } from "react";
import { FaShare, FaCheck } from "react-icons/fa6";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex justify-end relative">
        <button
          onClick={handleCopy}
          className={`text-black bg-white/50 backdrop-blur-xl border border-white/20 p-2 rounded-full cursor-pointer transition duration-300 hover:bg-white/80 ${copied ? "bg-green-500/20 border-green-500/50" : "hover:bg-white/50"}`}
          title={copied ? "Link Copied!" : "Share Link"}
        >
          {copied ? <FaCheck className="size-5 text-green-300" /> : <FaShare className="size-5" />}
        </button>

        <div
          className={`absolute top-full mt-2 right-0 whitespace-nowrap px-3 py-1 bg-black/80 text-white text-xs rounded-md shadow-lg transition-all duration-300 ${
            copied ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          Link berhasil disalin!
        </div>
      </div>
    </>
  );
}
