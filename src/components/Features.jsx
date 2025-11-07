import { Recycle, LocateFixed, BellRing, ShieldCheck, PhoneCall, FileText, ArrowRight, Users } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Recycle,
      title: 'Smart Listings',
      desc: 'Create listings with photos, pickup windows, and hygiene checklist. Auto-expire when time passes.'
    },
    {
      icon: LocateFixed,
      title: 'Geo Matching',
      desc: 'Find nearby donations using precise GeoJSON coordinates and radius search.'
    },
    {
      icon: BellRing,
      title: 'Realtime Updates',
      desc: 'Firebase-powered events for claims, pickups, and delivery milestones.'
    },
    {
      icon: PhoneCall,
      title: 'Phone OTP',
      desc: 'Secure sign-in with email or phone-based OTP, powered by Firebase Auth.'
    },
    {
      icon: FileText,
      title: 'Tax Receipts',
      desc: 'Generate audit-ready PDF receipts with donation metadata and digital signatures.'
    },
    {
      icon: Users,
      title: 'Role-based Access',
      desc: 'Donor, Receiver, Courier, and Admin experiences with granular permissions.'
    },
    {
      icon: ShieldCheck,
      title: 'Safety & Compliance',
      desc: 'Document verification for NGOs and food safety checklists built-in.'
    },
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">What you can do with FoodShare</h2>
          <p className="mt-2 text-gray-600">Everything you need to coordinate food rescue from pickup to delivery.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-emerald-700 font-medium">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
