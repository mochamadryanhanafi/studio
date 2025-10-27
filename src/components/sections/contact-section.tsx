"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Phone } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { t } = useTranslation();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const message = `Hello, my name is ${data.name}.\nMy email is ${data.email}.\n\nI'm interested in discussing a project.\n\nHere's my message:\n${data.message}`;
    const whatsappLink = `https://wa.me/6285860516408?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    form.reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
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
                <Button type="submit" size="lg">
                  {t('contact.form.button.send')}
                  <Phone className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
