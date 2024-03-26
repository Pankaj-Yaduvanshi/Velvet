import cerealCollection from 'assets/images/collection-spices-top.jpg';
import spicesCollection from 'assets/images/collection-cereals-top.jpg';
import othersCollection from 'assets/images/collection-others-bottom.jpg';

export const COLLECTIONS = [
  {
    id: 1,
    image: cerealCollection,
    title: 'cereals',
    text: 'Cereals',
    url: '/collections/cereals',
  },
  {
    id: 2,
    image: spicesCollection,
    title: 'spices',
    text: 'Spices',
    url: '/collections/spices',
  },
  {
    id: 3,
    image: othersCollection,
    title: 'others',
    text: 'Other & more',
    url: '/collections/others',
  },
];
