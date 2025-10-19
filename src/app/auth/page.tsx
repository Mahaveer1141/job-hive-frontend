"use client";

import Image from "next/image";
import authLoginImg from "@/assets/images/auth-login.png";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GraduationCap, Building2, Users } from "lucide-react";
import { useState } from "react";
import LoginForm from "@/components/auth/login-form";
import CompanySignupForm from "@/components/auth/company-sign-up-form";
import StudentSignupForm from "@/components/auth/student-sign-up-form";
import CollegeSignupForm from "@/components/auth/college-sign-up-form";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-background to-accent/20 flex items-center justify-center p-4">
      <Card className="overflow-hidden shadow-lg">
        <div className="grid md:grid-cols-2">
          <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-primary to-accent p-12 text-primary-foreground">
            <Image
              src={authLoginImg}
              alt="Authentication"
              className="w-64 h-64 object-contain mb-6"
            />
            <h2 className="text-3xl font-bold mb-3 text-center">
              Welcome to Our Platform
            </h2>
            <p className="text-center text-primary-foreground/90 text-lg">
              Join thousands of students, companies, and colleges
            </p>
          </div>

          <div className="p-8 md:p-12">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signUp">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Welcome Back
                  </h3>
                  <p className="text-muted-foreground">
                    Sign in to your account
                  </p>
                </div>
                <LoginForm />
              </TabsContent>

              <TabsContent value="signUp" className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Create Account
                  </h3>
                  <p className="text-muted-foreground">
                    Choose your account type
                  </p>
                </div>

                <Tabs defaultValue="student" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger
                      value="student"
                      className="flex items-center gap-2"
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span className="hidden sm:inline">Student</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="company"
                      className="flex items-center gap-2"
                    >
                      <Building2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Company</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="college"
                      className="flex items-center gap-2"
                    >
                      <Users className="w-4 h-4" />
                      <span className="hidden sm:inline">College</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="student">
                    <StudentSignupForm />
                  </TabsContent>

                  <TabsContent value="company">
                    <CompanySignupForm />
                  </TabsContent>

                  <TabsContent value="college">
                    <CollegeSignupForm />
                  </TabsContent>
                </Tabs>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Card>
    </div>
  );
}
