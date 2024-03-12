"use client";

import { useEffect, useState } from "react";

import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      {
        if (window.scrollY > 100) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-50 left-5 bottom-10">
      <button
        className={cn(
          "bg-primary duration-300 text-white rounded-full px-2 py-2 text-sm",
          isFixed ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <ChevronUp strokeWidth={1.3} />
      </button>
    </div>
  );
};

export default BackToTop;
