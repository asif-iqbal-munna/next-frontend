import { UseFormRegister, FieldErrors, UseFormWatch, UseFormHandleSubmit } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FormData } from "../formValidationSchemaAndTypes";

interface ReviewStepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting: boolean;
}

export const ReviewStep = ({ register, errors, watch, handleSubmit, onSubmit, isSubmitting }: ReviewStepProps) => {
  const watchedValues = watch();

  return (
    <div className="space-y-6">
      {/* Review Summary */}
      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
        <h3 className="font-medium text-gray-900">Review Your Information</h3>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Name:</strong> {watchedValues.firstName} {watchedValues.lastName}
          </div>
          <div>
            <strong>Email:</strong> {watchedValues.email}
          </div>
          <div>
            <strong>Phone:</strong> {watchedValues.phone}
          </div>
          <div>
            <strong>City:</strong> {watchedValues.city}, {watchedValues.state}
          </div>
          <div>
            <strong>Newsletter:</strong> {watchedValues.newsletter ? "Yes" : "No"}
          </div>
          <div>
            <strong>Notifications:</strong> {watchedValues.notifications}
          </div>
        </div>

        {/* Work Experience Summary */}
        {watchedValues.experiences && watchedValues.experiences.length > 0 && (
          <div>
            <strong className="block mb-2">Work Experience:</strong>
            <div className="space-y-2">
              {watchedValues.experiences.map((exp, idx) => (
                <div key={idx} className="pl-4 border-l-2 border-blue-400">
                  <p className="font-medium">{exp.position} at {exp.company}</p>
                  <p className="text-xs text-gray-600">
                    {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate || "N/A"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {watchedValues.interests && watchedValues.interests.length > 0 && (
          <div>
            <strong>Interests:</strong> {watchedValues.interests.join(", ")}
          </div>
        )}
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-4">
        <div>
          <label className="flex items-start space-x-2">
            <input
              {...register("terms")}
              type="checkbox"
              className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms and Conditions
              </a>
            </span>
          </label>
          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-start space-x-2">
            <input
              {...register("privacy")}
              type="checkbox"
              className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.privacy && (
            <p className="text-red-500 text-sm mt-1">{errors.privacy.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4 flex justify-between">
        <div>{" "}</div>
        <Button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          Submit Form
        </Button>
      </div>
    </div>
  );
};