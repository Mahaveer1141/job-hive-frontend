import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

export default function CompanySignUpForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleGoogleSignUp = () => {};

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            type="text"
            placeholder="Acme Inc."
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyEmail">Work Email</Label>
          <Input
            id="companyEmail"
            type="email"
            placeholder="contact@company.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyPassword">Password</Label>
          <Input
            id="companyPassword"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactPerson">Contact Person</Label>
          <Input
            id="contactPerson"
            type="text"
            placeholder="Full Name"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Create Company Account
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
