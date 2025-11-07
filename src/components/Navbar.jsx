import { useState } from 'react';
import { Menu, X, Leaf, User, LogIn } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-white">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-semibold text-gray-900">FoodShare</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#roles" className="hover:text-gray-900">Roles</a>
            <a href="#impact" className="hover:text-gray-900">Impact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <User className="h-4 w-4" />
              Sign up
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">
              <LogIn className="h-4 w-4" />
              Log in
            </button>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-2 text-gray-700">
              <a href="#features" className="py-2">Features</a>
              <a href="#roles" className="py-2">Roles</a>
              <a href="#impact" className="py-2">Impact</a>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <User className="h-4 w-4" />
                  Sign up
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">
                  <LogIn className="h-4 w-4" />
                  Log in
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
