"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          className={cn(
            "transition-colors duration-300",
            link.href === pathname
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground",
          )}
          key={link.href}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
