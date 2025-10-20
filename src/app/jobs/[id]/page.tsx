"use client";
import {
  MapPin,
  Clock,
  Bookmark,
  Building,
  DollarSign,
  Users,
  Calendar,
  ArrowLeft,
  CheckCircle2,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar";
import Footer from "@/components/home/footer";
import { useRouter } from "next/navigation";

const jobData: Record<string, any> = {
  "1": {
    id: "1",
    title: "Marketing Intern",
    company: "TechStart Inc",
    location: "Remote",
    type: "Internship",
    salary: "$15-20/hr",
    tags: ["Marketing", "Social Media"],
    posted: "2 days ago",
    description:
      "Join our dynamic marketing team and help shape the future of tech startups. You'll work on exciting campaigns, learn from industry experts, and contribute to real projects from day one.",
    responsibilities: [
      "Assist in developing and executing marketing campaigns across multiple channels",
      "Create engaging content for social media platforms",
      "Conduct market research and analyze competitor strategies",
      "Support the team in organizing events and webinars",
      "Monitor and report on campaign performance metrics"
    ],
    requirements: [
      "Currently pursuing a degree in Marketing, Communications, or related field",
      "Strong written and verbal communication skills",
      "Familiarity with social media platforms and trends",
      "Basic knowledge of digital marketing tools",
      "Creative mindset with attention to detail",
      "Ability to work independently and in a team environment"
    ],
    benefits: [
      "Flexible remote work arrangement",
      "Mentorship from experienced marketers",
      "Access to premium marketing tools and software",
      "Certificate of completion",
      "Potential for full-time employment"
    ],
    companySize: "50-100 employees",
    industry: "Technology",
    applicationDeadline: "March 15, 2025"
  }
};

export default function JobDetail() {
  const router = useRouter();
  const id = "1";
  const job = jobData[id || "1"] || jobData["1"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6 hover:scale-105 transition-all"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Jobs
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {job.company[0]}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                    <p className="text-lg text-muted-foreground flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      {job.company}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-all"
                >
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Posted {job.posted}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{job.companySize}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary text-primary-foreground">
                  {job.type}
                </Badge>
                {job.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
                <Badge variant="outline">{job.industry}</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">About the Role</h2>
              <p className="text-muted-foreground leading-relaxed">
                {job.description}
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="space-y-3">
                {job.benefits.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 sticky top-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Deadline: {job.applicationDeadline}</span>
                </div>
                <Separator />
                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full hover:scale-105 transition-all"
                  size="lg"
                >
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save Job
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">About {job.company}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Industry</span>
                  <span className="font-medium">{job.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Company Size</span>
                  <span className="font-medium">{job.companySize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">{job.location}</span>
                </div>
              </div>
              <Separator className="my-4" />
              <Button
                variant="outline"
                className="w-full hover:scale-105 transition-all"
              >
                View Company Profile
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
