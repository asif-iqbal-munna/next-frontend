"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { FormData, combinedSchema } from "./formValidationSchemaAndTypes";
import { STEPS } from "./formConstants";
import { PersonalInfoStep } from "./steps/PersonalInfoStep";
import { AddressStep } from "./steps/AddressStep";
import { WorkExperienceStep } from "./steps/WorkExperienceStep";
import { PreferencesStep } from "./steps/PreferencesStep";
import { ReviewStep } from "./steps/ReviewStep";
import { StepProgress } from "./components/StepProgress";
import { FormSuccess } from "./components/FormSuccess";

export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    clearErrors,
    control,
    formState: { errors },
    reset
  } = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(combinedSchema),
    defaultValues: {
      newsletter: false,
      notifications: "email" as const,
      interests: [],
      terms: false,
      privacy: false,
      experiences: [
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          currentlyWorking: false,
          description: "",
        },
      ],
    },
  });

  const watchedValues = watch();
  const currentStepConfig = STEPS[currentStep - 1];


  const validateCurrentStep = async (): Promise<boolean> => {
    if (!currentStepConfig) return false;

    try {
      const stepSchema = currentStepConfig.schema;
      const stepData = watchedValues;

      await stepSchema.parseAsync(stepData);
      return true;
    } catch (error) {
      console.warn(`Step ${currentStep} validation failed:`, error);
      return false;
    }
  };

  const handleNext = async () => {
    const isStepValid = await validateCurrentStep();

    if (!isStepValid) {
      await trigger(currentStepConfig.fields);
      toast.error("Please provide the information before continuing", {
        description: "Required fields are marked with *",
      });
      return;
    }

    setCompletedSteps(prev => new Set([...prev, currentStep]));
    setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep || completedSteps.has(stepId - 1)) {
      setCurrentStep(stepId);
      clearErrors();
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log("🎉 Form submitted successfully:", data);

      toast.success("Form submitted successfully!", {
        description: "Thank you for completing the registration.",
        duration: 3000,
      });

      reset();
      setIsFormSubmitted(true);
    } catch (error) {
      console.error("Form submission failed:", error);
      toast.error("Failed to submit form", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStartNewSubmission = () => {
    setCurrentStep(1);
    setCompletedSteps(new Set());
    setIsFormSubmitted(false);
    reset();
  };

  if (isFormSubmitted) {
    return <FormSuccess onStartNew={handleStartNewSubmission} />;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <StepProgress
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={handleStepClick}
      />

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{currentStepConfig.title}</CardTitle>
          <CardDescription className="text-base">{currentStepConfig.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {currentStep === 1 && (
            <PersonalInfoStep register={register} errors={errors} />
          )}

          {currentStep === 2 && (
            <AddressStep register={register} errors={errors} />
          )}

          {currentStep === 3 && (
            <WorkExperienceStep
              register={register}
              errors={errors}
              control={control}
              watch={watch}
            />
          )}

          {currentStep === 4 && (
            <PreferencesStep register={register} errors={errors} watch={watch} />
          )}

          {currentStep === 5 && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ReviewStep
                register={register}
                errors={errors}
                watch={watch}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                isSubmitting={isSubmitting}
              />
            </form>
          )}

          {currentStep !== 5 && (
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              <Button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};