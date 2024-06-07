import { sdk } from "@/lib/client";
import { Slider } from "./_components/Slider";

export default async function SingleExercisePage({
  params,
}: {
  params: {
    workoutId: string;
  };
}) {
  const {
    data: { exercises },
  } = await sdk.getExercisesFull({
    id: params.workoutId,
  });

  return (
    <div className="pt-6">
      <div className="ui-container">
        <Slider exercises={exercises} />
      </div>
    </div>
  );
}
