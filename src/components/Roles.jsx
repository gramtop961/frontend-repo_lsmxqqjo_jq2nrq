import { Building2, HandHeart, Bike, Shield } from 'lucide-react';

export default function Roles() {
  const roles = [
    {
      key: 'donor',
      title: 'Donors',
      desc: 'Restaurants, grocers, and households list surplus food with pickup windows and safety checks.',
      icon: Building2,
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      key: 'receiver',
      title: 'Receivers',
      desc: 'NGOs and shelters browse, claim, and schedule pickups. Upload documents for quick verification.',
      icon: HandHeart,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      key: 'courier',
      title: 'Couriers',
      desc: 'Plan efficient batch pickups, update ETAs, and capture proof with photos and signatures.',
      icon: Bike,
      color: 'bg-amber-100 text-amber-800'
    },
    {
      key: 'admin',
      title: 'Admins',
      desc: 'Manage users, verification queue, and metrics like meals saved and pickup time.',
      icon: Shield,
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <section id="roles" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">Built for every role</h2>
          <p className="mt-2 text-gray-600">Tailored dashboards ensure each participant has what they need.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map(({ key, title, desc, icon: Icon, color }) => (
            <div key={key} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${color}`}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:underline">View dashboard</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
