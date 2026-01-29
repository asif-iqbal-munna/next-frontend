import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";
import { FormData } from "../formValidationSchemaAndTypes";
import { INTEREST_OPTIONS } from "../formConstants";

interface PreferencesStepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  watch: UseFormWatch<FormData>;
}

export const PreferencesStep = ({ register, errors, watch }: PreferencesStepProps) => {
  const watchedValues = watch();

  return (
    <div className="space-y-6">
      <div>
        <label className="flex items-center space-x-2">
          <input
            {...register("newsletter")}
            type="checkbox"
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm">Subscribe to our newsletter</span>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Notification Preferences *</label>
        <select
          {...register("notifications")}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="email">Email notifications</option>
          <option value="sms">SMS notifications</option>
          <option value="push">Push notifications</option>
          <option value="none">No notifications</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">
          Interests * <span className="text-gray-500">(Select 1-5)</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {INTEREST_OPTIONS.map((interest) => {
            const isSelected = watchedValues.interests?.includes(interest);
            return (
              <label
                key={interest}
                className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-all ${
                  isSelected
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  {...register("interests")}
                  type="checkbox"
                  value={interest}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                />
                <span className="text-sm font-medium">{interest}</span>
              </label>
            );
          })}
        </div>
        {watchedValues.interests && watchedValues.interests.length > 0 && (
          <p className="text-xs text-gray-600 mt-2">
            Selected: {watchedValues.interests.length} of 5
          </p>
        )}
        {errors.interests && (
          <p className="text-red-500 text-sm mt-2">{errors.interests.message}</p>
        )}
      </div>
    </div>
  );
};