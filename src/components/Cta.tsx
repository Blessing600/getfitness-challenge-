import PhoneMockup from "./PhoneMockup";
import StoreButtons from "./StoreButtons";

export default function Cta() {
  return (
    <section id="download" className="px-6 pb-14 pt-6 sm:px-8 lg:px-0 lg:pb-[101px] lg:pt-[61px]">
      <div className="canvas-1280">
        <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-brand-light to-brand-dark px-[26px] pt-[34px] sm:rounded-[28px] sm:px-6 sm:pt-10 lg:h-[539px] lg:rounded-[36px] lg:px-[72px] lg:pt-[99px]">
          <span
            aria-hidden
            className="pointer-events-none absolute hidden lg:block -bottom-6 -right-4 select-none text-[220px] font-extrabold leading-none tracking-[-0.04em] text-white/[0.08] lg:bottom-auto lg:left-[465px] lg:right-auto lg:top-[107px] lg:text-[440px]"
          >
            10K
          </span>

          <div className="relative lg:max-w-[600px]">
            <h2 className="text-[35.5px] font-extrabold leading-[1.03] sm:text-[40px] sm:leading-[1.02] tracking-[-0.035em] text-[#111] lg:text-[61px] lg:leading-[65px]">
              Your first 10,000 steps start today.
            </h2>
            <p className="mt-4 max-w-[440px] text-[14.5px] leading-[21px] sm:text-[16px] sm:leading-6 text-black/75 lg:mt-[23px] lg:text-[19px] lg:leading-[30px]">
              Download Fitness Space and join the 10K Steps Challenge in the app.
            </p>
            <StoreButtons large className="mt-5 flex-col items-start !gap-2.5 sm:mt-6 sm:flex-row sm:!gap-3 lg:!gap-4 lg:mt-[23px]" />
          </div>

          <div className="relative left-1/2 -mb-[64px] ml-[18px] mt-[88px] h-[540px] w-[438px] max-w-none -translate-x-1/2 [zoom:0.66] sm:mb-0 sm:ml-0 sm:mt-2 sm:[zoom:1] lg:absolute lg:left-[760px] lg:top-0 lg:m-0 lg:translate-x-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/cta-hand.png" alt="" className="absolute inset-0 size-full" />
            <div className="absolute left-[130px] top-[90px] h-[372px] w-[178px] overflow-hidden rounded-[24px]">
              <PhoneMockup className="h-[495px] [zoom:0.751]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
