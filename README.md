# Ember-sandbox

This README outlines the details of collaborating on this Ember application.

## Project purpose

This project is a playground to get know ember and define best practices before we start our first client project

## Installation notes

* ember-cli version 2.5.1
* node version: 6.2.1 (There is a warning in ember-cli, but no restriction at package.json. It seems to work. "WARNING: Node v6.2.1 has currently not been tested against Ember CLI and may result in unexpected behaviour")
* npm version: 3.8.0
* pods are active [more about pods](http://www.programwitherik.com/ember-pods/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

TBD Specify what it takes to deploy your app.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


## Switching layouts

Wrapping elements in a specific layout can be done using [Ember Components](https://guides.emberjs.com/v2.5.0/components/defining-a-component/) applied as block-level elements.
The layout components are basically element containers. In short, change the layout component, change the page layout.

### How Layout Components work

### Routes define main templates

When a route renders a page with a specific layout generate a new layout component.
Add the new layout component to the "template.hbs" file of the route by using the block notation.
The HTML content is therefor [wrapped within the component](https://guides.emberjs.com/v2.5.0/components/wrapping-content-in-a-component/).

### Create a new layout

Use ``ember-cli``:

```
ember g component l-my-new-layout
```

### Naming layouts

Layout components should be prefixed with the string "l-".

For example: _l-default-page_ or _l-product-page_ are good layout component names.

### Example layout

```
{{#l-default-page}}
<h1>Hello!</h1>
<p>Welcome to our ember-sandbox project!</p>
{{outlet}}
{{/l-default-page}}
```

The "default layout" page is currently nothing more than a "yield output", with the required HTML to define a specific layout:

```
<em>Default layout</em>
{{yield}}
```
