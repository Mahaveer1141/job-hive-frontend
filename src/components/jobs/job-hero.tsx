import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from "@/components/ui/input-group";

export default function JobHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Find Your Dream <span className="text-primary">Student Job</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover internships, part-time roles, and career opportunities
              tailored for students
            </p>
          </div>

          <div className="bg-card shadow-lg rounded-2xl p-6 border animate-scale-in">
            <div className="grid md:grid-cols-[1fr_1fr_auto] gap-4 items-end">
              <InputGroup className="h-12">
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
              </InputGroup>

              <InputGroup className="h-12">
                <InputGroupInput placeholder="Location" />
                <InputGroupAddon>
                  <MapPin />
                </InputGroupAddon>
              </InputGroup>

              <Button size="lg" className="h-12 px-8">
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
