// app/page.tsx (or wherever your root landing is)
"use client";

import Link from "next/link";

const components = [
  {
    name: "Clerk Card",
    href: "/playground/clerk-card",
    description: "A styled card component with Clerk authentication.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 text-neutral-800">
      <h1 className="text-3xl font-bold mb-6">Component Playground</h1>
      <p className="mb-8 text-neutral-600">
        Explore reusable UI components below:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((component) => (
          <Link
            key={component.href}
            href={component.href}
            className="block p-4 rounded-xl bg-white transition border hover:border-neutral-400 border-neutral-200"
          >
            <h2 className="text-lg font-semibold">{component.name}</h2>
            <p className="text-sm text-neutral-500">{component.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
