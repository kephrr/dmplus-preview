export const getTargetAudienceImage = (type: string) => {
  const images = {
    'particuliers': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000',
    'entrepreneurs': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000',
    'debutants': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    'diaspora': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000',
  };

  const key = type.toLowerCase().replace(/ /g, '-').replace('&', 'et').replace('é', 'e');
  return images[key as keyof typeof images] || images.particuliers;
};
