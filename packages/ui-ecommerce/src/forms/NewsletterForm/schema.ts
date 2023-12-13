import { z } from "zod";

export const newsletterFormSchema = z.object({
    email: z
        .string()
        .min(1, { message: "This field is required" })
        .email({ message: "This is not a valid email address" }),
});
