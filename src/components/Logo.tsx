import Image from "next/image";

/** White Fitness Space wordmark. Set the height via className (e.g. "h-5"); width follows. */
export default function Logo({ className = "h-4" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Fitness Space"
      width={1733}
      height={201}
      className={`w-auto ${className}`}
    />
  );
}
