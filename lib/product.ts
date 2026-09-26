export const product = {
  id: 'loyer' as 'pharma' | 'loyer',
  name: 'Loyer',
  domain: 'loyer.helveticlens.ch',
  eyebrow: 'LEGAL INTELLIGENCE',
  noun: 'client',
  description:
    'Legal monitoring with context for every client and every decision.',
  examples: [
    {
      name: 'Client regulatory watch',
      goal: 'Monitor Swiss legal and regulatory developments affecting a technology company, with a focus on obligations that require action.',
      sector: 'Legal services · Client advisory',
    },
    {
      name: 'Employment & contracts',
      goal: 'Track Swiss employment law, changes to the Code of Obligations and relevant court decisions for our clients.',
      sector: 'Legal services · Employment',
    },
    {
      name: 'Privacy & AI',
      goal: 'Follow Swiss data protection requirements and official AI guidance relevant to companies developing AI products.',
      sector: 'Legal services · Data protection',
    },
  ],
  recommended: [
    {
      id: 'fdpic',
      name: 'FDPIC · Data protection',
      jurisdiction: 'Switzerland',
      url: 'https://www.edoeb.admin.ch/en',
      description:
        'The federal privacy authority’s public information. Individual page watch; scheduled legal collections remain separate.',
    },
    {
      id: 'finma',
      name: 'FINMA · News',
      jurisdiction: 'Switzerland',
      url: 'https://www.finma.ch/en/news/',
      description:
        'Financial supervision updates. This page may require dynamic rendering; connection readiness is checked before a watch is enabled.',
    },
    {
      id: 'eurlex',
      name: 'EUR-Lex · Official Journal',
      jurisdiction: 'European Union',
      url: 'https://eur-lex.europa.eu/oj/direct-access.html',
      description:
        'European Union Official Journal access. A reference page watch does not provide comprehensive EU law coverage.',
    },
  ],
} as const;
