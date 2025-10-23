
"use server";

import { z } from 'zod';

// This file is no longer used for the contact form but is kept for potential future use.
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(data: unknown) {
  const parsed = contactFormSchema.safeParse(data);

  if (parsed.success) {
    console.log('Form submitted successfully:', parsed.data);
    return { success: true, message: 'Message sent! Thank you for reaching out.' };
  } else {
    const errorMessages = parsed.error.issues.map(issue => issue.message).join(' ');
    console.error('Form validation error:', errorMessages);
    return { success: false, message: `Invalid data: ${errorMessages}` };
  }
}
