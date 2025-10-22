"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { improveDescriptionAction } from '@/app/actions';
import type { Project } from '@/lib/data';
import type { ImproveDescriptionInput } from '@/ai/flows/improve-portfolio-descriptions';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Clipboard, Check } from 'lucide-react';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  description: z.string(),
  projectContext: z.string().min(10, "Please provide some context about the project."),
  keywords: z.string().min(3, "Please provide some relevant keywords."),
});

type ImproveDescriptionFormValues = z.infer<typeof formSchema>;

interface ImproveDescriptionModalProps {
  project: Project | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function ImproveDescriptionModal({ project, isOpen, onOpenChange }: ImproveDescriptionModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [improvedDescription, setImprovedDescription] = useState<string | null>(null);
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<ImproveDescriptionFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: project?.description || '',
      projectContext: project?.projectContext || '',
      keywords: project?.keywords || '',
    },
  });

  const onSubmit: SubmitHandler<ImproveDescriptionFormValues> = async (data) => {
    setIsLoading(true);
    setImprovedDescription(null);
    const result = await improveDescriptionAction(data as ImproveDescriptionInput);
    setIsLoading(false);

    if (result.success && result.data) {
      setImprovedDescription(result.data.improvedDescription);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.message || 'Failed to generate suggestion.',
      });
    }
  };

  const handleCopyToClipboard = () => {
    if (improvedDescription) {
      navigator.clipboard.writeText(improvedDescription);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    }
  };

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline">
            <Sparkles className="h-5 w-5 text-accent" />
            Improve Description
          </DialogTitle>
          <DialogDescription>
            Use AI to generate a more engaging description for your project: "{project.title}".
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="projectContext"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Context</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., A web3 social media platform..." {...field} rows={3} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keywords</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., web3, social, decentralized" {...field} rows={2} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <DialogFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Generating...' : 'Generate Suggestion'}
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
            </DialogFooter>
          </form>
        </Form>
       
        {(isLoading || improvedDescription) && <Separator />}

        {isLoading && (
            <div className="space-y-2">
                <div className="w-1/4 h-4 bg-muted-foreground/20 animate-pulse rounded-md" />
                <div className="w-full h-4 bg-muted-foreground/20 animate-pulse rounded-md" />
                <div className="w-3/4 h-4 bg-muted-foreground/20 animate-pulse rounded-md" />
            </div>
        )}

        {improvedDescription && (
          <div className="space-y-3">
            <h3 className="font-medium text-foreground">AI Suggestion:</h3>
            <div className="relative rounded-md border bg-muted/50 p-4 text-sm text-foreground/90">
                {improvedDescription}
                 <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-7 w-7"
                    onClick={handleCopyToClipboard}
                >
                    {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Clipboard className="h-4 w-4" />}
                </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
