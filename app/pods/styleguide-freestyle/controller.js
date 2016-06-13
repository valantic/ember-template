import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

const { inject } = Ember;

export default FreestyleController.extend({
    emberFreestyle: inject.service(),

  /* BEGIN-FREESTYLE-USAGE fp:notes
### A few notes regarding freestyle-palette

- Accepts a colorPalette POJO like the one found in the freestyle.js blueprint controller
- Looks very nice

And another thing...

###### Markdown note demonstrating prettified code

```
import Ember from 'ember';

export default Ember.Component.extend({
  // ...
  colorPalette: {
    'primary': {
      'name': 'cyan',
      'base': '#00bcd4'
    },
    'accent': {
      'name': 'amber',
      'base': '#ffc107'
    }
  }
  // ...
});
```
  END-FREESTYLE-USAGE */

    colorPalette: {
        'primary': {
            'name': 'cyan',
            'base': '#00bcd4'
        },
        'accent': {
            'name': 'amber',
            'base': '#ffc107'
        },
        'secondary': {
            'name': 'greyish',
            'base': '#b6b6b6'
        },
        'foreground': {
            'name': 'blackish',
            'base': '#212121'
        },
        'background': {
            'name': 'white',
            'base': '#ffffff'
        }
    },

    products: [{
        title: 'Bananas',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Bananas_white_background_DS.jpg',
        description: 'Cavendish bananas are the most common dessert bananas sold.',
        rating: 4.5,
        price: 2.49,
        unit: 'kg',
        currency: '€',
        isDiscounted: true
    }, {
        title: 'Conference Pears',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pear_DS.jpg/220px-Pear_DS.jpg',
        description: 'A sweet yellowish- or brownish-green edible fruit which is narrow at the stalk and wider towards the base.',
        rating: 4.0,
        price: 2.00,
        unit: 'kg',
        currency: '€'
    }]

});
