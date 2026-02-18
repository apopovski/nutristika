"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  title: string;
  description: string;
  icon: string;
};

const navItems: NavItem[] = [
  {
    href: "/admin/dashboard",
    title: "Dashboard",
    description: "Overview",
    icon: "📊"
  },
  {
    href: "/admin/homepage-editor",
    title: "Edit Homepage",
    description: "Update main content",
    icon: "✍️"
  }
];

export function AdminSidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2" aria-label="Admin navigation">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-2xl border px-3 py-3 transition ${
              isActive
                ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                : "border-slate-200 bg-white/90 text-slate-800 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <p className="flex items-center gap-2 text-sm font-semibold leading-tight">
              <span
                aria-hidden="true"
                className={`inline-flex h-6 w-6 items-center justify-center rounded-lg text-xs ${
                  isActive ? "bg-white/15" : "bg-slate-100"
                }`}
              >
                {item.icon}
              </span>
              <span>{item.title}</span>
            </p>
            <p className={`mt-1 text-xs ${isActive ? "text-slate-200" : "text-slate-500"}`}>
              {item.description}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}
