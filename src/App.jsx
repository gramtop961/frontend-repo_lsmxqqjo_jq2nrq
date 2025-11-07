import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Roles from './components/Roles';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="impact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
              <div className="absolute right-0 top-0 z-0 h-40 w-40 rounded-full bg-emerald-100 blur-3xl opacity-40" />
              <div className="relative grid gap-8 lg:grid-cols-3">
                <div>
                  <h2 className="text-3xl font-bold">Impact you can measure</h2>
                  <p className="mt-2 text-gray-600">Track meals saved, weight rescued, and average pickup times across your network.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-3 lg:col-span-2">
                  <Stat label="Meals saved" value="12,480" />
                  <Stat label="Food rescued (kg)" value="7,320" />
                  <Stat label="Avg pickup time" value="22 min" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Roles />
        <CTA />
        <footer className="border-t border-emerald-100/60 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} FoodShare. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-emerald-100 p-6 text-center bg-white shadow-sm">
      <div className="text-2xl font-extrabold text-gray-900">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-emerald-700/80">{label}</div>
    </div>
  );
}

export default App;
