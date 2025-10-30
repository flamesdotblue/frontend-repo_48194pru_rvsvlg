import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-white/70">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-stone-600">
        <p>
          © {year} Smashed Burgers & Co. All rights reserved.
        </p>
        <p className="mt-2">
          Crafted with good vibes and great flavors.
        </p>
      </div>
    </footer>
  );
}
