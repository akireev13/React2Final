"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface WorkoutProps {
  workout: {
    id: string;
    name: string;
    description?: string | null | undefined;
    image?: {
      fileName: string;
      url: string;
    } | null;
  };
}

export function Workout({ workout }: WorkoutProps) {
  const imageUrl = workout.image ? workout.image.url : "/images/fallback.jpg";

  const router = useRouter();
  const PATH = usePathname();
  return (
    <div
      onClick={() => router.push(`${PATH}/${workout.id}/exercises`)}
      className="w-full border rounded-lg overflow-hidden hover:bg-accent active:opacity-80"
    >
      <div className="img-container h-[250px] overflow-hidden">
        <Image
          src={imageUrl}
          width={320}
          height={200}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="info-container p-4">
        <h2 className="text-2xl font-bold pb-2 line-clamp-1">{workout.name}</h2>
        <p className="text-muted-foreground line-clamp-2">
          {workout.description || "No description"}
        </p>
      </div>
    </div>
  );
}
