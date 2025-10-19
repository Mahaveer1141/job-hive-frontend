import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

export default function CollegeSignUpForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleGoogleSignUp = () => {};

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="collegeName">College Name</Label>
          <Input
            id="collegeName"
            type="text"
            placeholder="University of Example"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="collegeEmail">Official Email</Label>
          <Input
            id="collegeEmail"
            type="email"
            placeholder="admin@college.edu"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="collegePassword">Password</Label>
          <Input
            id="collegePassword"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="adminName">Administrator Name</Label>
          <Input id="adminName" type="text" placeholder="Full Name" required />
        </div>

        <Button type="submit" className="w-full">
          Create College Account
        </Button>

        <div className="relative my-6">
          <Separator />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
            OR
          </span>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={handleGoogleSignUp}
        >
          <Mail className="mr-2 h-4 w-4" />
          Sign up with Google
        </Button>
      </form>
    </div>
  );
}
