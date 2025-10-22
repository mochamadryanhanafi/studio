"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Send } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const { formState: { isSubmitting } } = form;

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    const result = await submitContactForm(data);
    if (result.success) {
      toast({
        title: t('contact.toast.success.title'),
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: t('contact.toast.error.title'),
        description: result.message,
      });
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center animate-in fade-in duration-700 ease-out">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('contact.title')}
        </h2>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          {t('contact.subtitle')}
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-xl animate-in fade-in duration-700 ease-out">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.name.label')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('contact.form.name.placeholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.email.label')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('contact.form.email.placeholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.form.message.label')}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t('contact.form.message.placeholder')} {...field} rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center">
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? t('contact.form.button.sending') : t('contact.form.button.send')}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;
