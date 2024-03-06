import { z } from "zod";

export const SignupValidation = z.object({
    name: z.string().min(3, {message: "Name must be atleast 3 characters"}),
  username: z.string().min(2, {message: "Inavlid username"}),
  email: z.string().email(),
  password: z.string().min(8, {message: "Password must be 8 characters"})
});
