import {
  Activity,
  BadgeCheck,
  Bot,
  ChartNoAxesCombined,
  Crown,
  Disc3,
  Gift,
  Headphones,
  HeartHandshake,
  Laugh,
  LockKeyhole,
  MessageSquarePlus,
  Mic2,
  Music2,
  RadioTower,
  Shield,
  ShieldCheck,
  Sparkles,
  Ticket,
  Trophy,
  UserCog,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const inviteUrl =
  "https://discord.com/oauth2/authorize?client_id=1482758015957340222&permissions=8&integration_type=0&scope=bot";
export const supportUrl = "https://discord.gg/DaZV9FyBe3";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Commands", href: "/commands" },
  { label: "Premium", href: "/premium" },
  { label: "Support", href: "/support" },
  { label: "Docs", href: "/documentation" },
  { label: "Dashboard", href: "/dashboard-preview" },
];

export const stats = [
  ["120+", "Commands"],
  ["2400+", "Users"],
  ["11", "Systems"],
  ["24/7", "Uptime"],
];

export const commandSystems = [
  {
    name: "Security",
    slug: "security",
    icon: ShieldCheck,
    accent: "from-red-400 to-prime-purple",
    description:
      "Advanced anti-nuke and server protection system to secure Discord communities from raids, malicious admins, and unauthorized access.",
    commands: ["antinuke", "whitelist", "extraowner"],
  },
  {
    name: "Automod",
    slug: "automod",
    icon: Shield,
    accent: "from-prime-blue to-emerald-300",
    description: "Smart moderation automation that detects spam, harmful links, and abusive content instantly.",
    commands: ["automod", "antispam", "antilink", "antibadwords"],
  },
  {
    name: "Moderation",
    slug: "moderation",
    icon: UserCog,
    accent: "from-prime-purple to-fuchsia-400",
    description:
      "Powerful moderation tools for complete server control with fast actions and advanced channel management.",
    commands: [
      "purge",
      "ban",
      "kick",
      "unban",
      "unbanall",
      "snipe",
      "editsnipe",
      "ignore",
      "lock",
      "unlock",
      "lockall",
      "unlockall",
      "hide",
      "hideall",
      "unhide",
      "unhideall",
      "role",
      "mute",
      "unmute",
      "mediachannel",
      "nickname",
    ],
  },
  {
    name: "Tickets",
    slug: "tickets",
    icon: Ticket,
    accent: "from-cyan-300 to-prime-blue",
    description: "Easy support ticket system with modern panel setup and fast response workflow.",
    commands: ["ticket"],
  },
  {
    name: "Welcomer",
    slug: "welcomer",
    icon: MessageSquarePlus,
    accent: "from-emerald-300 to-prime-blue",
    description: "Automated member onboarding with welcome messages, auto roles, and greeting systems.",
    commands: ["welcomer", "welcome", "autorole", "autonick", "greet"],
  },
  {
    name: "Music",
    slug: "music",
    icon: Music2,
    accent: "from-violet-300 to-prime-purple",
    description: "High-quality Discord music system with queue controls and autoplay support.",
    commands: ["play", "pause", "resume", "skip", "loop", "queue", "volume", "stop", "current", "autoplay", "music"],
  },
  {
    name: "Utility",
    slug: "utility",
    icon: Wrench,
    accent: "from-zinc-100 to-prime-blue",
    description: "Useful utility commands for profiles, server insights, member data, and customization.",
    commands: [
      "ping",
      "invite",
      "support",
      "vote",
      "stats",
      "steal",
      "noprefix",
      "afk",
      "prefix",
      "relationship",
      "profile",
      "avatar",
      "banner",
      "list",
      "uptime",
      "roleicon",
      "serverinfo",
      "userinfo",
      "roleinfo",
      "membercount",
      "firstmessage",
      "boostcount",
    ],
  },
  {
    name: "Giveaway",
    slug: "giveaway",
    icon: Gift,
    accent: "from-amber-300 to-prime-purple",
    description: "Professional giveaway management with rerolls, role requirements, and automated ending.",
    commands: ["giveaway", "gstart", "gdelete", "gend", "glist", "greroll", "greqrole"],
  },
  {
    name: "Fun",
    slug: "fun",
    icon: Laugh,
    accent: "from-pink-300 to-prime-blue",
    description: "Fun interaction commands to increase engagement and community activity.",
    commands: [
      "slap",
      "hug",
      "kiss",
      "pat",
      "cry",
      "dance",
      "laugh",
      "smile",
      "angry",
      "confused",
      "sleep",
      "gay",
      "lesbian",
      "horny",
      "simp",
      "iq",
      "cute",
      "fakeban",
      "fakekick",
      "nukeall",
      "ship",
    ],
  },
  {
    name: "Voice Control",
    slug: "voice-control",
    icon: Mic2,
    accent: "from-prime-blue to-indigo-300",
    description: "Advanced voice channel moderation and member control system.",
    commands: [
      "vcmute",
      "vcunmute",
      "vcdeafen",
      "vcundeafen",
      "vcmove",
      "vcmoveall",
      "vcdisconnect",
      "vcpull",
      "vcmuteall",
      "vcunmuteall",
      "vcdeafenall",
      "vcundeafenall",
      "vcdisconnectall",
    ],
  },
  {
    name: "Premium Systems",
    slug: "premium-systems",
    icon: Crown,
    accent: "from-yellow-200 to-prime-purple",
    description: "Premium advanced systems for automation, server customization, and management.",
    commands: ["customrole", "autoresponder", "redeem", "setup", "reset", "premium", "nuke", "vccontrol"],
  },
];

