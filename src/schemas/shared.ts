import { z } from "zod/v4";

export const dbEntrySchema = z.strictObject({
    _id: z.string(), 
    createdAt: z.date(),          // creation timestamp
    updatedAt: z.date(),          // update timestamp
});

// 用来验证 URL 参数中的 id，例如 /users/:id
export const paramsSchema = z.object({
    id: z.string().min(1, "ID is required")
  });

// TypeScript type automatically inferred
export type DbEntry = z.infer<typeof dbEntrySchema>;