export type NavChildItem = {
  href: string;
  label: string;
  description?: string;
};

export type NavItem = {
  href?: string;
  label: string;
  children?: NavChildItem[];
};

export const productNavItems: NavChildItem[] = [
  {
    href: "/monetize-remote-access",
    label: "Monetize Remote Access",
    description: "Turn remote connectivity into a managed recurring service.",
  },
];

export const primaryNavItems: NavItem[] = [
  {
    label: "Product",
    children: productNavItems,
  },
  {
    href: "/#how-it-works",
    label: "How it Works",
  },
  {
    href: "/#pricing",
    label: "Pricing",
  },
  {
    href: "/#solutions",
    label: "Solutions",
  },
];
