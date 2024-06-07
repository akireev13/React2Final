import Image from "next/image";

interface WorkoutProps {
  workout: {
    name: string;
    description?: string | null | undefined;
    image?: {
      url: string;
    } | null;
  };
}

export function WorkoutBanner({ workout }: WorkoutProps) {
  return (
    <div className="w-full mb-4">
      <div className="banner grid grid-cols-1 lg:grid-cols-2 gap-6">
        {workout.image && (
          <div className="banner-img">
            <Image
              className="w-full rounded-md"
              src={workout.image.url}
              width={500}
              height={500}
              alt="image"
            />
          </div>
        )}
        <div className="banner-info px-4">
          <h1 className="slogan text-4xl md:text-6xl font-bold mb-8">
            {workout.name}
          </h1>
          <p className="text-lg text-muted-foreground italic">
            {workout.description}
          </p>
        </div>
      </div>
    </div>
  );
}
