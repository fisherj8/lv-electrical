"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SellEquipmentForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/sell-equipment", {
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
      toast.error("Unable to send submission. Please call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="border-brand/30 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Tell Us What You Have</CardTitle>
        <CardDescription>
          Upload photos and equipment details. We buy surplus electrical equipment nationwide.
        </CardDescription>
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
          <div className="space-y-2">
            <Label htmlFor="location">Equipment Location</Label>
            <Input id="location" name="location" placeholder="City, State" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="equipmentList">Equipment Description *</Label>
            <Textarea
              id="equipmentList"
              name="equipmentList"
              required
              rows={6}
              placeholder="Manufacturer, model numbers, quantities, condition..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="photos">Upload Photos</Label>
            <div className="rounded-lg border border-dashed border-border p-6 text-center">
              <Upload className="mx-auto size-8 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">
                Upload equipment photos (JPG, PNG — max 10MB each)
              </p>
              <Input
                id="photos"
                name="photos"
                type="file"
                accept="image/*"
                multiple
                className="mt-4"
              />
            </div>
          </div>
          <Button type="submit" disabled={loading} size="lg" className="w-full bg-brand text-white hover:bg-brand-light">
            {loading ? "Submitting..." : "Submit Equipment for Quote"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
