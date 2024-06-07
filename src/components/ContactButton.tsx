"use client";

import { Button } from "./ui/button";
export default function ContactButton() {
  const handleContactClick = () => {
    const footer = document.getElementById("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Button
        variant="ghost"
        onClick={handleContactClick}
        className="text-xl md:text-sm"
      >
        Contact
      </Button>
    </div>
  );
}
