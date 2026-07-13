import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold">
      <span className="text-primary">Dev</span>
      <span className="text-slate-900">Launch</span>
    </Link>
  );
}