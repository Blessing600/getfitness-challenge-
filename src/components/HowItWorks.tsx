import Footsteps from "./Footsteps";
import PhoneMockup from "./PhoneMockup";

/* All visuals below are positioned in the design's px, inside the 410×437 desktop card. */

function Gauge() {
  // 270° arc starting bottom-left; 82.4% filled (8,240 of 10,000)
  const r = 89;
  const arc = 2 * Math.PI * r * 0.75;
  return (
    <div className="absolute left-[110px] top-[211px] size-[200px]">
      <svg viewBox="0 0 200 200" className="size-full rotate-[135deg]">
        <defs>
          <linearGradient id="gauge" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="var(--color-brand-pale)" />
            <stop offset="1" stopColor="var(--color-brand-dark)" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r={r} fill="none" stroke="#262626" strokeWidth="22" strokeDasharray={`${arc} 999`} />
        <circle cx="100" cy="100" r={r} fill="none" stroke="url(#gauge)" strokeWidth="22" strokeDasharray={`${arc * 0.824} 999`} />
      </svg>
      <Footsteps className="absolute left-1/2 top-[49px] size-[22px] -translate-x-1/2 text-brand-light" />
      <span className="absolute inset-x-0 top-[75px] text-center text-[36px] font-bold leading-[42px]">8,240</span>
      <span className="absolute inset-x-0 top-[116px] text-center text-[15px] leading-[18px] text-[#9a9a9a]">of 10,000</span>
    </div>
  );
}

const BARS = [81, 99, 122, 98, 109, 108, 104];

function Chart() {
  return (
    <>
      <div className="absolute left-[38px] top-[208px] flex h-[122px] items-end gap-[18px]">
        <div className="absolute left-[-5px] top-[22px] w-[330px] border-t border-dashed border-white/60" />
        {BARS.map((h, i) => (
          <div
            key={i}
            style={{ height: h }}
            className={`w-[30px] rounded-t-[4px] ${
              i === BARS.length - 1 ? "bg-gradient-to-b from-brand-pale to-brand-dark" : "bg-[#323232]"
            }`}
          />
        ))}
      </div>
      <div className="absolute left-[38px] right-[32px] top-[357px] h-[9px] rounded-full bg-[#292929]">
        <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-brand-light to-brand-dark" />
      </div>
      <p className="absolute left-[38px] top-[376px] text-[15px] font-semibold leading-[18px] text-white/90">
        186,450 / 300,000
      </p>
    </>
  );
}

const SOCIALS = [
  {
    name: "WhatsApp",
    bg: "bg-[#25d366]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden>
        <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z" />
        <path d="M9.2 8.3c-.3 0-.7.2-.8.6-.3.8-.2 1.9.7 3.2 1 1.4 2.3 2.4 3.6 2.8.9.3 1.7.2 2.2-.4.3-.3.3-.8 0-1l-1.2-.7c-.3-.2-.6-.1-.8.1l-.4.5c-.9-.4-1.7-1.2-2.1-2.1l.5-.4c.2-.2.3-.5.1-.8l-.7-1.3c-.1-.3-.4-.5-.7-.5Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    bg: "bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="16.9" cy="7.1" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    bg: "bg-[#1877f2]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden>
        <path d="M13.5 21v-7.2h2.4l.4-2.9h-2.8V9.1c0-.8.3-1.4 1.4-1.4h1.5V5.1c-.3 0-1.2-.1-2.2-.1-2.1 0-3.6 1.3-3.6 3.7v2.2H8.2v2.9h2.4V21h2.9Z" />
      </svg>
    ),
  },
];

function Share() {
  return (
    <>
      <PhoneMockup className="absolute left-[50px] top-[218px] origin-top-left rotate-[5deg] scale-[0.72]" />
      <ul className="absolute left-[272px] top-[247px] flex flex-col gap-3">
        {SOCIALS.map((s) => (
          <li
            key={s.name}
            aria-label={s.name}
            className={`grid size-[52px] place-items-center rounded-full text-white shadow-[0_8px_20px_rgba(0,0,0,0.45)] ${s.bg}`}
          >
            {s.icon}
          </li>
        ))}
      </ul>
    </>
  );
}

const icon = "size-6 fill-none stroke-current stroke-2";
const STEPS = [
  {
    title: "Walk",
    text: "Aim for 10,000 steps every day. Fitness Space counts them automatically.",
    visual: <Gauge />,
    icon: <Footsteps className="size-6" />,
  },
  {
    title: "Track",
    text: "Follow your daily steps, your progress graph and your total toward 300,000.",
    visual: <Chart />,
    icon: (
      <svg viewBox="0 0 24 24" className={icon} strokeLinecap="round" aria-hidden>
        <path d="M5 20V12M10 20V6M15 20v-9M20 20V9" />
      </svg>
    ),
  },
  {
    title: "Share",
    text: "Turn your progress into a personalised achievement card for WhatsApp, Instagram and Facebook.",
    visual: <Share />,
    icon: (
      <svg viewBox="0 0 24 24" className={icon} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3v12M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-12 lg:px-0 lg:pb-[60px] lg:pt-[61px]">
      <div className="canvas-1280">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[13px] font-semibold leading-4 tracking-[0.15em] text-brand-light lg:text-[14px]">
              HOW IT WORKS
            </p>
            <h2 className="mt-3 text-[34px] font-extrabold leading-[1.15] tracking-[-0.03em] lg:mt-[13px] lg:text-[50px] lg:leading-[66px] lg:tracking-[-0.04em]">
              Walk. Track. Share.
            </h2>
          </div>
          <p className="mb-[3px] hidden text-[17px] leading-6 text-[#9a9a9a] lg:block">
            Everything happens in the Fitness Space app.
          </p>
        </div>

        <ol className="mt-6 grid gap-4 lg:mt-[43px] lg:grid-cols-3 lg:gap-[25px]">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative flex gap-4 overflow-hidden rounded-[22px] border border-line bg-card p-5 lg:block lg:h-[437px] lg:rounded-[28px] lg:px-[33px] lg:pb-0 lg:pt-[35px]"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-gradient-to-br from-brand-light to-brand-dark text-white lg:hidden">
                {step.icon}
              </span>
              <div>
                <p className="text-[19px] font-semibold leading-6 lg:hidden">
                  0{i + 1} · {step.title}
                </p>
                <p className="hidden text-[16px] font-bold leading-none text-brand lg:block">0{i + 1}</p>
                <h3 className="mt-[15px] hidden text-[28px] font-semibold leading-[36px] lg:block">{step.title}</h3>
                <p className="mt-1.5 text-[15px] leading-[22px] text-[#9a9a9a] lg:mt-[14px] lg:max-w-[335px] lg:text-[16px] lg:leading-[26px]">
                  {step.text}
                </p>
              </div>
              <div className="hidden lg:block">{step.visual}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
