export interface TimelineItem {
  date: string
  title: string
  description: string
  tags: string[]
}

function entry(
  date: string,
  title: string,
  description: string,
  tags: string[]
): TimelineItem {
  return { date, title, description, tags }
}

export const timelineData: TimelineItem[] = [
  entry(
    '2025-10-12',
    'The Beginning',
    "Loba's exposure to an exploding tool aligned with his growing creative curiosity, leading him to explore Canva for the first time.",
    ['launch', 'learning']
  ),

  entry(
    '2025-10-31',
    'First Publication',
    'Completed a short study guide and, after taking a brief course, published it on Amazon.',
    ['design', 'website']
  ),

  entry(
    '2026-02-27',
    'The Struggle',
    'Attempted to build a more stylistic website but faced challenges with layout and structure.',
    ['iteration', 'learning']
  ),

  entry(
    '2026-12-20',
    'Logo Exploration',
    'Explored vector design and developed a stronger visual identity through experimentation.',
    ['branding', 'creative']
  ),

  entry(
    '2026-03-25',
    '30 Day Design Challenge Start',
    'Started the 30‑day design challenge and committed to producing creative work daily.',
    ['challenge', 'momentum']
  ),

  entry(
    '2026-04-12',
    'First Recognition',
    'Received positive feedback on social media, boosting confidence in the design direction.',
    ['validation', 'growth']
  ),

  entry(
    '2026-04-20',
    'GCSE Mock Prep',
    'Balanced creative work with school responsibilities while preparing for GCSE mocks.',
    ['education', 'focus']
  ),

  entry(
    '2026-04-25',
    'Site Rebuild',
    'Rebuilt the portfolio layout with a new grid system and smoother interactions.',
    ['development', 'refactor']
  ),

  entry(
    '2026-04-26',
    'Portfolio Grid Upgrade',
    'Enhanced the project grid with new hover states, animations, and a more intuitive navbar.',
    ['ui', 'motion']
  ),

  entry(
    '2026-04-28',
    'Steph Curry Design',
    'Released the Steph Curry design project.',
    ['productivity', 'design']
  ),

  entry(
    '2026-05-02',
    'Published Log Page',
    'Launched a calendar‑based log page to make progress easier to browse and revisit.',
    ['launch', 'journal']
  ),

  entry(
    '2026-05-09',
    'Code and Design Progress',
    'Completed two Frontend Mentor challenges and published the Lamine Yamal design.',
    ['challenge', 'design']
  ),

  entry(
    '2026-05-16',
    'New Gradient Pack Release',
    'Released a gradient pack on Gumroad featuring over 130 unique gradients.',
    ['product', 'design']
  ),

  entry(
    '2026-05-29',
    'Construction Website',
    'Started building a construction website for family.',
    ['web', 'design']
  ),

  entry(
    '2026-06-05',
    'Kimi Antonelli – Monaco',
    'Created a Kimi Antonelli poster for the 2026 Monaco Grand Prix.',
    ['graphic', 'design']
  ),

  entry(
    '2026-06-06',
    'New Equipment',
    'Tested a new sound card for piano recording and audio work.',
    ['music', 'productivity']
  )
]
