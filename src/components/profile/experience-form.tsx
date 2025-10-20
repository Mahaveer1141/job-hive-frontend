import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Building, Calendar, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  company: z.string().min(2, "Company name is required"),
  position: z.string().min(2, "Position is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
  skills: z.string().min(2, "Please add at least one skill")
});

interface ExperienceFormProps {
  onNext: () => void;
  onBack: () => void;
}

export default function ExperienceForm({ onBack }: ExperienceFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      skills: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Profile Completed! 🎉", {
      description: "Your profile has been successfully set up."
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
        <p className="text-muted-foreground">
          Share your professional experience and skills
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-primary" />
                    Company Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tech Corp Inc."
                      {...field}
                      className="transition-all focus:scale-[1.01]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    Position
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Software Engineer Intern"
                      {...field}
                      className="transition-all focus:scale-[1.01]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Start Date
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="month"
                      {...field}
                      className="transition-all focus:scale-[1.01]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="month"
                      placeholder="Leave empty if current"
                      {...field}
                      className="transition-all focus:scale-[1.01]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your responsibilities and achievements..."
                    className="min-h-[120px] transition-all focus:scale-[1.01]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills Used</FormLabel>
                <FormControl>
                  <Input
                    placeholder="React, TypeScript, Node.js (comma separated)"
                    {...field}
                    className="transition-all focus:scale-[1.01]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={onBack}
              className="hover:scale-105 transition-all"
            >
              Back
            </Button>
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105"
            >
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Complete Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
