import heroIllustration from "@/assets/images/hero.png";
import Image from "next/image";

export default () => {
  return (
    <main className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Bridge Academic Dreams and{" "}
              <span className="text-primary">Career Goals</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Unlock Career Prospects
            </p>
            <button className="text-base text-white rounded-md px-8 py-6 bg-primary">
              Get Started Now
            </button>
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
};
