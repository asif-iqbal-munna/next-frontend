import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../formValidationSchemaAndTypes";

interface PersonalInfoStepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const PersonalInfoStep = ({ register, errors }: PersonalInfoStepProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name *</label>
          <input
            {...register("firstName")}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name *</label>
          <input
            {...register("lastName")}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input
          {...register("email")}
          type="email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone *</label>
        <input
          {...register("phone")}
          type="tel"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your phone number"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
    </div>
  );
};