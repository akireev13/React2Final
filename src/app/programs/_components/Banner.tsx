import Image from "next/image";

export function Banner() {
  return (
    <div className="w-full mb-4">
      <div className="banner grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="banner-img">
          <Image
            className="w-full rounded-md"
            src="/images/banner_bg.png"
            width={500}
            height={500}
            alt="image"
          />
        </div>
        <div className="banner-info px-4">
          <h1 className="slogan text-4xl md:text-6xl font-bold mb-8">
            Action is the foundational key to all success.
          </h1>
          <p className="text-lg text-muted-foreground italic">
            - <b>Pablo Picasso</b>, Visual Artist
          </p>
        </div>
      </div>
    </div>
  );
}
