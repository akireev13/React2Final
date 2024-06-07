"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface ExerciseProps {
  exercise: {
    id: string;
    name: string;
    description?: string | null;
    image?: {
      url: string;
    } | null;
  };
}

export function Exercise({ exercise }: ExerciseProps) {
  const imageUrl = exercise.image ? exercise.image.url : "/images/fallback.jpg";

  const router = useRouter();
  const PATH = usePathname();
  return (
    <div className="w-full border rounded-lg overflow-hidden hover:bg-accent">
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
        <h2 className="text-2xl font-bold pb-2 line-clamp-1">
          {exercise.name}
        </h2>
        <p className="text-muted-foreground line-clamp-2">
          {exercise.description || "No description"}
        </p>
      </div>
    </div>
  );
}
