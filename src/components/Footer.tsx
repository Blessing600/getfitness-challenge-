import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[#141414]">
      <div className="mx-auto flex max-w-[1344px] flex-col gap-2 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:py-[30px]">
        <Logo className="h-4 self-start sm:self-center" />
        <p className="text-[13px] text-muted lg:text-[15px]">© 2026 Fitness Space · getfitness.space</p>
      </div>
    </footer>
  );
}
