"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const inquiryTypes = ["개발 용역", "제품 구매", "교육 문의", "기타"] as const;

type InquiryType = (typeof inquiryTypes)[number];

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  type: InquiryType;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  type: "개발 용역",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "이름을 입력해 주세요.";
  if (!data.email.trim()) {
    errors.email = "이메일을 입력해 주세요.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }
  if (!data.message.trim()) errors.message = "메시지를 입력해 주세요.";
  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormData];
        return next;
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-xl border border-secondary/30 bg-secondary/5 p-12 text-center">
        <CheckCircle className="h-12 w-12 text-secondary" />
        <h3 className="mt-4 text-xl font-bold text-foreground">문의가 접수되었습니다</h3>
        <p className="mt-2 text-sm text-muted">
          빠른 시일 내에 확인 후 회신드리겠습니다. 감사합니다.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => {
            setFormData(initialFormData);
            setSubmitted(false);
          }}
        >
          새로 작성하기
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="홍길동"
            className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            회사
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="(선택)"
            className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            이메일 <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            전화번호
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="010-0000-0000 (선택)"
            className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="type" className="text-sm font-medium text-foreground">
          문의 유형
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          메시지 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="프로젝트에 대해 간단히 설명해 주세요."
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" />
        문의 보내기
      </Button>
    </form>
  );
}
