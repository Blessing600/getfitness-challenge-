const TOTAL_DAYS = 30;
const CURRENT_DAY = 18;

function Term({ value, label, highlight = false }: { value: string; label: string; highlight?: boolean }) {
  return (
    <div className="text-center">
      <p
        className={`text-[84px] font-extrabold leading-none tracking-[-0.05em] lg:text-[119px] lg:tracking-[-0.075em] ${
          highlight ? "-mr-[0.1em] bg-gradient-to-r from-brand-pale to-brand-dark bg-clip-text pr-[0.1em] text-transparent" : ""
        }`}
      >
        {value}
      </p>
      <p className="mt-1 text-[16px] text-[#9a9a9a] lg:mt-0 lg:text-[18px]">{label}</p>
    </div>
  );
}

const Op = ({ children }: { children: string }) => (
  <span className="my-1 text-[34px] font-bold leading-none text-brand-light lg:my-0 lg:mt-[55px] lg:text-[56px]">
    {children}
  </span>
);

export default function Challenge() {
  return (
    <section className="px-6 pb-16 pt-14 text-center lg:px-0 lg:pb-[61px] lg:pt-[127px]">
      <div className="canvas-1280">
        <p className="text-[13px] font-semibold leading-4 tracking-[0.15em] text-brand-light lg:text-[14px]">
          THE CHALLENGE
        </p>
        <h2 className="mx-auto mt-3 max-w-[340px] text-[30px] font-extrabold leading-[1.2] tracking-[-0.02em] lg:mt-[21px] lg:max-w-none lg:text-[46px]">
          The whole challenge in one line.
        </h2>

        <div className="mt-8 flex flex-col items-center lg:mt-[57px] lg:flex-row lg:items-start lg:justify-center lg:gap-[40px]">
          <Term value="10,000" label="steps a day" />
          <Op>×</Op>
          <Term value="30" label="days" />
          <Op>=</Op>
          <Term value="300,000" label="steps to complete the challenge" highlight />
        </div>

        <ol className="mx-auto mt-8 grid w-full max-w-[352px] grid-cols-6 gap-2 lg:mt-[53px] lg:w-fit lg:max-w-none lg:grid-cols-[repeat(15,64px)] lg:gap-3">
          {Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1).map((day) => {
            const done = day < CURRENT_DAY;
            const today = day === CURRENT_DAY;
            return (
              <li
                key={day}
                aria-label={`Day ${day}${done ? ", completed" : today ? ", today" : ""}`}
                className={`grid aspect-square place-items-center rounded-xl text-[15px] font-bold lg:size-16 lg:rounded-[14px] lg:text-[16px] ${
                  done
                    ? "bg-gradient-to-br from-brand-light to-brand-dark text-[#1a0a00]"
                    : today
                      ? "border-[1.5px] border-brand-light bg-[#290f04] text-brand-light"
                      : "border border-[#222] bg-[#0f0f0f] text-[#5a5a5a]"
                }`}
              >
                {day}
              </li>
            );
          })}
        </ol>
        <p className="mx-auto mt-3 max-w-[352px] text-[16px] leading-6 text-[#9a9a9a] lg:max-w-[600px] lg:text-[17px] lg:leading-[21px]">
          Walk 10,000 steps a day and you reach 300,000 steps in 30 days. Fitness Space tracks both for you.
        </p>
      </div>
    </section>
  );
}
