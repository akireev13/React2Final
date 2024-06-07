import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import ContactButton from "./ContactButton";

export const Navbar = () => {
  return (
    <div className="w-full border-b">
      <div className="my_container p-4">
        <div className="desktop-view hidden md:flex items-center justify-between">
          <div>
            <Link href="/programs">
              <h1 className="text-2xl font-extrabold">FROM ZERO TO HERO</h1>
            </Link>
          </div>

          <div className="navigation flex justify-center items-center gap-x-4">
            <div>
              <Button variant="ghost">Blog</Button>
            </div>
            <div>
              <Button variant="ghost">Your progress</Button>
            </div>
            <div>
              <ContactButton />
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>

        <div className="mobile-view md:hidden flex justify-between items-center">
          <div>
            <Link href="/programs">
              <h1 className="text-2xl font-extrabold my-auto">
                FROM ZERO TO HERO
              </h1>
            </Link>
          </div>
          <div>
            <Sheet>
              <SheetTrigger className="flex justify-center items-center">
                <div>
                  <Menu />
                </div>
              </SheetTrigger>
              <SheetContent side="top">
                <div className="flex flex-col gap-y-4 items-center">
                  <div>
                    <Button className="text-xl" variant="ghost">
                      Blog
                    </Button>
                  </div>
                  <div>
                    <Button className="text-xl" variant="ghost">
                      Your progress
                    </Button>
                  </div>
                  <div>
                    <ContactButton />
                  </div>
                  <div>
                    <ModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};
