import { useState } from 'react';
import { Menu, X, Leaf, User, LogIn } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm shadow-emerald-200">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-lg font-semibold text-transparent group-hover:opacity-90">
              FoodShare
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="relative hover:text-gray-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full">Features</a>
            <a href="#roles" className="relative hover:text-gray-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full">Roles</a>
            <a href="#impact" className="relative hover:text-gray-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full">Impact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md border border-emerald-200/80 bg-white px-3 py-2 text-sm font-medium text-emerald-800 shadow-sm hover:bg-emerald-50">
              <User className="h-4 w-4" />
              Sign up
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-2 text-sm font-medium text-white shadow-sm shadow-emerald-200 hover:opacity-[0.93]">
              <LogIn className="h-4 w-4" />
              Log in
            </button>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-emerald-200 text-emerald-700 bg-white/70"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-2 text-emerald-900">
              <a href="#features" className="py-2">Features</a>
              <a href="#roles" className="py-2">Roles</a>
              <a href="#impact" className="py-2">Impact</a>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-200 bg-white px-3 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-50">
                  <User className="h-4 w-4" />
                  Sign up
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:opacity-[0.93]">
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
