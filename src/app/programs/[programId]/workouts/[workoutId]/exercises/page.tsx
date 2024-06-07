import { sdk } from "@/lib/client";
import { WorkoutBanner } from "./_components/WorkoutBanner";
import { Exercise } from "./_components/Exercise";
import Link from "next/link";
import { StartButton } from "./_components/StartButton";

export default async function ExercisesPage({
  params,
}: {
  params: {
    workoutId: string;
  };
}) {
  const workoutId = params.workoutId;

  const {
    data: { workout },
  } = await sdk.getExercisesShort({
    id: workoutId,
  });

  if (!workout) {
    return (
      <div className="h-full">
        <h1 className=" text-muted-foreground text-3xl mx-auto">
          Something went wrong. The content cannot be found.
        </h1>
      </div>
    );
  }
  return (
    <div className="h-full pt-4">
      <WorkoutBanner workout={workout} />

      <div className="w-full p-4 border-t">
        <h1 className="text-4xl font-bold pb-4">EXERCISES OVERVIEW</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workout.exercises.map((exercise) => (
            <Exercise key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
      <StartButton />
    </div>
  );
}