export const allCommands = commandSystems.flatMap((system) =>
  system.commands.map((command) => ({
    command,
    display: `/${command}`,
    category: system.name,
    slug: system.slug,
    description: system.description,
  })),
);

export const totalRealCommands = allCommands.length;

export const offerPerks = ["Premium Commands", "Faster Support", "Advanced Features", "Early Access", "Priority Updates"];

export const advantages = [
  ["Production Command Coverage", "Security, automod, moderation, ticketing, welcomer, music, utility, giveaways, fun, voice, and premium systems."],
  ["Esports Ready Operations", "Fast moderation, support panels, giveaways, activity tools, and server control for active communities."],
  ["Advanced Protection", "Anti-nuke controls, whitelist management, extra owners, anti-link, anti-spam, and bad-word automation."],
  ["Community Growth", "Welcomer, autorole, greet, fun interactions, profile commands, and giveaways keep members engaged."],
  ["Premium Automation", "Custom roles, autoresponders, redeem flows, reset/setup utilities, and VC control for serious servers."],
  ["Fast Staff Workflows", "Bulk locks, hides, voice actions, mute flows, purge, snipe, and channel systems built for active staff teams."],
];

export const testimonials = [
  {
    name: "RyzenOP",
    server: "Nova Arena Esports",
    text: "CUTIE <3 Prime gave our staff one place for security, tickets, giveaways, voice control, and fast moderation.",
  },
  {
    name: "MiraVLR",
    server: "Clutch Syndicate",
    text: "The real value is command depth. Automod, welcomer, music, utility, and giveaway systems all feel connected.",
  },
  {
    name: "Astrix",
    server: "Velocity Customs",
    text: "Anti-nuke plus whitelist and extraowner control made our management stack feel much more serious.",
  },
];

export const faq = [
  [
    "How do I add the bot?",
    "Use Add To Discord, choose your server, grant the required permissions, then run setup commands from the documentation.",
  ],
  [
    "Is premium required?",
    "Core utility and management systems can be used normally. Premium unlocks advanced systems, priority updates, and faster support.",
  ],
  [
    "Does it support server security?",
    "Yes. CUTIE <3 Prime includes antinuke, whitelist, extraowner, automod, antispam, antilink, and antibadwords systems.",
  ],
  [
    "Can staff manage voice channels?",
    "Yes. Voice moderation includes mute, unmute, deafen, undeafen, move, pull, disconnect, and all-member voice actions.",
  ],
  [
    "Does the bot include music?",
    "Yes. The music system includes play, pause, resume, skip, loop, queue, volume, stop, current, autoplay, and music commands.",
  ],
  [
    "Where can I see every command?",
    "Open the Commands page for a searchable, filterable catalog of all real CUTIE <3 Prime systems and commands.",
  ],
];

export const communityCards = [
  { icon: Users, label: "Active Users", value: "2400+", tone: "from-prime-purple to-fuchsia-400" },
  { icon: Trophy, label: "Real Systems", value: "11", tone: "from-prime-blue to-cyan-200" },
  { icon: Headphones, label: "Support", value: "24/7", tone: "from-emerald-300 to-prime-blue" },
  { icon: Zap, label: "Commands", value: "120+", tone: "from-amber-300 to-prime-purple" },
];

export const dashboardStats = [
  { icon: Activity, label: "Commands Tracked", value: "120+", trend: "live" },
  { icon: ChartNoAxesCombined, label: "Systems Online", value: "11", trend: "100%" },
  { icon: BadgeCheck, label: "Security Modules", value: "7", trend: "armed" },
  { icon: Bot, label: "Utility Tools", value: "22", trend: "+new" },
];

export const terminalLines = [
  "> /antinuke enable",
  "server shield armed • whitelist synced",
  "> /automod antibadwords",
  "abusive content filter active",
  "> /gstart nitro 24h",
  "giveaway panel live • role requirement enabled",
  "> /vcmuteall tournament-lobby",
  "voice moderation action completed",
  "> /ticket setup",
  "support panel published • staff workflow ready",
];

export const documentationSteps = [
  { icon: Disc3, title: "Invite CUTIE <3 Prime", text: "Connect the bot with the Discord OAuth invite and grant recommended permissions." },
  { icon: ShieldCheck, title: "Secure Your Server", text: "Configure antinuke, whitelist, extraowner, automod, antispam, antilink, and antibadwords." },
  { icon: Ticket, title: "Set Staff Workflows", text: "Enable ticket panels, moderation commands, welcome automation, and giveaway rules." },
  { icon: Crown, title: "Unlock Premium Systems", text: "Use customrole, autoresponder, redeem, setup, reset, premium, nuke, and vccontrol." },
];

export const socialLinks = ["Discord", "X", "YouTube", "GitHub"];
