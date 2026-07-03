import Image from "next/image";

const taglineRows = [
  ["Say", "cheese", "·", "Fresh", "Fast", "Delivered!"],
  ["Fresh", "Fast", "Delivered!", "·", "Say", "cheese"],
  ["Say", "cheese", "·", "Fresh", "Fast", "Delivered!"],
];

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f1ea]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="-left-12 -top-8 absolute -rotate-6 select-none opacity-20">
          <div className="flex flex-col">
            {taglineRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="mb-[-1.5rem] flex flex-wrap items-center gap-3 font-[family-name:var(--font-bebas)] text-5xl uppercase leading-none sm:gap-5 sm:text-7xl lg:text-8xl"
              >
                {row.map((word, wordIndex) => (
                  <span
                    key={`${rowIndex}-${wordIndex}`}
                    className={
                      word === "·" || word === "Fresh" || word === "Delivered!"
                        ? "text-[#fd543f]"
                        : "text-zinc-500"
                    }
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto h-[420px] max-w-[1440px] sm:h-[500px] lg:h-[570px]">
        <div className="absolute left-1/2 top-[55%] h-[220px] w-[min(90%,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fd543f] lg:top-[50%] lg:h-[313px]" />
        <div className="absolute left-1/2 top-[52%] h-[210px] w-[min(92%,940px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-900 lg:top-[47%] lg:h-[312px]" />

        <div className="absolute inset-x-0 top-8 flex items-center justify-between px-6 sm:px-12 lg:px-[88px]">
          <p className="font-[family-name:var(--font-bebas)] text-5xl uppercase leading-none text-zinc-50 sm:text-7xl lg:text-[9.9rem]">
            Today&apos;s
          </p>
          <p className="hidden font-[family-name:var(--font-bebas)] text-5xl uppercase leading-none text-zinc-50 sm:block sm:text-7xl lg:text-[9.9rem]">
            offer!
          </p>
        </div>

        <div className="absolute left-1/2 top-[38%] h-[220px] w-[min(72%,520px)] -translate-x-1/2 sm:top-[42%] sm:h-[280px] lg:top-[40%] lg:h-[360px]">
          <Image
            src="/hero-main-dish.svg"
            alt="Today's featured main dish"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="absolute right-[8%] top-[8%] hidden size-24 rotate-[2deg] sm:block lg:right-[18%] lg:top-[5%] lg:size-[199px]">
          <Image
            src="/hero-dessert.svg"
            alt="Featured dessert"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="absolute right-[22%] top-[24%] hidden size-12 items-center justify-center rounded-full bg-[#fd543f] text-2xl font-bold text-white shadow-lg sm:flex lg:right-[30%] lg:top-[27%] lg:size-[69px] lg:text-4xl">
          +
        </div>

        <div className="absolute bottom-8 left-6 rounded-full bg-[#fd543f] px-5 py-3 shadow-[4px_4px_0_#f5f1ea] sm:left-12 lg:bottom-16 lg:left-[129px] lg:px-[22px] lg:py-[14px]">
          <span className="font-[family-name:var(--font-bebas)] text-2xl uppercase leading-none text-zinc-50 sm:text-3xl lg:text-[2.5rem]">
            Steak Society
          </span>
        </div>

        <p className="absolute bottom-8 right-6 font-[family-name:var(--font-bebas)] text-5xl uppercase leading-none text-zinc-50 sm:hidden">
          offer!
        </p>
      </div>
    </section>
  );
};
