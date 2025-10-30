import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="w-full bg-amber-50/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-amber-600" />
              <h3 className="text-xl font-semibold text-stone-900">Contact</h3>
            </div>
            <p className="mt-3 text-stone-600">Call us to place an order or for any inquiries.</p>
            <a
              href="tel:+919876543210"
              className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-stone-900 px-5 py-2.5 text-white shadow transition hover:bg-stone-800"
            >
              +91 98765 43210
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-200">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-amber-600" />
              <h3 className="text-xl font-semibold text-stone-900">Visit Us</h3>
            </div>
            <p className="mt-3 text-stone-600">
              We’re located in your neighborhood. Dine in, takeaway, or order online from our menu.
            </p>
            <div className="mt-4 text-stone-700">
              Smashed Burgers & Co.
              <br />
              Main Street, Your City
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
