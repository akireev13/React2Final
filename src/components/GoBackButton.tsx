"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export function GoBackButton() {
  const router = useRouter();
  const path = usePathname();

  const regex = /.*\/programs\/..*/;

  if (!path.match(regex)) {
    return <></>;
  }

  return (
    <div className="pt-4 ml-4">
      <Button onClick={() => router.back()}>
        <ArrowLeft className="mr-2" />
        Go back
      </Button>
    </div>
  );
}
