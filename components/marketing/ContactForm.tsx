"use client";

import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { submitContactForm } from "@/app/actions/contact";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const inputClass =
  "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-brand-orange";

const SERVICE_VALUES = ["website", "crm", "erp", "ai", "dashboard", "ml", "other"] as const;
const SIZE_VALUES = ["lt10", "10-50", "50-200", "200p"] as const;

export function ContactForm() {
  const t = useTranslations("ContactForm");
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "website",
      companySize: "10-50",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    startTransition(async () => {
      const result = await submitContactForm(data);
      if (!result.success) {
        toast.error(result.error);
        return;
      }
      setSubmitted(true);
      toast.success(t("successToast"));
      form.reset();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-700">{t("name")}</FormLabel>
              <FormControl>
                <Input className={inputClass} autoComplete="name" {...field} />
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
              <FormLabel className="text-zinc-700">{t("email")}</FormLabel>
              <FormControl>
                <Input type="email" className={inputClass} autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-700">{t("phone")}</FormLabel>
              <FormControl>
                <Input className={inputClass} autoComplete="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-700">{t("service")}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={cn(inputClass, "w-full")}>
                    <SelectValue placeholder={t("select")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-zinc-200 bg-white text-zinc-900">
                  {SERVICE_VALUES.map((value) => (
                    <SelectItem key={value} value={value}>
                      {t(`services.${value}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companySize"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-700">{t("companySize")}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={cn(inputClass, "w-full")}>
                    <SelectValue placeholder={t("select")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-zinc-200 bg-white text-zinc-900">
                  {SIZE_VALUES.map((value) => (
                    <SelectItem key={value} value={value}>
                      {t(`sizes.${value}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-700">{t("message")}</FormLabel>
              <FormControl>
                <Textarea rows={5} className={inputClass} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          aria-busy={isPending}
          className="w-full cursor-pointer rounded-xl bg-cta text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? t("submitting") : submitted ? t("submitAgain") : t("submit")}
        </Button>
      </form>
    </Form>
  );
}
