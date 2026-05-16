"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Bot,
  Check,
  Command,
  Disc3,
  ExternalLink,
  Gamepad2,
  Gem,
  Heart,
  LogIn,
  Menu,
  Moon,
  Search,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  advantages,
  allCommands,
  commandSystems,
  communityCards,
  dashboardStats,
  documentationSteps,
  faq,
  inviteUrl,
  navLinks,
  offerPerks,
  socialLinks,
  stats,
  supportUrl,
  terminalLines,
  testimonials,
  totalRealCommands,
} from "./data";

const reveal = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "mx-0 text-left")}
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-prime-blue/25 bg-prime-blue/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-prime-blue">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">{text}</p>
    </motion.div>
  );
}

function GlowField() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 25 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden opacity-70 lg:block"
      style={{
        background: useTransform(
          [smoothX, smoothY],
          ([x, y]) => `radial-gradient(520px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.11), transparent 45%)`,
        ),
      }}
    />
  );
}

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 19) % 88}%`,
        delay: index * 0.16,
        size: 3 + (index % 5),
      })),
    [],
  );

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="grid-fade absolute inset-0 opacity-45" />
      <div className="absolute left-1/2 top-0 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-prime-purple/20 blur-[130px]" />
      <div className="absolute right-[-160px] top-32 h-[430px] w-[430px] rounded-full bg-prime-blue/16 blur-[110px]" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-prime-blue shadow-blueGlow"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ y: [-8, 18, -8], opacity: [0.2, 0.9, 0.2], scale: [1, 1.7, 1] }}
          transition={{ duration: 4 + (particle.id % 5), delay: particle.delay, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition duration-300",
        scrolled ? "border-b border-white/10 bg-[#0b0b0f]/78 shadow-2xl backdrop-blur-2xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="CUTIE Prime home">
          <span className="relative h-10 w-10 overflow-hidden rounded-2xl bg-gradient-to-br from-prime-purple to-prime-blue shadow-glow transition group-hover:scale-105">
            <img src="/logo.png" alt="CUTIE Prime Logo" className="h-full w-full object-cover" />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-black tracking-wide text-white">CUTIE &lt;3</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-prime-blue">Prime</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                pathname === link.href ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/10 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="icon" aria-label="Dark mode active">
            <Moon className="h-5 w-5" />
          </Button>
          <a href={supportUrl}>
            <Button variant="outline">Support</Button>
          </a>
          <a href={inviteUrl}>
            <Button variant="glow">
              Add Bot <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-5 mb-4 rounded-3xl border border-white/10 bg-[#11121a]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
        >
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-300 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              <a href={inviteUrl}>
                <Button variant="glow" className="w-full">
                  Add To Discord
                </Button>
              </a>
              <a href={supportUrl}>
                <Button variant="outline" className="w-full">
                  Join Support
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function MiniDashboard() {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="relative mx-auto max-w-xl lg:max-w-none"
    >
      <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-r from-prime-purple/40 via-prime-blue/20 to-fuchsia-400/30 blur-2xl" />
      <div className="glass relative overflow-hidden rounded-[2rem] p-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#5865F2]">
              <Disc3 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Prime Control</p>
              <p className="text-xs text-zinc-500">Live Discord Systems</p>
            </div>
          </div>
          <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
            Online
          </div>
        </div>

        <div className="grid gap-4 pt-4 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            {["Security", "Automod", "Tickets", "Voice"].map((item, index) => (
              <div
                key={item}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border border-white/10 px-3 py-3 text-sm font-semibold",
                  index === 0 ? "bg-prime-purple/25 text-white" : "bg-white/[0.035] text-zinc-400",
                )}
              >
                <span className="h-2 w-2 rounded-full bg-prime-blue" />
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/30 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Command Ops</p>
                <p className="text-xl font-black text-white">/antinuke enable</p>
              </div>
              <Gamepad2 className="h-6 w-6 text-prime-blue" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["11", `${totalRealCommands}`, "24/7"].map((value, index) => (
                <div key={value} className="rounded-2xl bg-white/[0.06] p-3 text-center">
                  <p className="text-lg font-black text-white">{value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">
                    {["Systems", "Real Cmds", "Uptime"][index]}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2 rounded-2xl bg-gradient-to-br from-prime-purple/25 to-prime-blue/10 p-3">
              {["/ticket setup", "/gstart nitro", "/vcmuteall lobby"].map((line) => (
                <div key={line} className="rounded-xl border border-white/10 bg-black/25 px-3 py-2 font-mono text-xs text-prime-blue">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-hidden bg-background text-white">
      <GlowField />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-32 lg:px-8">
      <Particles />
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-prime-blue/25 bg-prime-blue/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-prime-blue">
          <Sparkles className="h-4 w-4" />
          {eyebrow}
        </div>
        <h1 className="mx-auto max-w-5xl text-balance text-4xl font-black leading-tight tracking-[-0.03em] text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{text}</p>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-24 lg:px-8">
      <Particles />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 pb-20 pt-8 lg:grid-cols-[1.04fr_0.96fr] lg:pt-10">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="text-center lg:text-left"
        >
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-prime-blue/25 bg-prime-blue/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-prime-blue">
            <Bot className="h-4 w-4" />
            <span className="truncate">Core Discord Management</span>
          </div>
          <h1 className="text-balance text-4xl font-black leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-6xl xl:text-7xl">
            Complete Discord Management For Esports & Communities
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl lg:mx-0">
            Moderation, security, scrims, giveaways, tickets, music, automation, and premium utilities — all inside one powerful Discord bot.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a href={inviteUrl}>
              <Button variant="glow" size="lg" className="w-full sm:w-auto">
                Add To Discord <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href={supportUrl}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Join Support Server <Users className="h-5 w-5" />
              </Button>
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 text-left backdrop-blur">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <MiniDashboard />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

export function Features() {
  return (
    <section className="relative px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Real Systems"
          title="Every CUTIE <3 Prime category, backed by real production commands."
          text="No dummy modules. These cards map directly to the bot’s security, moderation, music, utility, giveaway, voice, and premium systems."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commandSystems.map((system, index) => (
            <motion.div
              key={system.name}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
            >
              <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-80", system.accent)} />
              <div className="absolute inset-0 bg-gradient-to-br from-prime-purple/16 via-transparent to-prime-blue/14 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className={cn("grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-black shadow-blueGlow", system.accent)}>
                    <system.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-black text-prime-blue">
                    {system.commands.length} commands
                  </span>
                </div>
                <h3 className="text-xl font-black text-white">{system.name}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{system.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {system.commands.slice(0, 5).map((command) => (
                    <code key={command} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-bold text-zinc-300">
                      /{command}
                    </code>
                  ))}
                  {system.commands.length > 5 && (
                    <span className="rounded-full bg-prime-purple/15 px-3 py-1 text-xs font-bold text-purple-200">
                      +{system.commands.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommandsCatalog({ full = false, showHeading = true }: { full?: boolean; showHeading?: boolean }) {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const categories = ["All", ...commandSystems.map((system) => system.name)];
  const filtered = allCommands.filter((item) => {
    const matchesCategory = active === "All" || item.category === active;
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || item.command.includes(q) || item.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });
  const visible = full ? filtered : filtered.slice(0, 18);

  return (
    <section id="commands" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute left-[-140px] top-20 h-96 w-96 rounded-full bg-prime-purple/15 blur-[110px]" />
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <div className="grid min-w-0 gap-8 xl:grid-cols-[minmax(300px,0.72fr)_minmax(0,1.28fr)] xl:items-start">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl xl:max-w-xl"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-prime-blue/25 bg-prime-blue/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-prime-blue">
                <Sparkles className="h-4 w-4" />
                Command Center
              </div>
              <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl">
                {full ? "Search every real CUTIE <3 Prime command." : "A Discord-style command center with real systems."}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                {totalRealCommands} listed production commands across {commandSystems.length} categories, with filters for staff, owners, music teams, and community managers.
              </p>
            </motion.div>
          </div>
        )}
        <div className={cn("grid min-w-0 gap-8 xl:grid-cols-[minmax(300px,0.72fr)_minmax(0,1.28fr)] xl:items-start", showHeading ? "mt-0" : "mt-0")}>
          <div className="hidden xl:block" />
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass min-w-0 overflow-hidden rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-5"
          >
            <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-zinc-500" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value.toLowerCase())}
                placeholder="Search commands or categories..."
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
              />
              <Command className="h-5 w-5 shrink-0 text-prime-blue" />
            </label>
            <div className="no-scrollbar mt-4 flex max-w-full gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActive(category)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition",
                    active === category
                      ? "border-prime-blue bg-prime-blue text-black"
                      : "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/25 hover:text-white",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <span>{filtered.length} commands found</span>
              <span>{active}</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid min-w-0 gap-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {visible.map((item, index) => (
            <motion.div
              key={`${item.category}-${item.command}`}
              layout
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.015, 0.28) }}
              className="group rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-1 hover:border-prime-blue/45 hover:bg-white/[0.075]"
            >
              <div className="flex items-start justify-between gap-3">
                <code className="break-all font-mono text-base font-black text-prime-blue">{item.display}</code>
                <span className="shrink-0 rounded-full bg-prime-purple/15 px-2.5 py-1 text-[11px] font-bold text-purple-200">
                  {item.category}
                </span>
              </div>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {!full && (
          <div className="mt-10 text-center">
            <Link href="/commands">
              <Button variant="outline" size="lg">
                View All Commands <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function Offer() {
  return (
    <section className="px-5 pb-24 pt-32 lg:px-8">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-prime-blue/25 bg-[#11111a] p-6 shadow-blueGlow sm:p-10 lg:p-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.34),transparent_36%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.24),transparent_32%)]" />
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-prime-blue to-transparent animate-pulse-border" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-black text-amber-200">
              First 10 Discord Servers Get FREE Premium Membership
            </div>
            <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-5xl">
              Launch premium with advanced systems before slots close.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              Premium adds faster support, advanced utilities, priority updates, early access, and the most powerful automation layer in CUTIE <span className="whitespace-nowrap">&lt;3</span> Prime.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={inviteUrl}>
                <Button variant="glow" size="lg" className="w-full sm:w-auto">
                  Claim Free Premium <Gem className="h-5 w-5" />
                </Button>
              </a>
              <div className="rounded-full border border-rose-300/25 bg-rose-400/10 px-5 py-3 text-center text-sm font-black text-rose-200">
                Limited slots indicator: 10 launch servers
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["02", "11", "38", "44"].map((value, index) => (
                <div key={index} className="rounded-3xl border border-white/10 bg-black/30 p-4 text-center">
                  <p className="text-2xl font-black text-white sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    {["Days", "Hrs", "Min", "Sec"][index]}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
              <p className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-prime-blue">
                <Star className="h-4 w-4 fill-prime-blue" /> Premium Benefits
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {offerPerks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <Check className="h-4 w-4" />
                    </span>
                    {perk}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function DashboardPreview({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className={cn("px-5 lg:px-8", showHeading ? "py-24" : "pb-24 pt-4")}>
      <div className="mx-auto max-w-7xl">
        {showHeading && (
          <SectionHeading
            eyebrow="Dashboard Preview"
            title="A premium command console for Discord operators."
            text="Preview how security, automod, tickets, utility, giveaway, music, voice, and premium systems can be presented in a modern dashboard."
          />
        )}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={cn("glass overflow-hidden rounded-[2rem]", showHeading ? "mt-14" : "mt-0")}
        >
          <div className="grid min-h-[640px] lg:grid-cols-[240px_1fr]">
            <aside className="border-b border-white/10 bg-black/20 p-5 lg:border-b-0 lg:border-r lg:border-white/10">
              <div className="mb-8 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-prime-purple to-prime-blue">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-black text-white">Prime OS</p>
                  <p className="text-xs text-zinc-500">Admin Console</p>
                </div>
              </div>
              <div className="no-scrollbar flex gap-2 overflow-x-auto pb-4 lg:grid lg:gap-2 lg:overflow-visible lg:pb-0">
                {commandSystems.slice(0, 7).map((system, index) => (
                  <div
                    key={system.name}
                    className={cn(
                      "flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold whitespace-nowrap lg:shrink",
                      index === 0 ? "bg-prime-blue text-black" : "text-zinc-400 hover:bg-white/10 hover:text-white",
                    )}
                  >
                    <span className="h-2 w-2 rounded-full bg-current" />
                    {system.name}
                  </div>
                ))}
              </div>
            </aside>
            <div className="p-5 sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-prime-blue">CUTIE &lt;3 Prime</p>
                  <h3 className="text-2xl font-black text-white sm:text-3xl">Server Command Operations</h3>
                </div>
                <Button variant="outline">
                  <LogIn className="h-4 w-4" /> Discord OAuth
                </Button>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
                {dashboardStats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <item.icon className="h-5 w-5 text-prime-blue" />
                      <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-bold text-emerald-300">{item.trend}</span>
                    </div>
                    <p className="text-3xl font-black text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-zinc-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="font-black text-white">System Usage</p>
                    <Sparkles className="h-5 w-5 text-prime-blue" />
                  </div>
                  <div className="flex h-56 items-end gap-2 rounded-2xl bg-black/20 p-4 ring-1 ring-white/5">
                    {[
                      { h: 62, t: "12p" },
                      { h: 45, t: "1p" },
                      { h: 80, t: "2p" },
                      { h: 58, t: "3p" },
                      { h: 94, t: "4p" },
                      { h: 72, t: "5p" },
                      { h: 86, t: "6p" },
                      { h: 67, t: "7p" },
                      { h: 98, t: "8p" },
                      { h: 82, t: "9p" },
                      { h: 76, t: "10p" },
                    ].map((data, index) => (
                      <div key={index} className="flex h-full flex-1 flex-col items-center gap-2">
                        <div className="relative flex flex-1 items-end w-full">
                          <motion.div
                            className="w-full rounded-t-md bg-gradient-to-t from-prime-purple/40 to-prime-blue shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                            initial={{ height: 0 }}
                            animate={{ height: `${data.h}%` }}
                            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-[10px] font-bold text-zinc-500">{data.t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between px-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-prime-blue shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                      <span>Active Queries</span>
                    </div>
                    <span>Peak: 98%</span>
                  </div>
                </div>
                <div className="grid gap-5">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                    <p className="mb-4 font-black text-white">Priority Panels</p>
                    {["Anti-nuke protected", "Ticket setup ready", "Giveaway role requirement"].map((ticket, index) => (
                      <div key={ticket} className="mb-3 flex items-center justify-between rounded-2xl bg-black/25 p-3 last:mb-0">
                        <span className="text-sm text-zinc-300">{ticket}</span>
                        <span className={cn("rounded-full px-2 py-1 text-xs font-bold", index === 0 ? "bg-prime-blue text-black" : "bg-white/10 text-zinc-300")}>
                          {index === 0 ? "Live" : "Ready"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="relative flex h-44 flex-col rounded-3xl border border-white/10 bg-black/35 p-5">
                    <p className="mb-4 shrink-0 font-black text-white opacity-80">Activity Logs</p>
                    <div className="relative flex-1 overflow-hidden">
                      <div className="animate-terminal space-y-4">
                        {[...terminalLines, ...terminalLines].map((line, index) => (
                          <p key={index} className="font-mono text-[0.7rem] tracking-tight text-zinc-400">
                            <span className="mr-2 text-prime-blue/70">prime:~$</span>
                            <span className="text-zinc-200">{line.replace("> ", "")}</span>
                          </p>
                        ))}
                      </div>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A full Discord command stack, not a one-feature bot."
          text="CUTIE <3 Prime combines owner security, staff moderation, engagement, music, voice, giveaways, utility, and premium automation in one polished system."
          align="left"
        />
        <div className="grid gap-3">
          {advantages.map(([title, text], index) => (
            <motion.div
              key={title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-4"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-black text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">{text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="overflow-hidden px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Community Proof"
          title="Built for owners, staff teams, and fast-moving communities."
          text="The command catalog is broad enough for serious management and clean enough for everyday Discord operations."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              animate={{ y: index === 1 ? [0, -10, 0] : [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: index * 0.4 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-prime-purple to-prime-blue text-lg font-black">
                  {item.name.slice(0, 2)}
                </div>
                <div>
                  <p className="font-black text-white">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.server}</p>
                </div>
              </div>
              <p className="leading-8 text-zinc-300">&quot;{item.text}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="relative grid gap-4 sm:grid-cols-2 lg:block lg:min-h-[420px]">
          <div className="absolute inset-0 rounded-full bg-prime-blue/10 blur-[110px]" />
          {communityCards.map((card, index) => (
            <motion.div
              key={card.label}
              className={cn(
                "relative rounded-[2rem] border border-white/10 bg-white/[0.065] p-5 backdrop-blur-xl lg:absolute lg:w-[min(24vw,280px)]",
                index === 0 && "lg:left-0 lg:top-4",
                index === 1 && "lg:right-0 lg:top-20",
                index === 2 && "lg:bottom-16 lg:left-8",
                index === 3 && "lg:bottom-2 lg:right-8",
              )}
              animate={{ y: [0, index % 2 ? 16 : -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, delay: index * 0.4 }}
            >
              <div className={cn("mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br", card.tone)}>
                <card.icon className="h-6 w-6 text-black" />
              </div>
              <p className="text-3xl font-black text-white">{card.value}</p>
              <p className="mt-1 text-sm font-semibold text-zinc-400">{card.label}</p>
            </motion.div>
          ))}
        </div>
        <SectionHeading
          eyebrow="Community"
          title="Discord operations for communities that keep moving."
          text="Coordinate support, protect servers, manage voice rooms, run giveaways, welcome new members, and keep chat active with one command stack."
          align="left"
        />
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers before you invite CUTIE."
          text="The bot is built for real Discord operations, with security, moderation, engagement, music, voice, and premium automation in one place."
          align="left"
        />
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-[2rem] px-6">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faq.map(([question, answer], index) => (
              <AccordionItem key={question} value={`item-${index}`}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-center shadow-glow sm:p-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.34),transparent_45%),linear-gradient(120deg,rgba(56,189,248,0.12),transparent,rgba(236,72,153,0.12))]" />
        <div className="relative">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-prime-purple to-prime-blue">
            <Sparkles className="h-8 w-8" />
          </div>
          <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-5xl">
            Ready To Upgrade Your Discord Server?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Add real moderation, security, tickets, music, utility, giveaway, fun, voice, and premium systems to your community.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={inviteUrl}>
              <Button variant="glow" size="lg" className="w-full sm:w-auto">
                Add To Discord <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href={supportUrl}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Join Support Server
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-gradient-to-br from-prime-purple to-prime-blue">
              <img src="/logo.png" alt="Logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-black text-white">CUTIE &lt;3 Prime</p>
              <p className="text-xs uppercase tracking-[0.2em] text-prime-blue">Discord Management OS</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-zinc-500">
            Premium Discord utility and esports management for security, moderation, tickets, music, giveaways, voice control, and automation.
          </p>
        </div>
        {[
          ["Pages", ["Home", "Commands", "Premium", "Support", "Documentation", "Dashboard Preview"]],
          ["Systems", ["Security", "Automod", "Moderation", "Music", "Voice Control", "Premium Systems"]],
          ["Commands", ["/antinuke", "/automod", "/ticket", "/play", "/giveaway", "/vccontrol"]],
        ].map(([title, links]) => (
          <div key={title as string}>
            <p className="mb-4 font-black text-white">{title}</p>
            <div className="grid gap-3">
              {(links as string[]).map((link) => (
                <a key={link} href={link.startsWith("/") ? "/commands" : "#"} className="text-sm text-zinc-500 transition hover:text-prime-blue">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 CUTIE &lt;3 Prime. All rights reserved.</p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a key={link} href="#" className="rounded-full border border-white/10 px-3 py-2 transition hover:border-prime-blue hover:text-prime-blue">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PremiumContent() {
  return (
    <>
      <PageHero
        eyebrow="Premium"
        title="Premium systems for servers that need more control."
        text="Unlock advanced features, faster support, early access, priority updates, and premium commands built for serious Discord communities."
      />
      <Offer />
      <Features />
      <FinalCTA />
    </>
  );
}

export function SupportContent() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Fast support for setup, security, and server operations."
        text="Join the support server for invite help, premium guidance, command setup, server protection questions, and launch support."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {["Setup Help", "Premium Support", "Security Guidance"].map((title, index) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-prime-purple to-prime-blue">
                {[<Bot key="bot" />, <Gem key="gem" />, <Zap key="zap" />][index]}
              </div>
              <h2 className="text-xl font-black text-white">{title}</h2>
              <p className="mt-3 leading-7 text-zinc-400">
                Get help configuring CUTIE <span className="whitespace-nowrap">&lt;3</span> Prime for your Discord community with clean, staff-friendly workflows.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={supportUrl}>
            <Button variant="glow" size="lg">Join Support Server</Button>
          </a>
        </div>
      </section>
      <FAQ />
    </>
  );
}

export function DocumentationContent() {
  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title="Setup docs for every major CUTIE <3 Prime system."
        text="A clean implementation guide for inviting the bot, securing a server, enabling staff workflows, and activating premium systems."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {documentationSteps.map((step, index) => (
            <div key={step.title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-prime-purple to-prime-blue text-black">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-prime-blue">0{index + 1}</span>
              </div>
              <h2 className="text-xl font-black text-white">{step.title}</h2>
              <p className="mt-3 leading-7 text-zinc-400">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CommandsCatalog full />
    </>
  );
}

export function CommandsPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Commands"
        title="All real CUTIE <3 Prime commands in one searchable catalog."
        text="Filter by system, search by command name, and inspect every production command across security, automod, moderation, tickets, welcomer, music, utility, giveaway, fun, voice, and premium systems."
      />
      <CommandsCatalog full />
    </>
  );
}

export function DashboardPageContent() {
  return (
    <>
      <PageHero
        eyebrow="Dashboard Preview"
        title="Discord bot analytics with a premium esports command-console feel."
        text="A realistic dashboard preview for system health, command activity, security status, ticket workflows, and voice or giveaway operations."
      />
      <DashboardPreview showHeading={false} />
      <CommandsCatalog showHeading={true} />
    </>
  );
}

export function HomeContent() {
  return (
    <>
      <Hero />
      <Offer />
      <Features />
      <CommandsCatalog />
      <DashboardPreview />
      <WhyChooseUs />
      <Testimonials />
      <Community />
      <FAQ />
      <FinalCTA />
    </>
  );
}

export function SitePage({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}

export default function LandingPage() {
  return (
    <PageShell>
      <HomeContent />
    </PageShell>
  );
}
