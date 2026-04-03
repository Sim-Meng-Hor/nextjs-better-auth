import Link from "next/link";
import Navbar from "@/components/header/navbar";

const categories = [
  "Concerts",
  "Shows",
  "Sports",
  "Festivals",
] as const;

const features = [
  "Book Anytime",
  "Refundable Tickets",
  "Smart Deals",
] as const;

export default function Home() {
  return (
    <main className=" min-h-screen overflow-hidden bg-[#0d0d10] text-white ">
      <div className="relative isolate min-h-screen">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.34),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_20%),linear-gradient(180deg,#17111f_0%,#100f13_24%,#0d0d10_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.5)_30%,rgba(0,0,0,0.72))]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[42%] bg-[radial-gradient(circle_at_10%_100%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_20%_100%,rgba(255,255,255,0.08),transparent_14%),radial-gradient(circle_at_32%_100%,rgba(255,255,255,0.08),transparent_16%),radial-gradient(circle_at_45%_100%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_60%_100%,rgba(255,255,255,0.08),transparent_16%),radial-gradient(circle_at_74%_100%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_88%_100%,rgba(255,255,255,0.08),transparent_16%)] opacity-40 blur-xl"
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <Navbar/>
          <section className="flex flex-1 flex-col items-center justify-center pt-16 text-center sm:pt-20">
            <div className="max-w-4xl">
              <h1 className="text-balance text-4xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">
                What <span className="text-fuchsia-400">Concert</span> would
                <br className="hidden sm:block" /> you like to go to?
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-sm text-white/70 sm:text-base">
                More than 100 concerts in different countries are now available
                to you.
              </p>
            </div>

            <div className="mt-12 w-full max-w-5xl rounded-[22px] border border-white/8 bg-[#1b1b1d]/95 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="grid grid-cols-2 gap-2 border-b border-white/8 p-4 sm:grid-cols-4 sm:gap-0 sm:p-5">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-left text-sm text-white/80 transition hover:bg-white/5 hover:text-white sm:justify-start"
                  >
                    <span className="size-2 rounded-full bg-white/55" />
                    {item}
                  </button>
                ))}
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:items-center sm:p-6">
                <div className="rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3 text-left">
                  <div className="text-sm text-white">what</div>
                  <div className="text-xs text-white/35">Event Type</div>
                </div>
                <div className="rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3 text-left">
                  <div className="text-sm text-white">where</div>
                  <div className="text-xs text-white/35">Location</div>
                </div>
                <div className="rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3 text-left">
                  <div className="text-sm text-white">when</div>
                  <div className="text-xs text-white/35">Date</div>
                </div>
                <button
                  type="button"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500 text-white transition hover:bg-fuchsia-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="6" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-white/45 sm:text-sm">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="size-3 rounded-sm border border-white/25" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
