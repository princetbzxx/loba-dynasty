export interface AltVersion {
  id: string
  label?: string
  src: string
  brand?: string
}

export interface PortfolioItem {
  id: number
  title: string
  src: string
  tags: string[]
  description: string
  createdAt: string
  alts?: AltVersion[]
}

function entry(
  id: number,
  title: string,
  src: string,
  tags: string[],
  description: string,
  createdAt: string,
  alts?: AltVersion[]
): PortfolioItem {
  return { id, title, src, tags, description, createdAt, alts }
}

export const portfolioItems: PortfolioItem[] = [
  entry(
    1,
    'Perfume Promo',
    '/portfolio1.webp',
    ['Promo', 'Product', 'Advertising'],
    'A sleek promotional visual for a luxury perfume, focused on clean lighting and premium product presentation.',
    '2026-04-22'
  ),
  entry(
    2,
    'Suho WHC 3',
    '/portfolio2.webp',
    ['Drama', 'Poster', 'Editorial'],
    'A dramatic Weak Hero Class 3 poster featuring Suho, built around mood, tension, and cinematic composition.',
    '2026-04-19'
  ),
  entry(
    3,
    'Cristiano Ronaldo',
    '/portfolio3.webp',
    ['Football', 'Poster', 'Sports'],
    'A Cristiano Ronaldo sports poster created as part of my 30 Day Design Challenge, aiming to intensify Ronaldo’s bold prescence with dynamic framing.',
    '2026-04-18'
  ),
  entry(
    4,
    'Mattheus Cunha',
    '/portfolio4.webp',
    ['Football', 'Editorial', 'Sports'],
    'An editorial-style design featuring Matheus Cunha, a product of my experimentation into the red colour-world.',
    '2026-04-16'
  ),
  entry(
    5,
    'PS5 Promo',
    '/portfolio5.webp',
    ['Tech', 'Promo', 'Advertising'],
    'A PlayStation 5 promotional graphic created during my 30 Day Design Challenge, highlighting futuristic lighting and tech-driven visuals.',
    '2026-04-20'
  ),
  entry(
    6,
    'Dybala',
    '/portfolio6.webp',
    ['Football', 'Poster', 'Sports'],
    'A vibrant Paulo Dybala design exploring colour, motion, and expressive composition. Part of my 30 Day Design Challenge.',
    '2026-04-12'
  ),
  entry(
    7,
    'Lando Norris',
    '/portfolio7.webp',
    ['F1', 'Editorial', 'Sports'],
    'A Formula 1 editorial piece featuring Lando Norris, blending speed, energy, and bold graphic elements.',
    '2026-04-07'
  ),
  entry(
    8,
    'Neymar',
    '/portfolio8.webp',
    ['Football', 'Poster', 'Editorial'],
    'An expressive Neymar Jr poster showcasing Neymar’s dynamic style and vibrant personality, built around cool colours and an emotional composition.',
    '2026-04-24'
  ),
  entry(
    9,
    'Silva',
    '/portfolio9.webp',
    ['Football', 'Portrait', 'Editorial'],
    'A special graphic of Bernando Silva, focused on clean composition and subtle texture work.',
    '2026-04-25'
  ),
  entry(
    10,
    'Max Dowman',
    '/portfolio10.webp',
    ['Football', 'Poster', 'Sports'],
    'A football poster featuring Max Dowman, built around a sharp mood that highlights the rise of a young star.',
    '2026-04-26'
  ),
  entry(
    11,
    'Novak Djokovic',
    '/portfolio11.webp',
    ['Tennis', 'Poster', 'Sports'],
    'A Novak Djokovic design incorporating elements of Belgrade to create a sense of place and identity.',
    '2026-04-27'
  ),
  entry(
    12,
    'Steph Curry',
    '/portfolio12.webp',
    ['Basketball', 'Poster', 'Sports'],
    'An energetic Steph Curry poster exploring motion and a bold colour direction.',
    '2026-04-28'
  ),
  entry(
    13,
    'Kylian Mbappé',
    '/portfolio13.webp',
    ['Football', 'Poster', 'Sports'],
    'A cinematic multi‑pose Mbappé design built around national identity, map textures, and structured card elements. A two‑day project focused on atmosphere, composition, and storytelling.',
    '2026-05-02'
  ),
  entry(
    14,
    'Erling Haaland',
    '/portfolio14.webp',
    ['Football', 'Poster', 'Sports'],
    "A clean, modern Manchester City poster built around geometric structure and Haaland's toppling presence.",
    '2026-05-04'
  ),
  entry(
    15,
    'Lamborghini Aventador',
    '/portfolio15.webp',
    ['Automotive', 'Poster', 'Premium'],
    'A warm, Aventador poster built around realism, atmosphere, and a refined premium layout. Focused on clean geometry, structured text hierarchy, and a cinematic orange world.',
    '2026-05-07'
  ),
  entry(
    16,
    'Lamine Yamal Sensació',
    '/portfolio16.webp',
    ['Football', 'Poster', 'Sports'],
    'A vibrant, energetic poster of Lamine Yamal built around a bold colour scheme, dynamic composition, and a sense of youthful energy.',
    '2026-05-10'
  ),
  entry(
    17,
    'Jayson Tatum Momentum',
    '/portfolio17.webp',
    ['Basketball', 'Collage', 'Sports'],
    'A high‑octane Jayson Tatum collage built around multi‑pose composition, sharp lighting, and a clean cultured layout. Focused on momentum, emotion, and cinematic visuals.',
    '2026-05-16',
    [
      { id: 'a', label: 'Alt - Celtic Edit', src: '/portfolio17-green.webp', brand: '' }
    ],
  ),
  entry(
    18,
    'Desire Doue Allez',
    '/portfolio18.webp',
    ['Football', 'Poster', 'Sports'],
    'A timeless Doue poster that will be rememebered for the ages. This design captures the essence of Doue’s rise in talent to another level. Golden energy, Champions League cinema.',
    '2026-05-17'
  ),
  entry(
    19,
    'Bruno Fernandes',
    '/portfolio19.webp',
    ['Football', 'Editorial', 'Sports'],
    'A Bruno Fernandes design built around a moody, cinematic atmosphere and a structured layout. Focused on storytelling, emotion, and a bold colour scheme.',
    '2026-05-18'
  ),
  entry(
    20,
    'Hugo Ekitike',
    '/portfolio20.webp',
    ['Football', 'Poster', 'Sports'],
    'A dynamic Hugo Ekitike poster that glorifies the young striker’s rise to stardom. Built around a bold colour scheme, lively composition, and a sense of sparkling potential.',
    '2026-05-23'
  ),
  entry(
    21,
    'Antoine Griezmann',
    '/portfolio21.webp' ,
    ['Football', 'Poster', 'Sports'],
    'A vibrant Antoine Griezmann poster built around a bold colour scheme, dynamic composition, and a sense of joyful energy.',
    '2026-05-24',
  ),
  entry(
    22,
    'Josh King',
     '/portfolio22.webp',
    ['Football', 'Poster', 'Sports'],
    'An emotive Josh King Poster built with energy, contrast, and identity.',
    '2026-05-25',
  ),
  entry(
    23,
    'Samuel Inacio',
      '/portfolio23.webp',
    ['Football', 'Poster', 'Sports'],
    'A vibrant Samuel Inacio poster built around a bold colour scheme, dynamic composition, and a sense of joyful energy.',
    '2026-05-28',
    [
      { id: 'a', label: 'Alt - Sepia Edit', src: '/portfolio23-sepia.webp', brand: '' },
    ]
  ),
  entry(
    24,
    'Shai Gilgeous Alexander',
    '/portfolio24.webp',
    ['Basketball', 'Graphic', 'Sports'],
    'A challenging graphic undeniably featuring the one and only SGA.',
    '2026-06-04',
    [
      { id:'a', label:'Alt - Autumn Edit', src:'/portfolio24-autumn.webp'}
    ]
  ),
  entry(
    25,
    'Kimi Antonelli - Monaco',
    '/portfolio25.webp',
    ['F1','Sports','Heroic'],
    'A noble graphic commedating Antonelli’s freakish start to F1, and a reminder that the best is yet to come',
    '2026-06-05',
    [
      { id: 'a', label: 'Alt - Nero Edit', src:'/portfolio25-nero.webp'}
    ]  ),
  entry(
    26,
    'Real Betis Rebrand',
    '/betis.webp',
    ['Football', 'Rebrand', 'Editorial'],
    'A multipage Real Betis rebrand case study, showing the matchday landmark, goal moment, full-time wrap-up, and lineup presentation.',
    '2026-06-10',
    [
      { id: 'a', label: 'Full Time', src: '/betisfulltime.webp', brand: 'Real Betis' },
      { id: 'b', label: 'Goal', src: '/betisgoal.webp', brand: 'Real Betis' },
      { id: 'c', label: 'Lineup', src: '/betislineup.webp', brand: 'Real Betis' }
    ]  )
]
