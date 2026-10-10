"use client";

import { useState } from "react";
import { site, projectTypes, budgets } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-card px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-brand focus:ring-4 focus:ring-brand/15";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [type, setType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgets[budgets.length - 1]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    // No form key configured: hand off to the visitor's email app.
    if (!key) {
      const body = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "-"}\nProject: ${type}\nBudget: ${budget}\n\n${data.message}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`New project enquiry from ${data.name}`)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: `New project enquiry from ${data.name}`,
          from_name: `${site.name} website`,
          ...data,
          project_type: type,
          budget,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-line bg-card p-8 sm:p-10">
        <p className="text-2xl font-semibold tracking-tight">Thanks, we&apos;ve got your message.</p>
        <p className="mt-3 text-muted">
          We&apos;ll reply within one working day to set up a call. Need us sooner? Message us on WhatsApp.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-brand font-medium hover:underline cursor-pointer">
          Send another message
        </button>
      </div>
    );
  }

  const chip = (active: boolean) =>
    `rounded-full border px-3.5 py-2 text-sm transition-colors cursor-pointer ${
      active ? "border-brand bg-brand-soft text-ink" : "border-line text-muted hover:text-ink hover:border-silver"
    }`;

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-card p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Your name</span>
          <input name="name" required autoComplete="name" placeholder="Full name" className={field} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Work email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium">Phone or WhatsApp <span className="text-muted font-normal">(optional)</span></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+91" className={field} />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">What do you want to build?</legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {projectTypes.map((t) => (
            <button type="button" key={t} aria-pressed={type === t} onClick={() => setType(t)} className={chip(type === t)}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">Rough budget</legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button type="button" key={b} aria-pressed={budget === b} onClick={() => setBudget(b)} className={chip(budget === b)}>
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block">
        <span className="text-sm font-medium">Tell us a little about it</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="What problem are you solving, and who will use it?"
          className={`${field} resize-y`}
        />
      </label>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
          Your message didn&apos;t send. Check your connection and try again, or email us at {site.email}.
        </p>
      )}

      <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">We reply within one working day. NDA on request.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 font-medium text-brand-ink hover:bg-brand-hover disabled:opacity-60 transition-colors cursor-pointer"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}
