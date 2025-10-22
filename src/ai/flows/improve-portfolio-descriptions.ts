'use server';

/**
 * @fileOverview AI-powered tool that suggests improvements to portfolio item descriptions.
 *
 * - improveDescription - A function that suggests improvements to a portfolio item description.
 * - ImproveDescriptionInput - The input type for the improveDescription function.
 * - ImproveDescriptionOutput - The return type for the improveDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveDescriptionInputSchema = z.object({
  description: z.string().describe('The current description of the portfolio item.'),
  projectContext: z.string().describe('The context or details about the project.'),
  keywords: z.string().describe('Relevant keywords for the project.'),
});
export type ImproveDescriptionInput = z.infer<typeof ImproveDescriptionInputSchema>;

const ImproveDescriptionOutputSchema = z.object({
  improvedDescription: z.string().describe('The improved description of the portfolio item.'),
});
export type ImproveDescriptionOutput = z.infer<typeof ImproveDescriptionOutputSchema>;

export async function improveDescription(input: ImproveDescriptionInput): Promise<ImproveDescriptionOutput> {
  return improveDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveDescriptionPrompt',
  input: {schema: ImproveDescriptionInputSchema},
  output: {schema: ImproveDescriptionOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in portfolio descriptions.

You will use the project context and keywords to rewrite the project description to be more engaging and relevant.

Project Context: {{{projectContext}}}
Keywords: {{{keywords}}}
Current Description: {{{description}}}

Improved Description:`,
});

const improveDescriptionFlow = ai.defineFlow(
  {
    name: 'improveDescriptionFlow',
    inputSchema: ImproveDescriptionInputSchema,
    outputSchema: ImproveDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
