import Image from "next/image";
import visionImage from "@/assets/images/vision.jpg";
import { Sparkles } from "lucide-react";

export default function Vision() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in order-2 md:order-1">
            <div className="relative bg-background rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </div>
              <Image
                src={visionImage}
                alt="Vision illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-8 text-primary-foreground animate-fade-in order-1 md:order-2">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold italic leading-tight">
                Our Vision
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed italic opacity-95">
                Our platform{" "}
                <span className="text-accent-foreground font-bold">
                  streamlines the college placement process
                </span>{" "}
                by connecting students, colleges, and companies on a single,
                unified website.
              </p>

              <div className="grid gap-4 mt-8">
                <div className="flex items-center gap-4 bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10 hover:bg-background/20 transition-colors">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <p className="text-lg font-medium">
                    Companies can recruit top talent with ease
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10 hover:bg-background/20 transition-colors">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <p className="text-lg font-medium">
                    Students can apply for their dream jobs seamlessly
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10 hover:bg-background/20 transition-colors">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <p className="text-lg font-medium">
                    Colleges benefit from a simplified, efficient placement
                    system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
