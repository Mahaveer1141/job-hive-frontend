import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  FileText,
  Users,
  TrendingUp,
  Plus,
  Eye,
  Settings,
  ArrowUpRight
} from "lucide-react";

const stats = [
  {
    title: "Total Jobs",
    value: "24",
    icon: Briefcase,
    trend: "+12% from last month"
  },
  {
    title: "Applications",
    value: "156",
    icon: FileText,
    trend: "+8% from last month"
  },
  {
    title: "Active Users",
    value: "89",
    icon: Users,
    trend: "+23% from last month"
  },
  {
    title: "Placement Rate",
    value: "68%",
    icon: TrendingUp,
    trend: "+5% from last month"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your platform.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 text-green-500" />
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  action: "New application received",
                  time: "2 hours ago",
                  type: "application"
                },
                {
                  action: "Job posting published",
                  time: "5 hours ago",
                  type: "job"
                },
                { action: "User registration", time: "1 day ago", type: "user" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors border"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.type === "application" && (
                        <FileText className="h-4 w-4 text-primary" />
                      )}
                      {item.type === "job" && (
                        <Briefcase className="h-4 w-4 text-primary" />
                      )}
                      {item.type === "user" && (
                        <Users className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.time}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start h-auto py-4 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
              >
                <Plus className="h-4 w-4 mr-3" />
                <div className="text-left">
                  <Link href="/company-admin/jobs/new" className="font-medium">
                    Post New Job
                  </Link>
                  <div className="text-xs text-muted-foreground">
                    Create a new job listing
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start h-auto py-4 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
              >
                <Eye className="h-4 w-4 mr-3" />
                <div className="text-left">
                  <div className="font-medium">Review Applications</div>
                  <div className="text-xs text-muted-foreground">
                    Check pending applications
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start h-auto py-4 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
              >
                <Users className="h-4 w-4 mr-3" />
                <div className="text-left">
                  <div className="font-medium">Manage Users</div>
                  <div className="text-xs text-muted-foreground">
                    View and edit user accounts
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
