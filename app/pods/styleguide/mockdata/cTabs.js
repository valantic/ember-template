/* eslint-disable max-len */

const loremH = '<h2>Lorem ipsum dolor sit amet, consetetur</h2>';
const loremP = '<p>sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>';

const cTabs = {
  items: [
    { title: 'Tabtitle A', content: loremH + loremP },
    { title: 'Tabtitle B', content: loremP },
    { title: 'Tabtitle C', content: loremH + loremP + loremH + loremP },
    { title: 'Tabtitle D', content: loremH + loremP }
  ],
  itemsWithComponents: [
    {
      title: 'Tabtitle A',
      components: [
        {
          componentName: 'c-media-container',
          content: {
            medias: [
              {
                altText: 'example image xxs',
                url: 'http://via.placeholder.com/300x300?text=Example-XXS',
                mediaFormat: 'imageXXS'
              },
              {
                altText: 'example image xs',
                url: 'http://via.placeholder.com/400x400?text=Example-XS',
                mediaFormat: 'imageXS'
              },
              {
                altText: 'example image sm',
                url: 'http://via.placeholder.com/500x500?text=Example-SM',
                mediaFormat: 'imageSM'
              },
              {
                altText: 'example image md',
                url: 'http://via.placeholder.com/600x600?text=Example-MD',
                mediaFormat: 'imageMD'
              },
              {
                altText: 'example image lg',
                url: 'http://via.placeholder.com/700x700?text=Example-LG',
                mediaFormat: 'imageLG'
              },
              {
                altText: 'example image xl',
                url: 'http://via.placeholder.com/800x800?text=Example-XL',
                mediaFormat: 'imageXL'
              },
              {
                altText: 'example image xxs retina',
                url: 'http://via.placeholder.com/300x300?text=Example-XXS-Retina',
                mediaFormat: 'imageXXSRetina'
              },
              {
                altText: 'example image xs Retina',
                url: 'http://via.placeholder.com/400x400?text=Example-XS-Retina',
                mediaFormat: 'imageXSRetina'
              },
              {
                altText: 'example image sm Retina',
                url: 'http://via.placeholder.com/500x500?text=Example-SM-Retina',
                mediaFormat: 'imageSMRetina'
              },
              {
                altText: 'example image md Retina',
                url: 'http://via.placeholder.com/600x600?text=Example-MD-Retina',
                mediaFormat: 'imageMDRetina'
              },
              {
                altText: 'example image lg Retina',
                url: 'http://via.placeholder.com/700x700?text=Example-LG-Retina',
                mediaFormat: 'imageLGRetina'
              },
              {
                altText: 'example image xl Retina',
                url: 'http://via.placeholder.com/800x800?text=Example-XL-Retina',
                mediaFormat: 'imageXLRetina'
              }
            ]
          }
        }
      ]
    },
    {
      title: 'Tabtitle B',
      components: [
        {
          componentName: 'c-media-container',
          content: {
            medias: [
              {
                altText: 'example image xxs',
                url: 'http://via.placeholder.com/300x300?text=Example-XXS',
                mediaFormat: 'imageXXS'
              },
              {
                altText: 'example image xs',
                url: 'http://via.placeholder.com/400x400?text=Example-XS',
                mediaFormat: 'imageXS'
              },
              {
                altText: 'example image sm',
                url: 'http://via.placeholder.com/500x500?text=Example-SM',
                mediaFormat: 'imageSM'
              },
              {
                altText: 'example image md',
                url: 'http://via.placeholder.com/600x600?text=Example-MD',
                mediaFormat: 'imageMD'
              },
              {
                altText: 'example image lg',
                url: 'http://via.placeholder.com/700x700?text=Example-LG',
                mediaFormat: 'imageLG'
              },
              {
                altText: 'example image xl',
                url: 'http://via.placeholder.com/800x800?text=Example-XL',
                mediaFormat: 'imageXL'
              },
              {
                altText: 'example image xxs retina',
                url: 'http://via.placeholder.com/300x300?text=Example-XXS-Retina',
                mediaFormat: 'imageXXSRetina'
              },
              {
                altText: 'example image xs Retina',
                url: 'http://via.placeholder.com/400x400?text=Example-XS-Retina',
                mediaFormat: 'imageXSRetina'
              },
              {
                altText: 'example image sm Retina',
                url: 'http://via.placeholder.com/500x500?text=Example-SM-Retina',
                mediaFormat: 'imageSMRetina'
              },
              {
                altText: 'example image md Retina',
                url: 'http://via.placeholder.com/600x600?text=Example-MD-Retina',
                mediaFormat: 'imageMDRetina'
              },
              {
                altText: 'example image lg Retina',
                url: 'http://via.placeholder.com/700x700?text=Example-LG-Retina',
                mediaFormat: 'imageLGRetina'
              },
              {
                altText: 'example image xl Retina',
                url: 'http://via.placeholder.com/800x800?text=Example-XL-Retina',
                mediaFormat: 'imageXLRetina'
              }
            ]
          }
        }
      ]
    }
  ]
};

export default cTabs;

/* eslint-enable max-len */
