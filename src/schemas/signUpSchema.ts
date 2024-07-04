import { z } from 'zod';

export const usernameValidation = z
    .string()
    .min(2, 'Username must be at least 2 characters')
    .max(20, 'Username must be no more than 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');

export const passwordValidation = z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must be no more than 50 characters');

export const signUpSchema = z.object({
    username: usernameValidation,
    password: passwordValidation,
    email: z.string().email({ message: 'Invalid email address' }),
});