import { cn } from "@/lib/utils";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center px-5 py-4", className)} aria-label="Royal Solution — trang chủ">
      <BrandLogo height={32} />
    </Link>
  );
}
