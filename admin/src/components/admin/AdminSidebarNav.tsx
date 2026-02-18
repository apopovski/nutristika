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
            className={`block rounded-xl border px-3 py-3 transition ${
              isActive
                ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                : "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            <p className="flex items-center gap-2 text-sm font-semibold leading-tight">
              <span aria-hidden="true">{item.icon}</span>
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
