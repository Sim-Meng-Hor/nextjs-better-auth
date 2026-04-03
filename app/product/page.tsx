import Link from "next/link";

const navItems = ["Home", "Shows", "Concerts", "Sports", "Festivals"] as const;

const steps = [
  { label: "Tickets", active: true },
  { label: "Payment", active: false },
  { label: "Review", active: false },
] as const;

const countdown = ["0", "9", "4", "3"] as const;

const protections = [
  {
    title: "FanProtect : every order is 100% guaranteed",
    description: "",
  },
  {
    title: "Easy Refund",
    description: "Change of plans? Get your money back up to 24 hours before the event.",
  },
] as const;

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#151515] px-4 py-6 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-3xl font-black italic tracking-tight text-fuchsia-400"
          >
            Event Booking
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {navItems.map((item, index) => (
              <Link
                key={item}
                href="#"
                className={index === 0 ? "text-white" : "transition hover:text-white"}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-sm text-white/80">
            <button type="button" className="hidden items-center gap-2 sm:inline-flex">
              <span>🇺🇸</span>
              <span>Eng</span>
            </button>
            <div className="flex size-9 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#ff80d5,#7c3aed_70%,#312e81)] text-xs font-semibold">
              M
            </div>
          </div>
        </header>

        <section className="mt-10">
          <div className="mx-auto max-w-3xl border-t border-white/8 pt-7">
            <div className="flex items-center justify-center gap-3 text-sm">
              {steps.map((step, index) => (
                <div key={step.label} className="flex items-center gap-3">
                  <div
                    className={[
                      "rounded-full border px-3 py-1.5 text-xs font-medium",
                      step.active
                        ? "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300"
                        : "border-transparent text-white/55",
                    ].join(" ")}
                  >
                    {step.label}
                  </div>
                  {index < steps.length - 1 && (
                    <span className="text-white/35">›</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-10 lg:grid-cols-[390px_1fr]">
          <article className="overflow-hidden rounded-[18px] border border-white/10 bg-[#222223]">
            <div className="h-107.5 bg-[radial-gradient(circle_at_50%_10%,rgba(255,219,186,0.35),transparent_18%),linear-gradient(135deg,#2d302e,#121317)]">
              <div className="flex h-full items-end justify-center bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.06),transparent_28%)] p-5">
                <div className="flex h-full w-full items-end rounded-[14px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.08))] p-6">
                  <div className="max-w-55">
                    <div className="mb-2 text-4xl font-semibold leading-none text-[#f1cfb7]">
                      Adel
                    </div>
                    <div className="space-y-1 text-sm text-white/70">
                      <p>Tue 30 Sep • 7:30 PM</p>
                      <p>Fontainebleau</p>
                      <p>Las Vegas, Nevada, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 px-5 py-5">
              <div>
                <h2 className="text-2xl font-medium text-white">Adel</h2>
                <div className="mt-1 space-y-1 text-sm text-white/55">
                  <p>Tue 30 Sep • 7:30 PM</p>
                  <p>Fontainebleau</p>
                  <p>Las Vegas, Nevada, USA</p>
                </div>
              </div>

              <div className="h-px bg-white/8" />

              <div>
                <p className="text-sm font-medium text-white">
                  Section Vip • Row 7 • Seats 07-08
                </p>
                <p className="mt-2 text-xs text-emerald-400">
                  2 tickets • Seated together
                </p>
              </div>
            </div>
          </article>

          <div className="max-w-xl">
            <div className="flex items-start gap-4">
              <div className="flex gap-1.5">
                {countdown.map((item) => (
                  <div
                    key={item}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-white/7 text-sm font-semibold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="pt-1">
                <p className="text-sm text-white/70">
                  left to complete receive ticket
                </p>
                <p className="mt-1 text-xs text-white/35">
                  Your price is only guaranteed for this time!
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-white/75">
              Make sure the number of tickets is correct before proceeding.
            </p>

            <div className="mt-8">
              <label className="mb-3 block text-sm text-white/70">
                Ticket quantity
              </label>
              <div className="flex h-11 w-16 items-center justify-center rounded-md border border-white/10 bg-white/3 text-sm text-white/80">
                2
                <span className="ml-2 text-[10px] text-white/45">▼</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 flex h-12 w-full items-center justify-center rounded-md bg-linear-to-r from-fuchsia-500 to-violet-500 text-sm font-medium text-white transition hover:brightness-110"
            >
              Confirm
            </button>

            <div className="mt-6 rounded-xl border border-white/8 bg-white/2 p-5">
              <div className="space-y-5">
                {protections.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-white/15 text-[10px] text-white/70">
                      {item.title.startsWith("FanProtect") ? "♡" : "↺"}
                    </div>
                    <div>
                      <p className="text-sm text-white/85">{item.title}</p>
                      {item.description && (
                        <p className="mt-1 max-w-sm text-xs leading-5 text-white/35">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
