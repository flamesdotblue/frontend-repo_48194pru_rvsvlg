import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-gradient-to-b from-amber-50 via-white to-amber-100">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-amber-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-200 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-900 ring-1 ring-amber-200">
          Freshly smashed • Made to order
        </span>
        <h1 className="mt-6 font-extrabold tracking-tight text-4xl sm:text-6xl text-stone-900">
          Smashed Burgers & Co.
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-stone-600">
          Juicy, crispy-edged smash burgers, melty cheese, and sides you’ll crave. Grab a bite or order ahead.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://menu.smashed.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-white shadow-lg shadow-stone-900/10 transition hover:scale-[1.02] hover:bg-stone-800"
          >
            View Menu
          </a>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-stone-900 ring-1 ring-stone-200 transition hover:bg-stone-50"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
