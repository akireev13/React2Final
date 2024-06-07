import { sdk } from "@/lib/client";
import { Workout } from "./_components/Workout";
import { ProgramBanner } from "./_components/ProgramBanner";

export default async function WorkoutsPage({
  params,
}: {
  params: {
    programId: string;
  };
}) {
  const programId = params.programId;

  const {
    data: { programs },
  } = await sdk.getWorkoutsByProgramId({
    id: programId,
  });

  if (!programs || programs.length != 1) {
    return (
      <div className="h-full">
        <h1 className=" text-muted-foreground text-3xl mx-auto">
          Something went wrong. The program content cannot be found.
        </h1>
      </div>
    );
  }

  return (
    <div className="h-full pt-4">
      <ProgramBanner program={programs[0]} />

      <div className="w-full p-4 border-t">
        <h1 className="text-4xl font-bold pb-4">WORKOUTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs[0].workouts.map((workout) => (
            <Workout key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </div>
  );
}
