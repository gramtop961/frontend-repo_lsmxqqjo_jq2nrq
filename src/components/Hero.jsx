import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 mb-4">
              <ShieldCheck className="h-4 w-4" />
              Audit-ready tax receipts
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Share surplus food. Support communities. Reduce waste.
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              FoodShare matches donors, receivers, and couriers in real-time to rescue edible food and deliver it where it’s needed most.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#roles" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700">
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-gray-800 font-semibold hover:bg-gray-50">
                Learn more
              </a>
            </div>
          </div>
          <div className="relative h-[420px] rounded-xl overflow-hidden border border-gray-200">
            <Spline scene="https://prod.spline.design/Q3kXQqWZrZLQ4b9V/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
