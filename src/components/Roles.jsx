import { Building2, HandHeart, Bike, Shield } from 'lucide-react';

export default function Roles() {
  const roles = [
    { key: 'donor', title: 'Donors', desc: 'List surplus food with pickup windows and safety checks.', icon: Building2, color: 'from-emerald-500 to-teal-600' },
    { key: 'receiver', title: 'Receivers', desc: 'Browse and claim donations. Upload docs for verification.', icon: HandHeart, color: 'from-sky-500 to-blue-600' },
    { key: 'courier', title: 'Couriers', desc: 'Batch pickups, live ETAs, proof photos & signatures.', icon: Bike, color: 'from-amber-500 to-orange-600' },
    { key: 'admin', title: 'Admins', desc: 'Manage users, approvals, and metrics dashboard.', icon: Shield, color: 'from-purple-500 to-indigo-600' },
  ];

  return (
    <section id="roles" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">Built for every role</h2>
          <p className="mt-2 text-gray-600">Tailored dashboards ensure each participant has what they need.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map(({ key, title, desc, icon: Icon, color }) => (
            <div key={key} className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${color} blur-xl opacity-20 group-hover:opacity-40`} />
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br ${color} text-white shadow-sm`}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:underline">Explore</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
