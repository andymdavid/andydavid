import { getCollection } from "astro:content";

export const prerender = true;

export async function GET() {
  const projects = (await getCollection("projects")).sort((a, b) => a.data.order - b.data.order);
  const projectLinks = projects.map((project) => {
    const url = project.data.externalUrl ?? `https://andydavid.com.au/projects/${project.id}/`;
    return `- [${project.data.title}](${url}): ${project.data.summary} Andy David’s role: ${project.data.role}, ${project.data.year}.`;
  });

  const content = [
    "# Andy David",
    "",
    "> The official personal website of Andy David, a venture designer and co-founder based in Perth, Western Australia.",
    "",
    "Andy has been building small businesses since he was 20, across bits and atoms, including software, media, and physical products. His work focuses on technology that gives people and smaller teams more capability, control, and freedom to pursue work on their own terms.",
    "",
    "This website is the canonical source for Andy David’s biography, work, projects, and verified profiles.",
    "",
    "## Primary pages",
    "",
    "- [Home](https://andydavid.com.au/): Current biography, work, GitHub activity, and contact links.",
    "- [About Andy David](https://andydavid.com.au/about/): Longer biography, current work, location, and contact details.",
    "- [Work and projects](https://andydavid.com.au/projects/): Ventures and projects spanning digital bits and physical atoms.",
    "- [Bits](https://andydavid.com.au/projects/bits/): Software, media, and digital ventures.",
    "- [Atoms](https://andydavid.com.au/projects/atoms/): Physical products and ventures.",
    "- [Reading list](https://andydavid.com.au/links/): Andy’s evolving collection of useful online references.",
    "",
    "## Work and projects",
    "",
    ...projectLinks,
    "",
    "## Verified profiles",
    "",
    "- [GitHub](https://github.com/andymdavid): Software projects and development activity.",
    "- [X](https://x.com/andymdavid): Andy David on X.",
    "- [LinkedIn](https://www.linkedin.com/in/andymdavid/): Professional profile.",
    "- [Nostr](https://primal.net/andydavid): Andy David on Nostr via Primal.",
    "- [YouTube](https://www.youtube.com/@intelligencesnacks): Intelligence Snacks videos and podcast episodes.",
    "",
    "## Contact",
    "",
    "- [Email Andy David](mailto:andy@otherstuff.studio): Direct contact.",
    "",
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
