import Logo from "./Logo";

const WEEK = [
  { day: "M", h: 62 },
  { day: "T", h: 78 },
  { day: "W", h: 58 },
  { day: "T", h: 74 },
  { day: "F", h: 82 },
  { day: "S", h: 76 },
  { day: "Today", h: 100 },
];

/** The Fitness Space app screen, drawn in code. Fixed 237px width; scale it from the parent. */
export default function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative h-full w-[237px] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(220deg,rgba(245,73,0,0.55)_0%,rgba(245,73,0,0.15)_25%,rgba(245,73,0,0)_42%),linear-gradient(180deg,#0d0d0d_0%,#0d0d0d_55%,#2e1506_100%)] px-[18px] py-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
        {/* faint 10K watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 top-[150px] select-none text-[130px] font-extrabold leading-none tracking-tighter text-white/[0.04]"
        >
          10K
        </span>

        <div className="relative flex items-center justify-between">
          <Logo className="h-[9px]" />
          <span className="rounded-full border border-brand/60 px-2 py-[3px] text-[6.5px] font-bold tracking-[0.12em] text-brand">
            10K STEPS CHALLENGE
          </span>
        </div>

        <div className="relative mt-3.5 flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full border-2 border-brand bg-gradient-to-br from-[#3a3a3a] to-[#1a1a1a] text-[12px] font-bold">
            U
          </span>
          <span className="leading-tight">
            <span className="block text-[13px] font-semibold">Uche</span>
            <span className="block text-[9px] text-muted">Day 18 of 30</span>
          </span>
        </div>

        <p className="relative mt-3 text-[8px] font-bold tracking-[0.15em] text-brand">STEPS TODAY</p>
        <p className="relative text-[38px] font-extrabold leading-[1.1] tracking-tight">10,482</p>
        <p className="relative text-[10px] text-muted">of 10,000 daily goal</p>

        <div className="relative mt-3 rounded-2xl bg-white/[0.05] px-3 pb-2 pt-2.5">
          <div className="flex justify-between text-[8px] text-muted">
            <span className="text-white/80">Last 7 days</span>
            <span>Daily steps</span>
          </div>
          <div className="relative mt-2.5 flex h-[54px] items-end gap-[7px]">
            <div className="absolute inset-x-0 top-[6px] border-t border-dashed border-brand/70" />
            {WEEK.map(({ h }, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-[3px] ${
                  i === WEEK.length - 1
                    ? "bg-gradient-to-t from-brand-dark to-brand-light"
                    : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <div className="mt-1.5 flex gap-[7px] text-center text-[6.5px] text-muted">
            {WEEK.map(({ day }, i) => (
              <span key={i} className={`flex-1 ${i === WEEK.length - 1 ? "font-semibold text-brand" : ""}`}>
                {day}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-3 flex items-baseline justify-between">
          <span>
            <b className="text-[15px] font-bold">186,450</b>{" "}
            <span className="text-[8px] text-muted">/ 300,000 steps</span>
          </span>
          <span className="text-[8px] font-semibold text-brand">62%</span>
        </div>
        <div className="relative mt-1.5 h-[5px] rounded-full bg-white/10">
          <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-brand-light to-brand-dark" />
        </div>

        <div className="relative mt-3 rounded-xl bg-gradient-to-r from-brand-light to-brand-dark px-3 py-2.5 text-center">
          <p className="text-[10.5px] font-bold leading-snug">
            Join the 10K Steps Challenge
            <br />
            on Fitness Space
          </p>
          <p className="mt-0.5 text-[7px] text-white/75">getfitness.space/challenge</p>
        </div>
      </div>
    </div>
  );
}
