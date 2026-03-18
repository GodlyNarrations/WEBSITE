import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Leaf,
  Waves,
  CalendarDays,
  Star,
  Clock3,
  MapPin,
  Phone,
  ArrowRight,
  Flower2,
  Gem,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const treatments = [
  {
    title: "Signature Massage",
    text: "A deeply relaxing full-body treatment designed to release tension and restore calm.",
    icon: Waves,
  },
  {
    title: "Radiance Facial",
    text: "A luxury facial ritual focused on hydration, glow, and a refreshed, luminous finish.",
    icon: Sparkles,
  },
  {
    title: "Spa Packages",
    text: "Curated experiences that combine treatments into indulgent escapes for body and mind.",
    icon: Gem,
  },
];

const highlights = [
  {
    title: "Luxury atmosphere",
    text: "Soft lighting, refined interiors, and a calm visual style that immediately feels premium.",
    icon: Flower2,
  },
  {
    title: "Personalised care",
    text: "Every visit is tailored to the guest, creating a more intimate and memorable experience.",
    icon: HeartHandshake,
  },
  {
    title: "Wellness-led experience",
    text: "Treatments designed to help guests unwind, recharge, and leave feeling renewed.",
    icon: Leaf,
  },
];

const testimonials = [
  {
    name: "Amelia R.",
    quote: "Absolutely beautiful. From the moment I arrived, everything felt calm, elegant, and genuinely luxurious.",
  },
  {
    name: "Sophie L.",
    quote: "The most relaxing spa experience I’ve had in a long time. Stunning atmosphere and amazing service.",
  },
  {
    name: "Isabella M.",
    quote: "Every detail felt premium. The facial was incredible and the whole space was just beautiful.",
  },
];

