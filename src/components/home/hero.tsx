import heroIllustration from "@/assets/images/hero.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <main className="h-[calc(100vh-78px)] md:flex md:items-center relative py-16 md:py-24 overflow-hidden bg-[url('/bg-curve.png')] bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 md:gap-12 gap-4 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Bridge Academic Dreams and{" "}
              <span className="text-primary">Career Goals</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Unlock Career Prospects
            </p>
            <Button size="lg" className="w-1/2">
              <Link href="/auth">Get Started</Link>
            </Button>
          </div>

          <div className="relative animate-fade-in">
            <Image
              priority={true}
              src={heroIllustration}
              alt="Career counseling illustration"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
