import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../formValidationSchemaAndTypes";

interface AddressStepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const AddressStep = ({ register, errors }: AddressStepProps) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Street Address *</label>
        <input
          {...register("street")}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your street address"
        />
        {errors.street && (
          <p className="text-red-500 text-sm mt-1">{errors.street.message}</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">City *</label>
          <input
            {...register("city")}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your city"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">State *</label>
          <input
            {...register("state")}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your state"
          />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">ZIP Code *</label>
          <input
            {...register("zipCode")}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="12345 or 12345-6789"
          />
          {errors.zipCode && (
            <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Country *</label>
          <input
            {...register("country")}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your country"
          />
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};