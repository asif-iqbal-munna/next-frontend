import z from "zod";

// Step 1: Personal Information
export const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").trim(),
  lastName: z.string().min(2, "Last name must be at least 2 characters").trim(),
  email: z.string().email("Please enter a valid email address").toLowerCase().trim(),
  phone: z.string().min(10, "Phone number must be at least 10 digits").regex(/^\+?[\d\s\-\(\)]+$/, "Please enter a valid phone number"),
});

// Step 2: Address Information
export const addressSchema = z.object({
  street: z.string().min(5, "Street address must be at least 5 characters").trim(),
  city: z.string().min(2, "City must be at least 2 characters").trim(),
  state: z.string().min(2, "State must be at least 2 characters").trim(),
  zipCode: z.string().regex(/^\d{4,5}(-\d{4})?$/, "Please enter a valid ZIP code (e.g., 1234, 12345 or 12345-6789)"),
  country: z.string().min(2, "Country must be at least 2 characters").trim(),
});

// Step 3: Work Experience (useFieldArray demonstration)
export const workExperienceItemSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters").trim(),
  position: z.string().min(2, "Position must be at least 2 characters").trim(),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  currentlyWorking: z.boolean(),
  description: z.string().max(500, "Description must be less than 500 characters").optional(),
});

export const workExperienceSchema = z.object({
  experiences: z.array(workExperienceItemSchema).min(1, "Please add at least one work experience"),
});

// Step 4: Preferences
export const preferencesSchema = z.object({
  newsletter: z.boolean(),
  notifications: z.enum(["email", "sms", "push", "none"], {
    message: "Please select a notification preference",
  }),
  interests: z.array(z.string()).min(1, "Please select at least one interest").max(5, "You can select up to 5 interests"),
});

// Step 5: Review & Terms
export const reviewSchema = z.object({
  terms: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
  privacy: z.boolean().refine(val => val === true, "You must accept the privacy policy"),
});

// Complete form data type
type PersonalInfoData = z.infer<typeof personalInfoSchema>;
type AddressData = z.infer<typeof addressSchema>;
type WorkExperienceData = z.infer<typeof workExperienceSchema>;
type PreferencesData = z.infer<typeof preferencesSchema>;
type ReviewData = z.infer<typeof reviewSchema>;

export const combinedSchema = z.object({
  ...personalInfoSchema.shape,
  ...addressSchema.shape,
  ...workExperienceSchema.shape,
  ...preferencesSchema.shape,
  ...reviewSchema.shape,
})

export type FormData = PersonalInfoData & AddressData & WorkExperienceData & PreferencesData & ReviewData;