const ITEMS = ["10,000 STEPS A DAY", "300,000 STEPS IN 30 DAYS", "SHARE YOUR PROGRESS"];

export default function Ticker() {
  // Content is duplicated so the -50% translate loops seamlessly.
  const row = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="relative z-10 overflow-hidden py-6">
      <div className="-mx-8 rotate-[2.3deg] bg-gradient-to-r from-brand-light to-brand py-3 text-[#1a0a00] lg:py-4 xl:py-5 hd:py-[22px]">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {row.map((item, i) => (
                <span
                  key={i}
                  className="flex items-center whitespace-nowrap text-[17px] font-extrabold leading-none tracking-[0.02em] lg:text-[23px] lg:tracking-[0.03em] xl:text-[28px] hd:text-[30px]"
                >
                  <span className="px-5 lg:px-7 xl:px-[35px] hd:px-[37px]">{item}</span>
                  <span className="text-[0.75em]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
