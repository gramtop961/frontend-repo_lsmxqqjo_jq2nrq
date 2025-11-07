import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.08),rgba(255,255,255,0))]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/70 px-3 py-1 text-emerald-700 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Audit-ready tax receipts
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Rescue surplus food with realtime coordination
            </h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              FoodShare connects donors, receivers, and couriers to reduce waste and feed communities. Built with modern tech for reliability and speed.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#roles" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-white font-semibold shadow-sm shadow-emerald-200 hover:opacity-[0.93]">
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-white px-5 py-3 text-emerald-800 font-semibold hover:bg-emerald-50">
                Learn more
                <Sparkles className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative h-[460px] rounded-2xl overflow-hidden border border-emerald-100 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.35)]">
            <Spline scene="https://prod.spline.design/Q3kXQqWZrZLQ4b9V/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
