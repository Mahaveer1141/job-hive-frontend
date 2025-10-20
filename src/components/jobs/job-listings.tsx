"use client";
import JobCard from "./job-card";

const jobs = [
  {
    id: "1",
    title: "Marketing Intern",
    company: "TechStart Inc",
    location: "Remote",
    type: "Internship",
    salary: "$15-20/hr",
    tags: ["Marketing", "Social Media"],
    posted: "2 days ago"
  },
  {
    id: "2",
    title: "Junior Software Developer",
    company: "CloudWorks",
    location: "San Francisco, CA",
    type: "Part-time",
    salary: "$25-35/hr",
    tags: ["React", "TypeScript"],
    posted: "1 week ago"
  },
  {
    id: "3",
    title: "Data Analyst Intern",
    company: "DataFlow Analytics",
    location: "New York, NY",
    type: "Internship",
    salary: "$18-22/hr",
    tags: ["Python", "SQL"],
    posted: "3 days ago"
  },
  {
    id: "4",
    title: "UX Design Intern",
    company: "CreativeHub",
    location: "Remote",
    type: "Internship",
    salary: "$16-20/hr",
    tags: ["Figma", "UI/UX"],
    posted: "5 days ago"
  },
  {
    id: "5",
    title: "Content Writer",
    company: "MediaBuzz",
    location: "Boston, MA",
    type: "Part-time",
    salary: "$20-25/hr",
    tags: ["Writing", "SEO"],
    posted: "1 day ago"
  },
  {
    id: "6",
    title: "Sales Development Rep",
    company: "GrowthCo",
    location: "Chicago, IL",
    type: "Part-time",
    salary: "$18-22/hr + Commission",
    tags: ["Sales", "B2B"],
    posted: "4 days ago"
  }
];

export default function JobListings() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Opportunities</h2>
            <p className="text-muted-foreground">
              Hand-picked jobs perfect for students
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
