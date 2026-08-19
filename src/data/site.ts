export const SITE = {
  name: "Merimee",
  person: "Michael Merimee",
  title: "DevOps engineer",
  location: "Northeast Ohio",
  employer: "Westfield Insurance",
  hero: "I sit between the problem and the system.",
  lede: "Hiring managers and technical leaders need someone who can stand in the room where the constraint lives — then ship the thing that has to carry it.",
  description:
    "Michael Merimee is a DevOps engineer at Westfield Insurance. He translates real-world constraints into systems that ship — platform work, disciplined AI practice, and delivery for actual stakeholders.",
  linkedin: "https://www.linkedin.com/in/michael-merimee/",
  github: "https://github.com/merimeesoftware",
  x: "https://x.com/MichaelMerimee",
} as const;

export const NAV = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const PROBLEMS = [
  {
    kind: "External",
    title: "The pipeline is stuck. The platform is brittle. The AI is loud.",
    body: "Teams inherit systems they didn't design, wait on shared infrastructure, and get handed demos that don't survive a Monday morning.",
  },
  {
    kind: "Internal",
    title: "You can't hire a translator by accident.",
    body: "Pure technicians often can't sit with the people who own the problem. Pure communicators often can't ship. The miss is in the middle.",
  },
  {
    kind: "Philosophical",
    title: "Tools without judgment fail the mission.",
    body: "Models write more syntax every quarter. What gets scarce is the person who can tell which system is honest — and own the outcome.",
  },
] as const;

export const STATS = [
  {
    value: "<1s",
    label: "p95 agent wait",
    detail: "was 65 minutes worst case",
  },
  {
    value: "215",
    label: "PRs reviewed",
    detail: "for 21 engineers on shared CI/CD",
  },
  {
    value: "~120",
    label: "PRs authored",
    detail: "across ~20 repos and 8 areas",
  },
] as const;

export const PLAN = [
  {
    n: "01",
    title: "Understand the constraints",
    body: "Sit in the room. Map what's actually blocking people — capacity, security, unclear requirements, blast radius — before anyone opens a ticket template.",
  },
  {
    n: "02",
    title: "Design the smallest honest system",
    body: "Not the impressive architecture. The one that can run, be explained, and survive the next team that inherits it.",
  },
  {
    n: "03",
    title: "Ship and harden",
    body: "Put it in production. Write the runbook. Review for the people who will consume it, not just the people who wrote it. Then make the next one cheaper.",
  },
] as const;

export const FAILURE = [
  "Vague hires who look fluent in standups and stall in delivery",
  "Vibe-coding theater that evaporates the first time a secret, a network, or a real user shows up",
  "Platforms nobody can operate except the person who built them",
  "AI demos that never become a tractor",
] as const;

export const SUCCESS = [
  "Constraints named out loud, in language the stakeholder already uses",
  "Systems that ship, then get quieter to run",
  "AI used as a tractor — North Star, small tasks, verify, then apply",
  "A path other people can actually follow",
] as const;

export const BETWEEN = {
  left: {
    label: "The room",
    items: [
      "Unclear requirements",
      "Contended pipelines",
      "Legacy that still has to run",
      "AI noise with no owner",
    ],
  },
  right: {
    label: "The system",
    items: [
      "Named constraints",
      "Sub-second agent wait",
      "Blast-radius reviews",
      "Skills as the unit of work",
    ],
  },
} as const;

export const AI_ARC = [
  {
    era: "Plow horse",
    title: "Small apps, explicit instructions",
    body: "Early work was local and literal — a bracket app, a tournament flow. The model needed every step written down. That was the honest way to use it.",
  },
  {
    era: "The stretch",
    title: "Models held more stack. They still failed instructively.",
    body: "Context windows grew. Whole layers arrived in one pass. The failures got more interesting — not because they were magic, because they showed you where the map was wrong.",
  },
  {
    era: "What didn't hold",
    title: "Vibe coding did not hold.",
    body: "Prompting until it looked done is a demo skill. Production still wants an owner, a test, and a way to explain the change to the next person.",
  },
  {
    era: "What held",
    title: "North Star, architecture, small tasks, document maps.",
    body: "Write the destination. Sketch the shape. Break the work. Keep a map. Then the prompts get shorter because the judgment is already in the file.",
  },
  {
    era: "Agents",
    title: "Local agents, MCP, connecting systems.",
    body: "Practiced at Westfield on real operational problems — dry-run, approve, apply, auditable logs. Larger conductor experiments along the way. Elyra is that chapter, not a product to buy.",
  },
  {
    era: "Tractor",
    title: "Capable models. Skills as the unit of work.",
    body: "The metaphor is a plow horse that became a tractor. The implements are still being built. Prefer that over a startup metaphor. AI did not replace the translation work — it made it the main event.",
  },
] as const;

export const ORIGIN = [
  {
    chapter: "The room",
    years: "First five years",
    title: "A seven-person company. Marketing title. Many hats.",
    body: "Shopify, social, email, promotions, ERP, CRM. I lived next to the problem, not above it. When something broke, the owner was in the next chair. That is still how I treat a platform.",
  },
  {
    chapter: "The in-between",
    years: "Chick-fil-A · the classroom",
    title: "Make an abstract idea tangible enough to act on.",
    body: "Marketing at a restaurant. Physical education for K–8. Classical philosophy for high schoolers. Teaching is the transferable skill: the person across the table has to leave able to do something. That is why the tech work fits.",
  },
  {
    chapter: "The terminal",
    years: "2023 → now",
    title: "Learned code with an eye toward how systems actually work.",
    body: "Tech Elevator in Cleveland. A job-search stretch that kept me teaching. A DevOps internship at Westfield that became the job. I used AI immediately — on pipelines, on unblocking developers in legacy environments — and I kept going because the judgment was the part that mattered.",
  },
] as const;

export const CLOSE =
  "DevOps by title. The scarce skill is translation and delivery under constraints. Marketing and teaching trained it before the terminal did. AI did not replace it — it made it the main event.";
