import { MultiStepForm } from "./_libs/MultiStepForm";
import PageWrapper from "../../components/layout/PageWrapper";

export const metadata = {
  title: "Multi-Step Form",
  description: "A comprehensive multi-step form with validation and error handling",
};

export default function MultiStepFormPage() {
  return (
    <PageWrapper className="max-w-4xl mx-auto">
      <div className="py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Multi-Step Form Demo
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience a production-grade multi-step form with comprehensive validation,
            error handling, and user-friendly feedback throughout the entire process.
          </p>
        </div>

        <MultiStepForm />
      </div>
    </PageWrapper>
  );
}