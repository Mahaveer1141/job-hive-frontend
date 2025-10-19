import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

export default function StudentSignUpForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleGoogleSignUp = () => {};

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" type="text" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" type="text" placeholder="Doe" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="studentEmail">Email</Label>
          <Input
            id="studentEmail"
            type="email"
            placeholder="student@university.edu"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="studentPassword">Password</Label>
          <Input
            id="studentPassword"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="university">University</Label>
          <Input
            id="university"
            type="text"
            placeholder="Your University"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Create Student Account
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
