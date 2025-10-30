import React from 'react';
import { Clock } from 'lucide-react';

const hours = [
  { day: 'Monday', time: '11:00 AM – 11:00 PM' },
  { day: 'Tuesday', time: '11:00 AM – 11:00 PM' },
  { day: 'Wednesday', time: '11:00 AM – 11:00 PM' },
  { day: 'Thursday', time: '11:00 AM – 11:00 PM' },
  { day: 'Friday', time: '11:00 AM – 12:00 AM' },
  { day: 'Saturday', time: '11:00 AM – 12:00 AM' },
  { day: 'Sunday', time: '11:00 AM – 11:00 PM' },
];

export default function Hours() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 flex items-center gap-3">
          <Clock className="h-6 w-6 text-amber-600" />
          <h2 className="text-2xl font-bold text-stone-900">Working Hours</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hours.map((h) => (
            <div
              key={h.day}
              className="flex items-center justify-between rounded-xl border border-stone-200 bg-amber-50/40 px-4 py-3"
            >
              <span className="font-medium text-stone-800">{h.day}</span>
              <span className="text-stone-600">{h.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
