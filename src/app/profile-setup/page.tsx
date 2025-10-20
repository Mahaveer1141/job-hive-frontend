"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import PersonalInfoForm from "@/components/profile/personal-info-form";
import EducationForm from "@/components/profile/education-form";
import ExperienceForm from "@/components/profile/experience-form";

export default function ProfileSetup() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const steps = [
    { id: 1, name: "Personal Info", component: PersonalInfoForm },
    { id: 2, name: "Education", component: EducationForm },
    { id: 3, name: "Experience", component: ExperienceForm }
  ];

  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Complete Your Profile
          </h1>
          <p className="text-muted-foreground">
            Let's get to know you better. Fill in your details step by step.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    currentStep > step.id
                      ? "bg-primary border-primary text-primary-foreground"
                      : currentStep === step.id
                        ? "border-primary text-primary scale-110"
                        : "border-muted text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <span className="font-semibold">{step.id}</span>
                  )}
                </div>
                <span
                  className={`ml-2 text-sm font-medium hidden sm:inline ${
                    currentStep >= step.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
                {step.id < totalSteps && (
                  <div
                    className={`w-12 sm:w-24 h-0.5 mx-2 transition-all duration-300 ${
                      currentStep > step.id ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="p-8 shadow-lg border-primary/20 animate-fade-in">
          <CurrentStepComponent onNext={handleNext} onBack={handleBack} />
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </div>
      </div>
    </div>
  );
}
