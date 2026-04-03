export const navLinks = [
  { label: 'Works', href: '/works' },
  { label: 'List', href: '/impossible-list' },
  { label: 'About', href: '/about' },
  { label: 'Now', href: '/now' },
] as const;

export type NavLink = (typeof navLinks)[number];
