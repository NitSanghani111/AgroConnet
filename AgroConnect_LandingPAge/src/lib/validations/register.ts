import * as z from "zod"
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]
const ACCEPTED_DOC_TYPES = [...ACCEPTED_IMAGE_TYPES, "application/pdf"]
export const registerSchema = z.object({
  userType: z.enum(["farmer", "buyer"], {
    required_error: "Please select a user type",
  }),
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "First name can only contain letters and spaces"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Last name can only contain letters and spaces"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be less than 30 characters")
    .regex(/^[a-zA-Z0-9_]*$/, "Username can only contain letters, numbers and underscores"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^\+?[0-9]*$/, "Please enter a valid phone number"),
  country: z
    .string()
    .min(2, "Country must be at least 2 characters")
    .max(50, "Country must be less than 50 characters"),
  state: z
    .string()
    .min(2, "State must be at least 2 characters")
    .max(50, "State must be less than 50 characters"),
  documentNo: z
    .string()
    .min(5, "Document number must be at least 5 characters")
    .max(50, "Document number must be less than 50 characters"),
  proofDocument: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 10MB")
    .refine(
      (file) => ACCEPTED_DOC_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .pdf files are accepted"
    ),
  profilePhoto: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Max file size is 10MB")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg and .png files are accepted"
    ),
})
export type RegisterFormData = z.infer<typeof registerSchema>