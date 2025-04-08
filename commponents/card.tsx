"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRouter } from "next/navigation";

export function Card() {
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <div className="relative">
      <button
        onClick={() => router.back()}
        className="mb-4 text-xs text-neutral-600 hover:text-black transition hover:cursor-pointer"
      >
        ← Back
      </button>

      <div
        className={cn(
          "w-75 h-[26rem] rounded-2xl flex flex-col p-4 bg-white",
          "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
        )}
      >
        <h2 className="text-xs text-black">Stack Mail</h2>
        <p className="text-neutral-500 mt-1 text-xs leading-relaxed">
          Join the future of the newsletter with Stack Mail.
        </p>

        <div className="flex justify-center mt-2">
          <button className="text-xs rounded-md px-3 py-1 bg-neutral-900 text-white hover:bg-neutral-800 transition hover:cursor-pointer">
            Join Now
          </button>
        </div>

        <div className="mt-4 rounded-lg bg-gray-100/40 border border-dashed border-neutral-200 flex">
          {isMobile ? (
            <div className="rounded-lg overflow-hidden border border-neutral-200 divide-y divide-neutral-200 bg-white h-full shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] scale-105">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="p-3 text-xs">
                    <h3 className="font-medium text-neutral-800">Stack Mail</h3>
                    <p className="text-neutral-500 mt-1">
                      Join the future of the newsletter with Stack.
                    </p>
                  </div>
                ))}
              <div className="p-2 flex justify-center bg-gradient-to-t from-sky-100 to-slate-100">
                <button className="text-xs rounded-md px-3 py-1 transition">
                  Stack Mail
                </button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
              whileHover={{ opacity: 1, scale: 1.01, filter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-lg overflow-hidden border border-neutral-200 divide-y divide-neutral-200 bg-white h-full shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
            >
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="p-3 text-xs">
                    <h3 className="font-medium text-neutral-800">Stack Mail</h3>
                    <p className="text-neutral-500 mt-1">
                      Join the future of the newsletter with Stack.
                    </p>
                  </div>
                ))}
              <div className="p-2 flex justify-center bg-gradient-to-t from-sky-100 to-slate-100">
                <button className="text-xs rounded-md px-3 py-1 transition">
                  Stack Mail
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
