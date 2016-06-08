import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return [
            {
                title: "Product ",
                image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Bananas_white_background_DS.jpg",
                description: "Cavendish bananas are the most common dessert bananas sold.",
                rating: 4.5,
                price: 2.49,
                unit: "kg",
                currency: "€"
            }
        ];
    }

});
