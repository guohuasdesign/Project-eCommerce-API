import { z } from "zod/v4";

export const dbEntrySchema = z.strictObject({
    _id: z.string(), 
    createdAt: z.date(),          // creation timestamp
    updatedAt: z.date(),          // update timestamp
});

// TypeScript type automatically inferred
export type DbEntry = z.infer<typeof dbEntrySchema>;