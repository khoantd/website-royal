"use client";

import { useState, useTransition } from "react";
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

export function ContactForm() {
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
      toast.success("Đã ghi nhận — đội ngũ sẽ phản hồi trong 2 giờ làm việc.");
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
              <FormLabel className="text-zinc-700">Họ tên *</FormLabel>
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
              <FormLabel className="text-zinc-700">Email *</FormLabel>
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
              <FormLabel className="text-zinc-700">Số điện thoại</FormLabel>
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
              <FormLabel className="text-zinc-700">Dịch vụ quan tâm</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={cn(inputClass, "w-full")}>
                    <SelectValue placeholder="Chọn" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-zinc-200 bg-white text-zinc-900">
                  <SelectItem value="website">Website / CMS</SelectItem>
                  <SelectItem value="crm">CRM</SelectItem>
                  <SelectItem value="erp">ERP</SelectItem>
                  <SelectItem value="ai">AI / Chatbot</SelectItem>
                  <SelectItem value="dashboard">Dashboard & Báo cáo</SelectItem>
                  <SelectItem value="ml">ML / AI</SelectItem>
                  <SelectItem value="other">Khác</SelectItem>
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
              <FormLabel className="text-zinc-700">Quy mô công ty</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={cn(inputClass, "w-full")}>
                    <SelectValue placeholder="Chọn" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="border-zinc-200 bg-white text-zinc-900">
                  <SelectItem value="lt10">&lt; 10 nhân sự</SelectItem>
                  <SelectItem value="10-50">10 – 50</SelectItem>
                  <SelectItem value="50-200">50 – 200</SelectItem>
                  <SelectItem value="200p">200+</SelectItem>
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
              <FormLabel className="text-zinc-700">Mô tả nhu cầu *</FormLabel>
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
          {isPending ? "Đang gửi…" : submitted ? "Gửi thêm yêu cầu" : "Gửi yêu cầu"}
        </Button>
      </form>
    </Form>
  );
}
