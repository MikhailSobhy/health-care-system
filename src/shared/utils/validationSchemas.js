import * as z from 'zod'

export const loginSchema = z.object({
    email: z.string().email("Enter valid email"),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).{8,}$/,'Password must include an uppercase letter, a number and a special character')
})

export const registerSchema = z.object({
    email: z.string().email("Enter valid email"),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).{8,}$/,'Password must include an uppercase letter, a number and a special character'),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

