"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const inquiryTypes = {
  "equipment-request": {
    label: "Equipment Request",
    equipmentLabel: "Equipment Needed",
    equipmentPlaceholder: "Breaker, switchgear, transformer...",
    subject: "Equipment Request",
  },
  "sell-equipment": {
    label: "Sell Equipment",
    equipmentLabel: "Equipment to Sell",
    equipmentPlaceholder: "Manufacturer, model, quantity, condition...",
    subject: "Sell Equipment Inquiry",
  },
} as const;

type InquiryType = keyof typeof inquiryTypes;

type ContactFormProps = {
  defaultSubject?: string;
  title?: string;
  description?: string;
  formType?: "quote" | "contact" | "call" | "credit";
  defaultInquiryType?: InquiryType;
};

export function ContactForm({
  defaultSubject = "Quote Request",
  title = "Send a Message",
  description = "Tell us what you need and our team will respond quickly.",
  formType = "quote",
  defaultInquiryType = "equipment-request",
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [inquiryType, setInquiryType] = useState<InquiryType>(defaultInquiryType);
  const inquiry = inquiryTypes[inquiryType];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.set("formType", formType);
    formData.set(
      "subject",
      formType === "quote"
        ? inquiry.subject
        : ((formData.get("subject") as string) || defaultSubject)
    );

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        toast.error(result.message ?? "Something went wrong.");
        return;
      }

      toast.success(result.message);
      event.currentTarget.reset();
      setInquiryType(defaultInquiryType);
    } catch {
      toast.error("Unable to send message. Please call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {formType === "quote" ? (
            <div className="space-y-2">
              <Label htmlFor="inquiryType">Request Type *</Label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                value={inquiryType}
                onChange={(event) => setInquiryType(event.target.value as InquiryType)}
                className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 text-sm shadow-xs transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option value="equipment-request">Equipment Request</option>
                <option value="sell-equipment">Sell Equipment</option>
              </select>
            </div>
          ) : null}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
          </div>
          {formType === "quote" ? (
            <div className="space-y-2">
              <Label htmlFor="equipment">{inquiry.equipmentLabel}</Label>
              <Input
                id="equipment"
                name="equipment"
                placeholder={inquiry.equipmentPlaceholder}
              />
            </div>
          ) : null}
          {formType === "call" ? (
            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Call Time</Label>
              <Input id="preferredTime" name="preferredTime" placeholder="Morning, afternoon, ASAP..." />
            </div>
          ) : null}
          {formType === "credit" ? (
            <div className="space-y-2">
              <Label htmlFor="taxId">Tax ID / EIN</Label>
              <Input id="taxId" name="taxId" />
            </div>
          ) : null}
          {formType !== "quote" ? (
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" defaultValue={defaultSubject} />
            </div>
          ) : null}
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" required rows={5} />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-brand text-white hover:bg-brand-light sm:w-auto">
            {loading ? "Sending..." : "Submit Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
