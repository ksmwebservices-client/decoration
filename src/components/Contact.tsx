"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { business, waLink } from "@/data/site";
import { SectionHeading } from "./Services";

type FormValues = {
  name: string;
  phone: string;
  eventDate: string;
  location: string;
  eventType: string;
  budget: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Simulate submit — replace with your API / EmailJS / webhook endpoint.
    await new Promise((r) => setTimeout(r, 700));

    toast.success("Enquiry sent! Redirecting you to WhatsApp...");

    const message = `Hello Sathuragiri Decoration,\nName: ${data.name}\nPhone: ${data.phone}\nEvent: ${data.eventType}\nDate: ${data.eventDate}\nLocation: ${data.location}\nBudget: ${data.budget}\nMessage: ${data.message}`;

    reset();
    window.open(waLink(message), "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Plan Your Celebration With Us"
          subtitle="Send your event details and we'll reply with a custom package on WhatsApp."
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            <InfoRow icon={MapPin} title="Address">
              {business.address.line1}
              <br />
              {business.address.line2}
              <br />
              {business.address.line3}
            </InfoRow>
            <InfoRow icon={Phone} title="Phone / WhatsApp">
              <a href={`tel:${business.phone}`} className="hover:text-rose">
                {business.phoneDisplay}
              </a>
            </InfoRow>
            <InfoRow icon={Mail} title="Email">
              <a href={`mailto:${business.email}`} className="hover:text-rose">
                {business.email}
              </a>
            </InfoRow>
            <InfoRow icon={Clock} title="Opening Hours">
              {business.hours}
            </InfoRow>

            <a
              href={waLink("Hello Sathuragiri Decoration, I'd like to know more about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-leaf text-white px-6 py-3 font-semibold shadow-lg shadow-leaf/30 hover:brightness-110 transition"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>

            <div className="rounded-2xl overflow-hidden border border-ink/10 h-56 mt-4">
              <iframe
                title="Sathuragiri Decoration location map"
                src={business.mapsEmbed}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 rounded-2xl border border-ink/10 p-6 md:p-8 bg-[#fffaf3] space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" error={errors.name?.message}>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="input"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input
                  {...register("phone", { required: "Phone number is required" })}
                  className="input"
                  placeholder="10-digit mobile number"
                />
              </Field>
              <Field label="Event Date" error={errors.eventDate?.message}>
                <input type="date" {...register("eventDate")} className="input" />
              </Field>
              <Field label="Location" error={errors.location?.message}>
                <input
                  {...register("location")}
                  className="input"
                  placeholder="Village / Town"
                />
              </Field>
              <Field label="Event Type" error={errors.eventType?.message}>
                <select {...register("eventType")} className="input">
                  <option>Wedding</option>
                  <option>Temple Festival</option>
                  <option>Birthday</option>
                  <option>House Warming</option>
                  <option>Corporate Event</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Budget" error={errors.budget?.message}>
                <select {...register("budget")} className="input">
                  <option>Under ₹10,000</option>
                  <option>₹10,000 – ₹25,000</option>
                  <option>₹25,000 – ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000+</option>
                </select>
              </Field>
            </div>
            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={4}
                className="input resize-none"
                placeholder="Tell us more about your event..."
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-rose text-white font-semibold py-3 hover:brightness-110 transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </button>
          </motion.form>
        </div>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid rgba(27, 16, 50, 0.15);
          border-radius: 0.75rem;
          padding: 0.65rem 0.9rem;
          font-size: 0.9rem;
          background: white;
        }
        .input:focus {
          outline: 2px solid var(--color-royal);
          border-color: transparent;
        }
      `}</style>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="h-10 w-10 rounded-xl bg-rose/10 text-rose flex items-center justify-center shrink-0">
        <Icon size={18} />
      </div>
      <div>
        <p className="font-semibold text-ink text-sm">{title}</p>
        <p className="text-sm text-ink/60 mt-0.5">{children}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-ink/70">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="text-xs text-rose mt-1 block">{error}</span>}
    </label>
  );
}
