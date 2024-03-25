import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(3, "Title is Required").max(255),
  description: z
    .string()
    .min(3, "Description is Required 3 characters long minimum"),
});
