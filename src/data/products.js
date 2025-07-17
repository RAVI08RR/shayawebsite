export const allProducts = {
  spotlights: [
    {
      slug: 'petit',
      name: 'Petit',
      products: [
        {
          slug: 'petit-ref',
          name: 'Petit REF',
          image: '/images/petit.png',
          isNew: false,
        },
        {
          slug: 'petit-adj',
          name: 'Petit ADJ',
          image: '/images/petit-adj.png',
          isNew: true,
        },
        {
          slug: 'petit-adj-blk',
          name: 'Petit ADJ BLK',
          image: '/images/petit-adj-blk.png',
          isNew: false,
        },
        {
          slug: 's-lumi-46-1',
          name: 'S Lumi - 46 1',
          image: '/images/s-lumi-46-1.png',
          isNew: false,
        },
      ],
    },
    {
      slug: 'omado',
      name: 'Omado',
      code: '190451B4',
      images: ['/images/omado.png'],
      description: 'Omado is a fixed spotlight with a gold reflector for premium interiors.',
      benefits: ['Elegant design', 'High efficiency'],
      application: 'Indoor lighting for homes and offices.',
      finishes: ['Gold', 'White'],
      specifications: [
        {
          id: 'OM-1001',
          wattage: '8W LED 3000K, Gold',
          dimension: 'Ø90x 60mm',
          ies: 'OM-1001-IES',
          photometry: 'OM-1001-PDF',
          datasheet: 'omado.pdf',
        },
      ],
      related: [
        {
          slug: 'petit',
          name: 'Petit',
          subtitle: 'Fixed Spotlight',
          image: '/images/petit.png',
        },
        {
          slug: 'olev',
          name: 'Olev',
          subtitle: 'Fixed Spotlight',
          image: '/images/olev.png',
        },
      ],
    },
    {
      slug: 'olev',
      name: 'Olev',
      code: '190451B5',
      images: ['/images/olev.png'],
      description: 'Olev is a fixed spotlight with a deep anti-glare design.',
      benefits: ['Anti-glare', 'Robust build'],
      application: 'Commercial and residential spaces.',
      finishes: ['Black', 'White'],
      specifications: [
        {
          id: 'OL-2001',
          wattage: '10W LED 4000K, Black',
          dimension: 'Ø100x 80mm',
          ies: 'OL-2001-IES',
          photometry: 'OL-2001-PDF',
          datasheet: 'olev.pdf',
        },
      ],
      related: [
        {
          slug: 'petit',
          name: 'Petit',
          subtitle: 'Fixed Spotlight',
          image: '/images/petit.png',
        },
        {
          slug: 'omado',
          name: 'Omado',
          subtitle: 'Fixed Spotlight',
          image: '/images/omado.png',
        },
      ],
    },
    {
      slug: 'atala',
      name: 'Atala',
      code: '190451B6',
      images: ['/images/atala.png'],
      description: 'Atala is a fixed spotlight with a unique ring design.',
      benefits: ['Unique design', 'Energy efficient'],
      application: 'Accent lighting for modern interiors.',
      finishes: ['White', 'Black'],
      specifications: [
        {
          id: 'AT-3001',
          wattage: '7W LED 3000K, White',
          dimension: 'Ø95x 70mm',
          ies: 'AT-3001-IES',
          photometry: 'AT-3001-PDF',
          datasheet: 'atala.pdf',
        },
      ],
      related: [
        {
          slug: 'petit',
          name: 'Petit',
          subtitle: 'Fixed Spotlight',
          image: '/images/petit.png',
        },
        {
          slug: 'olev',
          name: 'Olev',
          subtitle: 'Fixed Spotlight',
          image: '/images/olev.png',
        },
      ],
    },
  ],
};
