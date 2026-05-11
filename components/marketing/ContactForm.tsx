"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Nhập họ tên"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().optional(),
  service: z.enum(["website", "crm", "erp", "ai", "dashboard", "ml", "other"]),
  companySize: z.enum(["lt10", "10-50", "50-200", "200p"]),
  message: z.string().min(10, "Mô tả ít nhất 10 ký tự"),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-brand-orange";

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "website",
      companySize: "10-50",
      message: "",
    },
  });

  function onSubmit(_data: FormValues) {
    toast.success("Đã ghi nhận — đội ngũ sẽ phản hồi trong 2 giờ làm việc.");
    form.reset();
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
                <Input className={inputClass} {...field} />
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
                <Input type="email" className={inputClass} {...field} />
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
                <Input className={inputClass} {...field} />
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
                  <SelectTrigger className={inputClass}>
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
                  <SelectTrigger className={inputClass}>
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
        <Button type="submit" size="lg" className="w-full rounded-xl bg-gradient-to-r from-[#161E54] to-[#F16D34] text-white hover:opacity-95">
          Gửi yêu cầu
        </Button>
      </form>
    </Form>
  );
}
