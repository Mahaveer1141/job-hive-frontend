"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ArrowLeft, Briefcase } from "lucide-react";

export default function AddJob() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    experience: "",
    salary: "",
    description: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add validation
    if (!formData.title || !formData.company || !formData.location) {
      // toast({
      //   title: "Missing fields",
      //   description: "Please fill in all required fields",
      //   variant: "destructive"
      // });
      return;
    }

    // TODO: Add actual API call to save job
    // toast({
    //   title: "Job posted successfully",
    //   description: "The job has been added to the listings"
    // });

    router.push("/admin/jobs");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push("/admin/jobs")}
          className="hover:bg-muted"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Post New Job</h1>
          <p className="text-muted-foreground">
            Fill in the details to create a new job posting
          </p>
        </div>
      </div>

      <Card className="border-2">
        <CardHeader className="bg-muted/30">
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            Job Details
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">
                  Job Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g. Senior React Developer"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">
                  Company <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="e.g. TechCorp"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">
                  Location <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g. Remote or New York, NY"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Job Type</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value: string) =>
                    setFormData({ ...formData, type: value })
                  }
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select
                  value={formData.experience}
                  onValueChange={(value: any) =>
                    setFormData({ ...formData, experience: value })
                  }
                >
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                    <SelectItem value="lead">Lead</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary">Salary Range</Label>
                <Input
                  id="salary"
                  name="salary"
                  placeholder="e.g. $80,000 - $120,000"
                  value={formData.salary}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Job Description <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe the role, responsibilities, and what makes this position unique..."
                value={formData.description}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea
                id="requirements"
                name="requirements"
                placeholder="List the required skills, qualifications, and experience..."
                value={formData.requirements}
                onChange={handleChange}
                rows={6}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="gap-2">
                <Briefcase className="h-4 w-4" />
                Post Job
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin/jobs")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
