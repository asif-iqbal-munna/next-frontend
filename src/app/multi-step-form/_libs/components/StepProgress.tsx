import { CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { STEPS } from "../formConstants";

interface StepProgressProps {
  currentStep: number;
  completedSteps: Set<number>;
  onStepClick: (stepId: number) => void;
}

export const StepProgress = ({ currentStep, completedSteps, onStepClick }: StepProgressProps) => {
  const progress = ((currentStep - 1) / (STEPS.length - 1)) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Step {currentStep} of {STEPS.length}</h2>
        <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
      </div>
      <Progress value={progress} className="w-full" />

      <div className="flex justify-between mt-4 gap-1">
        {STEPS.map((step) => {
          const isCompleted = completedSteps.has(step.id);
          const isCurrent = step.id === currentStep;
          const isAccessible = step.id <= currentStep || completedSteps.has(step.id - 1);

          return (
            <button
              key={step.id}
              onClick={() => onStepClick(step.id)}
              disabled={!isAccessible}
              className={`flex-1 flex flex-col items-center p-3 rounded-lg transition-all duration-200 min-w-0 ${
                isCurrent
                  ? "bg-blue-50 text-blue-700"
                  : isCompleted
                  ? "bg-green-50 text-green-700 cursor-pointer hover:bg-green-100"
                  : isAccessible
                  ? "bg-gray-50 text-gray-700 cursor-pointer hover:bg-gray-100"
                  : "bg-gray-50 text-gray-400 cursor-not-allowed"
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-2 transition-colors flex-shrink-0 ${
                isCompleted
                  ? "bg-green-500 text-white"
                  : isCurrent
                  ? "bg-blue-500 text-white"
                  : isAccessible
                  ? "bg-gray-300 text-gray-700"
                  : "bg-gray-200 text-gray-400"
              }`}>
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  step.id
                )}
              </div>
              <span className="text-xs font-medium text-center leading-tight w-full truncate px-1">{step.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};