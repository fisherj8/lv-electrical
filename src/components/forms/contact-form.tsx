"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  defaultSubject?: string;
  title?: string;
  description?: string;
  formType?: "quote" | "contact" | "call" | "credit";
};

export function ContactForm({
  defaultSubject = "Quote Request",
  title = "Send a Message",
  description = "Tell us what you need and our team will respond quickly.",
  formType = "quote",
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.set("formType", formType);
    formData.set("subject", (formData.get("subject") as string) || defaultSubject);

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
              <Label htmlFor="equipment">Equipment Needed</Label>
              <Input id="equipment" name="equipment" placeholder="Breaker, switchgear, transformer..." />
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
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" defaultValue={defaultSubject} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" required rows={5} />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-amber-500 text-slate-950 hover:bg-amber-400 sm:w-auto">
            {loading ? "Sending..." : "Submit Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export function InventorySearch() {
  const [query, setQuery] = useState("");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Search</CardTitle>
        <CardDescription>
          Search our current inventory. Full database integration coming soon.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by SKU, manufacturer, or product..."
          />
          <a
            href={`/inventory?q=${encodeURIComponent(query)}`}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Search
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
