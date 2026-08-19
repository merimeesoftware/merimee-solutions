export type WorkKind = "engineering" | "delivery";

export type WorkItem = {
  slug: string;
  title: string;
  kicker: string;
  kind: WorkKind;
  featured: boolean;
  year: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  honest?: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
};

export const WORK: WorkItem[] = [
  {
    slug: "build-pools",
    title: "Private cloud build pools",
    kicker: "Westfield · platform",
    kind: "engineering",
    featured: true,
    year: "2024–26",
    summary:
      "Designed and operate private Azure elastic build pools so other teams stop waiting on contended agents.",
    problem:
      "Shared pipelines were waiting on a prior agent design. Typical waits sat around fifty seconds. Worst case hit sixty-five minutes when the pool was contended. Developers don't ship while they wait.",
    approach:
      "Discovery across capacity, security, cost, and networking. Terraform and OIDC. Private networking. OS and compute-tier pools in prod and non-prod. Then the unglamorous part: operate it, review the templates other teams inherit, and refuse to ship a permission model that doesn't work.",
    outcome:
      "Agent acquisition under one second at p95 (n=371). Primary reviewer on shared CI/CD — about 215 PRs for 21 engineers, with blast-radius thinking for every consuming team. Drove static-analysis adoption across about a dozen repos. Built custom MCP tooling for legacy modernization discovery existing tools couldn't reach.",
    honest:
      "Internal names, topology, and inventories stay internal. The numbers here are the ones that survive sanitization — and they're the ones that matter to a hiring manager.",
    image: "/work/platform.jpg",
    tags: ["Azure", "Terraform", "CI/CD", "DevSecOps"],
  },
  {
    slug: "senior-schools",
    title: "Senior Schools Network",
    kicker: "Engineering · live site",
    kind: "engineering",
    featured: true,
    year: "2025",
    summary:
      "A production TypeScript site for schools aligned with John Senior's idea of poetic knowledge.",
    problem:
      "A set of schools and programs shared a philosophy — poetic knowledge, sensory-based learning, Catholic formation — and did not share a public map. A pitch deck would have been easier. It also would have been a brochure pretending to be a network.",
    approach:
      "Ship a real site. TypeScript, live hosting, pages a parent or founder can actually use: affiliated schools, stages of development, a way in. The copy is earnest because the material is earnest. I didn't sand that off.",
    outcome:
      "seniorschoolnetwork.com is up. It is the hinge from client delivery into owned engineering — a system I run, not a page I handed off.",
    honest:
      "This is not a growth-stage education startup. It is a working public site for a real idea. That's the proof.",
    image: "/work/schools.jpg",
    liveUrl: "https://seniorschoolnetwork.com/",
    repoUrl: "https://github.com/merimeesoftware/Senior-Schools-Network",
    tags: ["TypeScript", "Production", "Education"],
  },
  {
    slug: "true-rankings",
    title: "True Rankings",
    kicker: "Engineering · college football",
    kind: "engineering",
    featured: true,
    year: "2025–26",
    summary:
      "An algorithmic ranking system with a point of view: how good they actually are.",
    problem:
      "Committee rankings felt arbitrary. I wanted a sequential quality model that updates week by week — opponent, home and away, conference strength — instead of a vibes poll with a press conference.",
    approach:
      "Python model, documented math, a Cloudflare Worker for the product shape. Secrets live in Cloudflare, not in the repo. The tagline is the requirement: how good they actually are.",
    outcome:
      "A working ranking system with source, algorithm notes, and a deploy path. Side work I run because I wanted the math, not a sports-media company.",
    honest:
      "This is a serious toy. I don't pretend it's a business. I do pretend — correctly — that you can read the code and the model.",
    image: "/work/cfb.jpg",
    repoUrl: "https://github.com/merimeesoftware/cfb-ranking-algorithm",
    tags: ["Python", "Cloudflare Workers", "Modeling"],
  },
  {
    slug: "elyra",
    title: "Elyra",
    kicker: "AI practice · not a product",
    kind: "engineering",
    featured: false,
    year: "2026",
    summary:
      "A conductor, personas, skills, and memory — the chapter where agent patterns got a name.",
    problem:
      "Website migrations from page builders are repetitive, high-context, and easy to vibe-code into a mess. I wanted an architecture I could actually operate: who decides, who does the work, what a skill is, and what gets remembered.",
    approach:
      "Conductor as meta-agent. Specialist personas. Skills as markdown-plus-code units. Memory across runs. LangGraph-style state, MCP tool clients, a dry-run-then-approve posture. Phase 0 is scaffolding ready to test on real sites — not a storefront.",
    outcome:
      "Public source at merimeesoftware/elyra. Useful as evidence of how I think about agents. Not something to buy. The practice is the point.",
    honest:
      "If a page on this site ever sounds like I'm selling you an AI migration engine, I missed. Point at the About chapter instead.",
    image: "/work/elyra.jpg",
    repoUrl: "https://github.com/merimeesoftware/elyra",
    tags: ["Agents", "MCP", "Python"],
  },
  {
    slug: "holy-rollers",
    title: "Holy Rollers",
    kicker: "Delivery · painting company",
    kind: "delivery",
    featured: true,
    year: "Client work",
    summary:
      "Website and messaging for a painting company, built so a non-technical owner could keep it.",
    problem:
      "A small company needed a public face that didn't sound like a template and didn't require a developer to change a phone number.",
    approach:
      "Wix was the honest tool. Design and messaging, not a custom stack the owner would be trapped in. I still treat that as shipping — the stakeholder has to be able to live with it.",
    outcome:
      "holyrollers.us is live. Modest scope, still working.",
    honest:
      "This is client delivery, not platform engineering. It belongs here because it is evidence I can ship for a real owner, not because it is a design award.",
    image: "/work/holy-rollers.jpg",
    liveUrl: "https://www.holyrollers.us/",
    tags: ["Messaging", "Small business"],
  },
  {
    slug: "saint-joseph",
    title: "Saint Joseph the Worker Academy",
    kicker: "Delivery · school",
    kind: "delivery",
    featured: true,
    year: "Client work",
    summary:
      "Designed and built from the ground up for a school that needed a site they could actually run.",
    problem:
      "A new academy needed more than a placeholder. Parents, faculty, and a mission had to share one public surface.",
    approach:
      "Ground-up design and build on a stack the school could maintain. Same rule as the rest of the client work: the owner has to be able to keep it without me in the room.",
    outcome:
      "saintjosephtheworkeracademy.org is live.",
    honest:
      "School sites are constraint work: brand, liturgy of the year, people who are not looking for a CMS career. I like that kind of constraint.",
    image: "/work/academy.jpg",
    liveUrl: "https://www.saintjosephtheworkeracademy.org/",
    tags: ["Education", "Ground-up"],
  },
  {
    slug: "parker-eidle",
    title: "Parker Eidle",
    kicker: "Delivery · musician",
    kind: "delivery",
    featured: false,
    year: "Client work",
    summary: "A thin musician page. Still reachable. Modest on purpose.",
    problem:
      "A musician needed a public URL that didn't collapse into a Linktree pile.",
    approach:
      "A simple Google Sites page. The honest tool for the scope. I didn't overbuild it so I could put it on a portfolio.",
    outcome: "parkereidle.com is live.",
    honest:
      "This is the smallest piece of delivery on the site. Included because the live-link audit said it still answers — not because it is a case study with a three-act structure.",
    image: "/work/parker.jpg",
    liveUrl: "https://www.parkereidle.com/",
    tags: ["Musician", "Modest scope"],
  },
];

export function getWork(slug: string) {
  return WORK.find((item) => item.slug === slug);
}

export function featuredWork() {
  return WORK.filter((item) => item.featured);
}

export function workByKind(kind: WorkKind) {
  return WORK.filter((item) => item.kind === kind);
}
