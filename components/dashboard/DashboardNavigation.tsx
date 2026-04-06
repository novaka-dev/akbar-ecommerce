import Link from "next/link";
import { Button } from "../ui/button";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
  },
];

export function DashboardNavigation({ className }: { className?: string }) {
  return (
    <>
      {links.map((link) => (
        <Link className={className} key={link.href} href={link.href}>
          {link.name}
        </Link>
      ))}
    </>
  );
}
