import { GraduationCap, Building2, Users } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Feature() {
  const features = [
    {
      icon: GraduationCap,
      title: "FOR STUDENT",
      subtitle: "Trusted Network",
      description: "Connect with Top Firms",
      detail: "Join our vibrant community",
      buttonText: "Apply Now"
    },
    {
      icon: Building2,
      title: "FOR COLLEGE",
      subtitle: "Seamless Recruiting",
      description: "Streamline Your Hiring",
      detail: "Efficient placement process",
      buttonText: "Connect Now"
    },
    {
      icon: Users,
      title: "FOR COMPANY",
      subtitle: "World-Class Education",
      description: "Partner with Colleges",
      detail: "Expand your talent pool",
      buttonText: "Hire Now"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold italic">
            What JobHive Offers
          </h2>
          <p className="text-xl text-muted-foreground">Empower Your Pathway</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold italic text-center">
                {feature.title}
              </h3>

              <div className="space-y-2 text-center">
                <p className="text-base font-medium text-muted-foreground">
                  {feature.subtitle}
                </p>
                <p className="text-xl font-semibold">{feature.description}</p>
                <p className="text-base text-muted-foreground">
                  {feature.detail}
                </p>
              </div>

              <Button size="lg" className="w-full">
                <Link href="/auth">{feature.buttonText}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
