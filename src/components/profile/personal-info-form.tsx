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
import { User, Mail, Phone, MapPin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Camera } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.string().min(2, "Location is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters").max(500),
  profileImage: z.string().optional()
});

interface PersonalInfoFormProps {
  onNext: () => void;
  onBack: () => void;
}

export default function PersonalInfoForm({ onNext }: PersonalInfoFormProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      bio: "",
      profileImage: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    onNext();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        form.setValue("profileImage", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getUserInitials = (name: string) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Personal Information
        </h2>
        <p className="text-muted-foreground">
          Tell us about yourself to help employers find you
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative group">
              <Avatar className="h-32 w-32 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <AvatarImage src={imagePreview || undefined} alt="Profile" />
                <AvatarFallback className="bg-primary/10 text-primary text-3xl font-semibold">
                  {getUserInitials(form.watch("fullName"))}
                </AvatarFallback>
              </Avatar>
              <label
                htmlFor="profile-image"
                className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full cursor-pointer hover:scale-110 transition-all shadow-lg"
              >
                <Camera className="w-5 h-5" />
              </label>
              <input
                id="profile-image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Click the camera icon to upload your photo
            </p>
          </div>

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="+1 234 567 8900"
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
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Location
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="New York, NY"
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
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Professional Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your skills, interests, and career goals..."
                    className="min-h-[120px] transition-all focus:scale-[1.01]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4 pt-4">
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105"
            >
              Next Step
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
