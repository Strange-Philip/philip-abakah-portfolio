export const publications = [
  {
    title:
      'Disease-specific data augmentation enhances deep learning classification of age-related macular degeneration, diabetic retinopathy, and glaucoma',
    href: 'https://journals.sagepub.com/doi/10.1177/20552076261461391',
    venue: 'Digital Health · SAGE Journals',
    year: '2026',
  },
  {
    title: 'Automating glaucoma diagnosis using artificial intelligence',
    href: 'https://gricghana.org/automating-glaucoma-diagnosis-using-artificial-intelligence/',
    venue: 'Ghana Research & Industry Collaborative',
    year: '2024',
  },
] as const;

export type Publication = (typeof publications)[number];
