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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Plus, Search, Filter, X } from "lucide-react";

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
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const activeFiltersCount = [statusFilter, typeFilter, locationFilter].filter(
    Boolean
  ).length;

  const clearAllFilters = () => {
    setStatusFilter("");
    setTypeFilter("");
    setLocationFilter("");
  };

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
          onClick={() => router.push("/company-admin/jobs/new")}
        >
          <Plus className="h-4 w-4" />
          Post New Job
        </Button>
      </div>

      <Card className="border">
        <div className="p-4">
          {/* Search and Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="relative flex-1 min-w-[200px] max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs..."
                className="pl-9 h-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2 h-9">
                  <Filter className="h-4 w-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge
                      variant="secondary"
                      className="ml-1 h-5 px-1.5 text-xs"
                    >
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4" align="start">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">Filters</h4>
                    {activeFiltersCount > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={clearAllFilters}
                      >
                        Clear all
                      </Button>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">
                        Status
                      </Label>
                      <Select
                        value={statusFilter}
                        onValueChange={setStatusFilter}
                      >
                        <SelectTrigger className="h-9">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                          <SelectItem value="draft">Draft</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">
                        Job Type
                      </Label>
                      <Select value={typeFilter} onValueChange={setTypeFilter}>
                        <SelectTrigger className="h-9">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="internship">Internship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">
                        Location
                      </Label>
                      <Select
                        value={locationFilter}
                        onValueChange={setLocationFilter}
                      >
                        <SelectTrigger className="h-9">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="new-york">New York</SelectItem>
                          <SelectItem value="san-francisco">
                            San Francisco
                          </SelectItem>
                          <SelectItem value="boston">Boston</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            {selectedJobs.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 h-9"
                onClick={() => setSelectedJobs([])}
              >
                <X className="h-3 w-3" />
                Clear ({selectedJobs.length})
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
