import { Card } from "@/commponents/card";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";

export default function ClerkCard() {
  return (
    <>
      <div
        className={cn(
          GeistSans.className,
          "h-screen bg-gray-50 flex justify-center items-center"
        )}
      >
        <Card />
      </div>
    </>
  );
}
