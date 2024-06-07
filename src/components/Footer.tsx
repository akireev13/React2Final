import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <div
      className=" w-full bg-accent p-10 flex flex-col gap-6 items-center"
      id="footer"
    >
      <div>
        <p>
          Made by Andrei Kireyeu for React 2 Class in Harbour.Space University.
        </p>
      </div>
      <div className="w-full flex justify-between items-center flex-wrap">
        <div className="email">
          <Link href="mailto:andrei.kireyeu@harbour.space">
            <p className="font-bold hover:underline">
              andrei.kireyeu@harbour.space
            </p>
          </Link>
        </div>
        <div>
          <p className="font-bold">{year} All rights reserved.</p>
        </div>
        <div className="number font-bold">+34 607 05 49 30</div>
      </div>
    </div>
  );
}
