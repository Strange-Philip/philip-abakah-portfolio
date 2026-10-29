import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { publications } from '../data/publications';
import {
  SITE_URL,
  identity,
  researchThemes,
  researchTrajectory,
  experience,
  education,
  awards,
  certifications,
  leadership,
  contact,
  faq,
  agentTerms,
} from '../data/profile';

export const prerender = true;

const statusLabel: Record<string, string> = {
  live: 'live',
  'in-progress': 'in progress',
  research: 'research',
  archived: 'archived',
};

export const GET: APIRoute = async () => {
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);

  const lines = [
    `# ${identity.name}`,
    '',
    `> ${identity.summary}`,
    '',
    `Structured version of everything below: ${SITE_URL}/ai`,
    '',
    `- Role: ${identity.role}`,
    `- Now: ${identity.current}`,
    `- Based: ${identity.based}`,
    `- Education: ${education.map((e) => `${e.degree}, ${e.school} (${e.period})`).join('; ')}`,
    '',
    '## Work',
    '',
    ...projects.map((p) => {
      const metrics = p.data.metrics?.map((m) => `${m.label}: ${m.value}`).join(', ');
      return `- [${p.data.title}](${SITE_URL}/projects/${p.slug}): ${p.data.tagline}. ${p.data.year}, ${statusLabel[p.data.status] ?? p.data.status}.${metrics ? ` ${metrics}.` : ''}`;
    }),
    '',
    '## Experience',
    '',
    ...experience.map((e) => `- ${e.role}, ${e.org} (${e.period})${e.note ? `. ${e.note}` : ''}`),
    '',
    '## Research',
    '',
    researchTrajectory,
    '',
    ...researchThemes.map((t) => `- ${t.title}: ${t.bullets.join(', ')}`),
    '',
    '## Publications',
    '',
    ...publications.map((p) => `- [${p.title}](${p.href}): ${p.venue}, ${p.year}`),
    '',
    '## Awards',
    '',
    ...awards.map((a) => `- ${a.title} (${a.year})`),
    '',
    '## Certifications and leadership',
    '',
    ...certifications.map((c) => `- ${c.title} (${c.year})`),
    ...leadership.map((l) => `- ${l.title}, ${l.org}`),
    '',
    '## Questions',
    '',
    ...faq.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    '## Elsewhere',
    '',
    ...contact.map((c) => `- ${c.label}: ${c.href.replace('mailto:', '')}`),
    '',
    '## Optional',
    '',
    `- [Sitemap](${SITE_URL}/sitemap-index.xml)`,
    `- [About](${SITE_URL}/about): longer biography`,
    `- [Now](${SITE_URL}/now): what Philip is doing at the moment`,
    '',
    '## Terms',
    '',
    `${agentTerms.usage} ${agentTerms.shortVersion}`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
