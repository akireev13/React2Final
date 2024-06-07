"use client";

import { Slide } from "react-slideshow-image";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "react-slideshow-image/dist/styles.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ExercisesProps {
  exercises: {
    id: string;
    name: string;
    description?: string | null;
    image?: {
      url: string;
    } | null;
    video?: {
      url: string;
    } | null;
    sets?: number | null;
    duration?: number | null;
    repetitions?: number | null;
  }[];
}

const renderTime = ({ remainingTime }: any) => {
  if (remainingTime === 0) {
    return (
      <div className="text-green-500 text-lg max-w-[70%] text-center">
        Nice! You can take a rest now. As soon as you are ready swipe to the
        next exercise.
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-lg">Remaining</div>
      <div className="text-2xl font-bold">{remainingTime}</div>
      <div className="text-lg">seconds</div>
    </div>
  );
};

export function Slider({ exercises }: ExercisesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const router = useRouter();

  return (
    <div>
      <Slide
        easing="ease"
        indicators
        canSwipe
        arrows={false}
        autoplay={false}
        infinite={false}
        onStartChange={(oldIndex) => setCurrentIndex(oldIndex + 1)}
      >
        {exercises.map((exercise, index) => {
          const imageUrl = exercise.image
            ? exercise.image.url
            : "/images/fallback.jpg";

          const DURATION = exercise.duration || 0;
          return (
            <div
              key={exercise.id}
              className="flex flex-col justify-center items-center p-2"
            >
              <div className="info">
                <div className="w-full">
                  <Image
                    src={imageUrl}
                    alt="image"
                    className="w-full h-auto"
                    width={500}
                    height={400}
                  />
                </div>
                <h1 className="text-xl font-bold">{exercise.name}</h1>
                <h3 className="text-sm text-muted-foreground mb-3">
                  {exercise.description}
                </h3>
                <p>
                  <span className="italic">Duration: </span>
                  {exercise.duration || "No duration"}
                </p>
                <p>
                  <span className="italic">Repetitions: </span>
                  {exercise.repetitions}
                </p>
                <p>
                  <span className="italic">Sets: </span>
                  {exercise.sets}
                </p>
              </div>
              {exercise.duration ? (
                <CountdownCircleTimer
                  isPlaying={currentIndex === index}
                  size={300}
                  duration={DURATION}
                  colors={["#004777", "#F7B801", "#A36000", "#A30000"]}
                  colorsTime={[DURATION, DURATION / 2, DURATION / 4, 0]}
                  onComplete={() => {
                    return { shouldRepeat: false };
                  }}
                >
                  {renderTime}
                </CountdownCircleTimer>
              ) : (
                <div className="text-muted-foreground text-xl text-center p-4">
                  This exercise has ho duration. Do all the repetitions and sets
                  with comfortable tempo.
                </div>
              )}

              {currentIndex === exercises.length - 1 && (
                <div className="text-5xl font-extrabold max-w-[80%] md:max-w-[50%] p-8 rounded-xl bg-sky-600 hover:opacity-75 flex justify-center items-center mx-auto my-8">
                  <button onClick={() => router.back()}>FINISH</button>
                </div>
              )}
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
