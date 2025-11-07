import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_0%_100%,rgba(16,185,129,0.08),rgba(255,255,255,0))]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50 p-1">
          <div className="grid items-center gap-8 rounded-[calc(theme(borderRadius.3xl)-4px)] bg-white/70 p-8 backdrop-blur sm:p-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Ready to start rescuing food?</h3>
              <p className="mt-2 text-gray-600">Join FoodShare today and turn surplus into meals. It takes less than 2 minutes.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-white font-semibold shadow-sm hover:opacity-[0.93]">
                  Create account
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-white px-5 py-3 text-emerald-800 font-semibold hover:bg-emerald-50">
                  <Phone className="h-4 w-4" />
                  Contact sales
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <StatCard label="Donors" value="3.2k" />
              <StatCard label="Receivers" value="1.8k" />
              <StatCard label="Couriers" value="980" />
              <StatCard label="Meals saved" value="124k" />
              <StatCard label="Food rescued (kg)" value="73k" />
              <StatCard label="Avg pickup time" value="22m" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-white p-4 text-center shadow-sm">
      <div className="text-xl font-extrabold text-gray-900">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-emerald-700/80">{label}</div>
    </div>
  );
}
