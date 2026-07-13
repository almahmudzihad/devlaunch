import { z } from "zod";

export const schemas = {
  example: z.object({
    email: z.email(),
    password: z.string().min(8),
  }),
} as const;

export type ExampleFormValues = z.infer<typeof schemas.example>;
