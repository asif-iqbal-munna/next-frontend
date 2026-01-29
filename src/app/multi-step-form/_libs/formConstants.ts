import { addressSchema, personalInfoSchema, preferencesSchema, reviewSchema, workExperienceSchema } from "./formValidationSchemaAndTypes";

export const STEPS = [
  {
    id: 1,
    title: "Personal Info",
    description: "Tell us about yourself",
    schema: personalInfoSchema,
    fields: ["firstName", "lastName", "email", "phone"] as const,
  },
  {
    id: 2,
    title: "Address",
    description: "Where are you located?",
    schema: addressSchema,
    fields: ["street", "city", "state", "zipCode", "country"] as const,
  },
  {
    id: 3,
    title: "Work Experience",
    description: "Your professional background",
    schema: workExperienceSchema,
    fields: ["experiences"] as const,
  },
  {
    id: 4,
    title: "Preferences",
    description: "Customize your experience",
    schema: preferencesSchema,
    fields: ["newsletter", "notifications", "interests"] as const,
  },
  {
    id: 5,
    title: "Review & Submit",
    description: "Confirm your information",
    schema: reviewSchema,
    fields: ["terms", "privacy"] as const,
  },
];

export const INTEREST_OPTIONS = [
  "Technology", "Business", "Design", "Marketing", "Finance",
  "Health", "Education", "Entertainment", "Sports", "Travel"
] as const;