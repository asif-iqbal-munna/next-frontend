import { UseFormRegister, FieldErrors, UseFormWatch, Control } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { FormData } from "../formValidationSchemaAndTypes";

interface WorkExperienceStepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  control: Control<FormData>;
  watch: UseFormWatch<FormData>;
}

export const WorkExperienceStep = ({ register, errors, control, watch }: WorkExperienceStepProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const watchedValues = watch();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">Add your work experience (at least one required)</p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            currentlyWorking: false,
            description: "",
          })}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Experience
        </Button>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="p-4 border rounded-lg bg-gray-50 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-gray-900">Experience #{index + 1}</h4>
            {fields.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => remove(index)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company Name *</label>
              <input
                {...register(`experiences.${index}.company`)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                placeholder="e.g., Google"
              />
              {errors.experiences?.[index]?.company && (
                <p className="text-red-500 text-sm mt-1">{errors.experiences[index]?.company?.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Position *</label>
              <input
                {...register(`experiences.${index}.position`)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                placeholder="e.g., Software Engineer"
              />
              {errors.experiences?.[index]?.position && (
                <p className="text-red-500 text-sm mt-1">{errors.experiences[index]?.position?.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Start Date *</label>
              <input
                {...register(`experiences.${index}.startDate`)}
                type="month"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
              {errors.experiences?.[index]?.startDate && (
                <p className="text-red-500 text-sm mt-1">{errors.experiences[index]?.startDate?.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Date</label>
              <input
                {...register(`experiences.${index}.endDate`)}
                type="month"
                disabled={watchedValues.experiences?.[index]?.currentlyWorking}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                {...register(`experiences.${index}.currentlyWorking`)}
                type="checkbox"
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm">I currently work here</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description <span className="text-gray-500">(Optional, max 500 chars)</span>
            </label>
            <textarea
              {...register(`experiences.${index}.description`)}
              rows={3}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-none"
              placeholder="Describe your role and achievements..."
              maxLength={500}
            />
            {watchedValues.experiences?.[index]?.description && (
              <p className="text-xs text-gray-500 mt-1">
                {watchedValues.experiences[index].description?.length || 0}/500 characters
              </p>
            )}
            {errors.experiences?.[index]?.description && (
              <p className="text-red-500 text-sm mt-1">{errors.experiences[index]?.description?.message}</p>
            )}
          </div>
        </div>
      ))}

      {errors.experiences && typeof errors.experiences.message === 'string' && (
        <p className="text-red-500 text-sm">{errors.experiences.message}</p>
      )}
    </div>
  );
};