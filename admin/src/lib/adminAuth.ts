import type { User } from "@supabase/supabase-js";

const parseAllowedEmails = () => {
  const raw = process.env.ADMIN_ALLOWED_EMAILS || "";
  return raw
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
};

export const isAdminUser = (user: User | null) => {
  if (!user) return false;

  const role = typeof user.app_metadata?.role === "string" ? user.app_metadata.role.toLowerCase() : null;
  const roles = Array.isArray(user.app_metadata?.roles)
    ? user.app_metadata.roles.map((value: unknown) => String(value).toLowerCase())
    : [];

  if (role === "admin" || roles.includes("admin")) {
    return true;
  }

  const allowedEmails = parseAllowedEmails();
  const userEmail = (user.email || "").toLowerCase();
  return allowedEmails.includes(userEmail);
};