export default function LuxurySpaWebsite() {
  return (
    <div className="min-h-screen bg-[#120d0b] text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(255,210,145,0.12),transparent_25%),linear-gradient(180deg,#120d0b_0%,#1a120f_38%,#0f0a08_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#120d0b]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-200/20 bg-amber-100/5">
              <Sparkles className="h-5 w-5 text-amber-200" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.36em] text-white/40">Luxury Wellness</p>
              <h1 className="text-sm font-semibold">Serenity Spa Retreat</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#treatments" className="transition hover:text-white">Treatments</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#reviews" className="transition hover:text-white">Reviews</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <Button className="rounded-full bg-amber-200 px-5 text-[#1a120f] hover:bg-amber-100">
            Book Now
          </Button>
        </div>
      </header>

      <main>
        <section className="px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="rounded-full border border-amber-200/20 bg-amber-100/5 px-4 py-1 text-amber-100">
                  A luxury escape for rest and renewal
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="space-y-5"
              >
                <h2 className="max-w-2xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
                  Indulge in calm.
                  <br />
                  <span className="bg-gradient-to-r from-amber-100 via-amber-200 to-orange-200 bg-clip-text text-transparent">
                    Experience pure luxury.
                  </span>
                </h2>
                <p className="max-w-xl text-lg leading-8 text-white/70">
                  Serenity Spa Retreat is designed to feel elegant, soothing, and unforgettable — a space where guests can unwind through premium treatments, beautiful surroundings, and personalised care.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="rounded-full bg-amber-200 px-6 text-[#1a120f] hover:bg-amber-100">
                  View Treatments <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                  Reserve a Session
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="grid gap-4 sm:grid-cols-3"
              >
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-200/20 bg-amber-100/5">
                        <Icon className="h-5 w-5 text-amber-200" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/60">{item.text}</p>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative mx-auto h-[620px] w-full max-w-[560px]"
            >
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-4 top-6 h-[250px] w-[230px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-200/20 to-transparent p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              >
                <div className="flex h-full flex-col justify-between rounded-[1.6rem] border border-white/10 bg-black/25 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/40">Signature Ritual</p>
                    <h3 className="mt-3 text-2xl font-semibold">Golden Glow Facial</h3>
                  </div>
                  <div className="rounded-[1.2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))] p-4 text-sm text-white/70">
                    Luxury treatment preview panel
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -1.5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 top-20 h-[320px] w-[270px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-orange-200/15 to-transparent p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              >
                <div className="flex h-full flex-col justify-between rounded-[1.6rem] border border-white/10 bg-black/25 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/40">Spa Interior</p>
                    <h3 className="mt-3 text-2xl font-semibold">Soft, candlelit elegance</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-[4/5] rounded-[1rem] border border-white/10 bg-white/5" />
                    <div className="aspect-[4/5] rounded-[1rem] border border-white/10 bg-white/5" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-14 h-[260px] w-[360px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-100/10 to-transparent p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              >
                <div className="flex h-full flex-col justify-between rounded-[1.6rem] border border-white/10 bg-black/25 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-white/40">Luxury Package</p>
                      <h3 className="mt-3 text-2xl font-semibold">Retreat Experience</h3>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/10 p-3">
                      <Gem className="h-5 w-5 text-amber-200" />
                    </div>
                  </div>
                  <div className="h-24 rounded-[1.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))]" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="treatments" className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs uppercase tracking-[0.38em] text-white/40">Treatments</p>
              <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">Curated rituals for beauty, wellness, and deep relaxation.</h3>
              <p className="max-w-2xl text-lg leading-8 text-white/65">
                A premium spa site should make every treatment feel desirable, elevated, and easy to book.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {treatments.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                  >
                    <Card className="h-full rounded-[2rem] border-white/10 bg-white/[0.04] text-white shadow-2xl shadow-black/20">
                      <CardContent className="p-6">
                        <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-amber-200/10 to-transparent p-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200/20 bg-amber-100/5">
                            <Icon className="h-5 w-5 text-amber-200" />
                          </div>
                          <h4 className="mt-5 text-2xl font-semibold">{item.title}</h4>
                          <p className="mt-3 leading-8 text-white/70">{item.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.38em] text-white/40">About</p>
              <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">A spa experience designed to feel effortless and elevated.</h3>
              <p className="max-w-xl text-lg leading-8 text-white/65">
                This concept positions the brand as calm, premium, and highly desirable — using warm tones, elegant typography, and layered sections that feel more luxurious than a typical spa website.
              </p>
              <Button className="mt-4 rounded-full bg-amber-200 text-[#1a120f] hover:bg-amber-100">
                Discover Our Story
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Tailored treatments",
                "Premium products",
                "Relaxing sanctuary",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="aspect-[4/5] rounded-[1.4rem] border border-white/10 bg-white/5" />
                  <h4 className="mt-5 text-2xl font-semibold">{item}</h4>
                  <p className="mt-3 leading-8 text-white/65">A placeholder space for photography, treatment visuals, or interior atmosphere shots.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs uppercase tracking-[0.38em] text-white/40">Reviews</p>
              <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">Guests remember how it made them feel.</h3>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                >
                  <Card className="h-full rounded-[2rem] border-white/10 bg-white/[0.04] text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 text-amber-200">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <p className="mt-5 leading-8 text-white/80">“{item.quote}”</p>
                      <p className="mt-5 text-sm uppercase tracking-[0.24em] text-white/40">{item.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 pt-10 md:pb-32">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.03] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.38em] text-white/40">Bookings</p>
                <h3 className="text-4xl font-semibold tracking-tight md:text-5xl">Ready to turn this into a real luxury brand site?</h3>
                <p className="max-w-2xl text-lg leading-8 text-white/65">
                  This is a polished luxury spa website concept. It can be customized with real treatments, booking links, pricing, location details, photography, and branding.
                </p>
                <div className="flex flex-col gap-3 pt-3 text-white/75">
                  <div className="inline-flex items-center gap-3"><CalendarDays className="h-5 w-5 text-amber-200" /> Booking link or scheduler here</div>
                  <div className="inline-flex items-center gap-3"><Clock3 className="h-5 w-5 text-amber-200" /> Opening hours here</div>
                  <div className="inline-flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-200" /> Address here</div>
                  <div className="inline-flex items-center gap-3"><Phone className="h-5 w-5 text-amber-200" /> Contact number here</div>
                </div>
              </div>

              <div className="flex flex-col gap-4 md:items-end">
                <Button size="lg" className="w-full rounded-full bg-amber-200 px-6 text-[#1a120f] hover:bg-amber-100 md:w-auto">
                  Book a Treatment
                </Button>
                <Button size="lg" variant="outline" className="w-full rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 md:w-auto">
                  View Full Spa Menu
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
