export interface TimelineItem {
  date: string
  title: string
  description: string
  tags: string[]
}

// Small helper to make adding entries easier
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
    "Loba's exposure to an exploding tool coincided with his creative passion. Loba delves into Canva for the first time.",
    ['launch', 'learning']
  ),

  entry(
    '2025-10-31',
    'First Publication',
    'Loba finishes his short study guide and after a short course is able to publish on Amazon.',
    ['design', 'website']
  ),

  entry(
    '2026-02-27',
    'The Struggle',
    'Loba attempts making a more stylistic website but struggles with layout.',
    ['iteration', 'learning']
  ),

  entry(
    '2026-12-20',
    'Logo Exploration',
    'Experimented and learnt vector design to create a strong visual identity.',
    ['branding', 'creative']
  ),

  entry(
    '2026-03-25',
    '30 Day Design Challenge Start',
    'Kicked off the 30 day design challenge and committed to daily creative output.',
    ['challenge', 'momentum']
  ),

  entry(
    '2026-04-12',
    'First Recognition',
    'Received positive feedback on social media and felt more confident in the design direction.',
    ['validation', 'growth']
  ),

  entry(
    '2026-04-20',
    'GCSE Mock Prep',
    'Balanced schoolwork with life while preparing for GCSE mocks.',
    ['education', 'focus']
  ),

  entry(
    '2026-04-25',
    'Site Rebuild',
    'Added the portfolio page layout with a new grid system and smoother interactions.',
    ['development', 'refactor']
  ),

  entry(
    '2026-04-26',
    'Portfolio Grid Upgrade',
    'Updated the project collection with fresh hover states and animated effects. Navbar is modified to be more intuitive.',
    ['ui', 'motion']
  ),

  entry(
    '2026-04-28',
    'Steph Curry Design',
    'Steph Curry Design is released.',
    ['productivity', 'design']
  ),

  entry(
    '2026-05-02',
    'Published Log Page',
    'Launched the new calendar-based log page to make progress easier to browse and revisit.',
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
    'Released a new pack of gradients on Gumroad, featuring over 130 unique gradients.',
    ['product', 'design']
  ),
]
