import Image from "next/image";

interface ProgramProps {
  program: {
    name: string;
    description?: string | null | undefined;
    image?: {
      fileName: string;
      url: string;
    } | null;
  };
}

export function ProgramBanner({ program }: ProgramProps) {
  return (
    <div className="w-full mb-4">
      <div className="banner grid grid-cols-1 lg:grid-cols-2 gap-6">
        {program.image && (
          <div className="banner-img">
            <Image
              className="w-full rounded-md"
              src={program.image.url}
              width={500}
              height={500}
              alt="image"
            />
          </div>
        )}
        <div className="banner-info px-4">
          <h1 className="slogan text-4xl md:text-6xl font-bold mb-8">
            {program.name}
          </h1>
          <p className="text-lg text-muted-foreground italic">
            {program.description}
          </p>
        </div>
      </div>
    </div>
  );
}
