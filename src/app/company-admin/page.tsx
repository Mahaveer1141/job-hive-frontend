"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Search, Filter } from "lucide-react";

const jobsData = [
  {
    id: "JOB-2001",
    title: "Senior React Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    status: "Active",
    applications: 12,
    postedDate: "15 Oct, 2025"
  },
  {
    id: "JOB-2002",
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "New York, NY",
    type: "Full-time",
    status: "Active",
    applications: 8,
    postedDate: "14 Oct, 2025"
  },
  {
    id: "JOB-2003",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "San Francisco, CA",
    type: "Contract",
    status: "Closed",
    applications: 24,
    postedDate: "10 Oct, 2025"
  },
  {
    id: "JOB-2004",
    title: "Product Manager",
    company: "InnovateLabs",
    location: "Boston, MA",
    type: "Full-time",
    status: "Active",
    applications: 15,
    postedDate: "12 Oct, 2025"
  }
];

export default function AdminJobs() {
  const router = useRouter();
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleJobSelection = (jobId: string) => {
    setSelectedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  const toggleAllJobs = () => {
    if (selectedJobs.length === jobsData.length) {
      setSelectedJobs([]);
    } else {
      setSelectedJobs(jobsData.map((job) => job.id));
    }
  };

  const getCompanyInitials = (company: string) => {
    return company
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Jobs</h1>
          <p className="text-muted-foreground">
            Manage and track all job postings
          </p>
        </div>
        <Button
          className="gap-2"
          onClick={() => router.push("/admin/jobs/new")}
        >
          <Plus className="h-4 w-4" />
          Post New Job
        </Button>
      </div>

      <Card className="border">
        <div className="p-4">
          {/* Search and Filter Bar */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            {selectedJobs.length > 0 && (
              <Button variant="outline" onClick={() => setSelectedJobs([])}>
                Clear selection
              </Button>
            )}
          </div>

          {/* Table */}
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent bg-muted/30">
                  <TableHead className="w-10 py-3">
                    <Checkbox
                      checked={selectedJobs.length === jobsData.length}
                      onCheckedChange={toggleAllJobs}
                      className="border-2"
                    />
                  </TableHead>
                  <TableHead className="font-semibold py-3">ID</TableHead>
                  <TableHead className="font-semibold py-3">
                    Job Title
                  </TableHead>
                  <TableHead className="font-semibold py-3">Company</TableHead>
                  <TableHead className="font-semibold py-3">Location</TableHead>
                  <TableHead className="font-semibold py-3">Type</TableHead>
                  <TableHead className="font-semibold py-3">Status</TableHead>
                  <TableHead className="font-semibold py-3">
                    Applications
                  </TableHead>
                  <TableHead className="font-semibold py-3">
                    Posted Date
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobsData.map((job, index) => (
                  <TableRow
                    key={job.id}
                    className="hover:bg-muted/50 cursor-pointer transition-colors"
                    onClick={() => router.push(`/jobs/${job.id}`)}
                  >
                    <TableCell
                      className="py-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Checkbox
                        checked={selectedJobs.includes(job.id)}
                        onCheckedChange={() => toggleJobSelection(job.id)}
                        className="border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                    </TableCell>
                    <TableCell className="py-3">
                      <span className="text-primary font-medium hover:underline">
                        {job.id}
                      </span>
                    </TableCell>
                    <TableCell className="font-medium py-3">
                      {job.title}
                    </TableCell>
                    <TableCell className="py-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-7 w-7">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                            {getCompanyInitials(job.company)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-muted-foreground text-sm">
                          {job.company}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm py-3">
                      {job.location}
                    </TableCell>
                    <TableCell className="py-3">
                      <Badge variant="outline" className="font-normal text-xs">
                        {job.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-3">
                      <Badge
                        variant={
                          job.status === "Active" ? "default" : "secondary"
                        }
                        className="font-medium text-xs"
                      >
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-3">
                      <span className="inline-flex items-center justify-center h-5 px-2 rounded bg-primary/10 text-primary font-medium text-xs">
                        {job.applications}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm py-3">
                      {job.postedDate}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    </div>
  );
}
