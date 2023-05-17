import { z } from 'zod';

export const ExampleCreateSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6)
});

export type CreateExample = z.infer<typeof ExampleCreateSchema>;
