import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  status: z.enum(["draft", "published", "archived"]),
  category: z.enum(["MEN", "WOMEN"]),
  images: z.array(z.string().min(1, "At least one image is required")),
});
