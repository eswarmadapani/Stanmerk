import { z } from "zod";

export const PROJECT_TYPES = ["reels-shorts", "youtube", "thumbnail", "mentorship", "custom"] as const;
export const BUDGETS = ["under-15k", "15k-35k", "35k-75k", "75k-plus"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80, "Name must be less than 80 characters"),
  email: z.string().trim().email("Invalid email address").max(120, "Email must be less than 120 characters"),
  projectType: z.enum(PROJECT_TYPES, {
    message: "Please select a project type",
  }),
  budget: z.enum(BUDGETS, {
    message: "Please select a budget range",
  }),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
  website: z.string().max(0, "This field should be empty"), // honeypot
  turnstileToken: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
