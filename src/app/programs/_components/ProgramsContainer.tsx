import React from "react";
import { Program } from "./Program";
import { sdk } from "@/lib/client";

export async function ProgramsContainer() {
  const {
    data: { programs },
  } = await sdk.getPrograms();
  return (
    <div className="w-full p-4 border-t">
      <h1 className="text-4xl font-bold pb-4">PROGRAMS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {programs.map((program) => (
          <Program key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}
