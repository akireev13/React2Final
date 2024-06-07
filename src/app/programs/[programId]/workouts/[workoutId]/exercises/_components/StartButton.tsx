"use client";

import { usePathname, useRouter } from "next/navigation";

export function StartButton() {
  const router = useRouter();
  const path = usePathname();
  return (
    <div
      onClick={() => router.push(`${path}/start`)}
      className="text-5xl font-extrabold max-w-[80%] md:max-w-[50%] p-8 rounded-xl bg-emerald-600 hover:opacity-75 flex justify-center items-center mx-auto my-8"
    >
      START
    </div>
  );
}
