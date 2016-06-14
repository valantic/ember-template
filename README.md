# Ember-sandbox

This project is a playground to get know ember and define best practices before we start our first client project

This style guide is applying [the Ember Freestyle living styleguide](https://github.com/chrislopresto/ember-freestyle) system for Ember apps.

## Project Planning

Make sure to check here first to see what we are currently working on and what is still to be done.

We're gathering all todos and ideas in [the _CodeBaseHQ_ Tickets section](https://movento2.codebasehq.com/projects/ember-sandbox/tickets?report=all).

## Project Communication

We use Slack and the _[#int_frontend](https://movento.slack.com/archives/int_frontend)_ channel to communicate about this project.

## Installation notes

* ember-cli version 2.5.1
* node version: 6.2.1 (There is a warning in ember-cli, but no restriction at package.json. It seems to work. "WARNING: Node v6.2.1 has currently not been tested against Ember CLI and may result in unexpected behaviour")
* npm version: 3.8.0
* pods are active [more about pods](http://www.programwitherik.com/ember-pods/)

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [EsLint](http://eslint.org)

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


# Usage Guide

This EmberJS app will generate the Living StyleGuide based upon "HTML Components" written in [HTMLBars](http://emberjs.com/api/modules/ember-htmlbars.html), the EmberJS templating system based upon [HandleBars JS](http://handlebarsjs.com/).

When generating elements using _ember-cli_, it will create the new files as "pods" in the _/pods_ folder.

## Getting started with Ember FreeStyle

Here's a simple style guide example using Ember Freestyle where `{{loading-spinner}}` is a hypothetical component in our application:

```
{{#freestyle-guide title="My Living Style Guide" subtitle="Showcasing My App's Components"}}
  {{#freestyle-section name="UI Elements"}}
    {{#freestyle-usage "loading-spinner" title="Loading Spinner"}}
      {{loading-spinner}}
    {{/freestyle-usage}}
  {{/freestyle-section}}
{{/freestyle-guide}}
```

For our styleguide we have defined the _freestyle-guide_ component in the file: _/app/pods/styleguide-freestyle/template.hbs_. Here we defined the style guide header and initial structure.

We've organized the components in two main categories:

- **freestyle-section _"Visual Style"_** - contains general design and styling like typography and color
- **freestyle-section _"Components"_** - contains actual page elements

## Creating Components

All styleguide components will be organized in the _components_ folder.

**Note:** Prefix actual component names with "`c-`".

To display the component we need to add it to Ember Freestyle's main _template.hbs_ file.

To make the library of components easier to manage, we have made it possible to include "subsection" components so we don't overload the main "_template.hbs_" template file.

This way we only need to include the files we want to display.

**Example:** The "Visual Style" section consists of the partials, "subsection-typography" and "subsection-color":

```
{{#freestyle-section name='Visual Style' as |section|}}

    {{partial 'styleguide-freestyle/subsection-typography'}}

    {{partial 'styleguide-freestyle/subsection-color'}}

  {{/freestyle-section}}
```

**Note:** Currently this is a manual process by creating a new _template.hbs_ file within the _/app/pods/styleguide-freestyle/_ folder and adding the required "Ember Freestyle" syntax.

**Example:** the contents of the _styleguide-freestyle/subsection-buttons/template.hbs_:

```
{{#freestyle-subsection name='buttons' section=section}}

  {{#freestyle-usage "c-button1" title="Default Button"}}
    {{c-button title="My Button"}}
  {{/freestyle-usage}}

  {{#freestyle-usage "c-button-@block" title="Button as block component"}}
    {{#c-button}}
      <strong>Block</strong> content <!-- can contain HTML -->
    {{/c-button}}
  {{/freestyle-usage}}

{{/freestyle-subsection}}

```

## Displaying Data in Freestyle Components

The quickest way to add "data" to be used by the components is by adding a structure to the "styleguide-freestyle/controller" for now.

In the current set up we have two collections:

- "colorPalette"
- "products"

**Note:** We will migrate this controller.js into the "route.js" soon.


# Switching layouts

> This technique can be used in case you need new complete page layouts.

Wrapping elements in a specific layout can be done using [Ember Components](https://guides.emberjs.com/v2.5.0/components/defining-a-component/) applied as block-level elements.
The layout components are basically element containers. In short, change the layout component, change the page layout.

## Routes define main templates

When a route renders a page with a specific layout generate a new layout component.
Add the new layout component to the "_template.hbs_" file of the route by using the block notation.
The HTML content is therefor [wrapped within the component](https://guides.emberjs.com/v2.5.0/components/wrapping-content-in-a-component/).

## Create a new layout

Use ``ember-cli``:

```
ember g component l-my-new-layout
```

### Naming layouts

Layout components should be prefixed with the string "`l-`".

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





# Code Guidelines

**Important:** Make sure to use an editor which supports and applies [.editorconfig](http://editorconfig.org/#download) files!

## Editor Configuration

Note for Visual Studio Code: install the official "[vscode-editorconfig](https://github.com/Microsoft/vscode-editorconfig)" extension.

## Code Linting

Make sure to [install eslint](https://www.npmjs.com/package/eslint) and activate linting in your editor of choice.


# Getting Started with EmberJS

We have gathered Ember JS tutorials and videos which should help you understand how Ember works.

Please make sure to go through [the Ember JS official documentation](https://guides.emberjs.com/v2.5.0/getting-started/quick-start/) at least once.


# Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
