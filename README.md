# Ember-sandbox

This project is a playground to get know ember and define best practices before we start our first client project

This style guide is applying [the Ember Freestyle living styleguide](https://github.com/chrislopresto/ember-freestyle) system for Ember apps.

## Project Planning

Make sure to check here first to see what we are currently working on and what is still to be done.

We're gathering all todos and ideas in [the _CodeBaseHQ_ Tickets section](https://movento2.codebasehq.com/projects/ember-sandbox/tickets?report=all).

## Project Communication

We use Slack and the [_#int_frontend_](https://movento.slack.com/archives/int_frontend) channel to communicate about this project.

## Installation notes

* ember-cli version 2.5.1
* node version: 6.2.1 (There is a warning in ember-cli, but no restriction at package.json. It seems to work. "WARNING: Node v6.2.1 has currently not been tested against Ember CLI and may result in unexpected behaviour")
* npm version: 3.8.0
* pods are active [more about pods](http://www.programwitherik.com/ember-pods/)

### Developers Prerequisites

You will need the following things properly installed on your computer (Mac OSX).

* [Homebrew][]
* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [ESLint](http://eslint.org)
* [scss-lint](https://github.com/brigade/scss-lint)
* [Watchman](https://ember-cli.com/user-guide/#watchman)

## Quick Getting Started

After installing Ember and all its dependencies you can have the application running locally after executing the following commands.:

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

Once the Ember application is completely installed you can start the Ember HTTP server.

* `ember server` or `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200)

It is also possible to "serve" the production environment:

* `ember server --prod` or `ember s --prod`

It is possible to have a unit test server active in a separate terminal window. Run the following commands:

* `ember test`
* `ember test --server`

Open a browser window and open the Ember application on http://localhost:4200 
If the window is blank, check the browser console.

# Code Guidelines

> **Important:** Make sure to use an editor which supports and applies [.editorconfig](http://editorconfig.org/#download) files!

## Editor Configuration

Note for Visual Studio Code: install the official "[vscode-editorconfig](https://github.com/Microsoft/vscode-editorconfig)" extension.

## Code Linting

Make sure to [install ESLint](https://www.npmjs.com/package/eslint) and activate linting in your editor of choice.
We don't recommend to use other linting tools, because we customize just the eslint config.

When installing the project for the first time running `npm install`, the system will install our own _eslint-config-movento_ configuration project which includes the required settings for ESLint.

# Getting Started with EmberJS

We have gathered Ember JS tutorials and videos which should help you understand how Ember works.

Please make sure to go through [the EmberJS official documentation](https://guides.emberjs.com/v2.5.0/getting-started/quick-start/) at least once.

# Getting Started with this Sandbox

This is the explanation on how to access the code for this project so you can locally run it and extend upon it.

## CodebaseHQ Repo

- Get access to the repository
  - Generate a SSH key ([Github Help](https://help.github.com/articles/generating-an-ssh-key/))
  - Add SSH key to your repository account
- Clone the repository to a local folder

## Ivoclar's code Repo

- Get access to the repository
  - Generate a SSH key ([Github Help](https://help.github.com/articles/generating-an-ssh-key/))
  - Add SSH key to your repository acccount
- Clone the repository to a local folder  


# Building the Application

Ember-cli generates all files in the "/dist" folder by default. It will concantenate and optimize JavaScript and CSS for us.

* `ember build` - this will run the development build
* `ember build --environment production` or shorter `ember build --prod` - runs the production build

## Production Build

When performing an application build determined for "production" we should run ember-cli build with the option `--prod`.
This will make sure that only the actual HTML, CSS and JavaScript for the components which make up the site will be generated.
We currently have set up the production build to *exclude* all pods in the _/app/pods/styleguide-freestyle_ folder.

Note: At this time the _/dist_ folder will still include the CSS from _/app/styles/style-guide.scss_.
We're working on removing this file for production builds.

The system which is removing the unnecessary folders and files is set up in the _/lib/addon-styleguide_ [in-repo-addon](https://ember-cli.com/extending/#developing-addons-and-blueprints).

# Usage Guide

This EmberJS app will generate the Living StyleGuide based upon "HTML Components" written in [HTMLBars](http://emberjs.com/api/modules/ember-htmlbars.html),
the EmberJS templating system is based upon [HandleBars JS](http://handlebarsjs.com/).

When generating elements using _ember-cli_, it will create the new files as "pods" in the _/pods_ folder.

# Ember-cli

Make use of the many generators [ember-cli](https://ember-cli.com/user-guide/) offers us.

To get help, enter `ember help generate` on the command line.

## Customizing a component

Ember will render all components in a default "div" wrapper element. We choose to avoid this wrapper element and define every new component with a `tagName` and optional `classNames` properties defined in the _component.js_ file. 

For instance the component _g-header_ will have this _component.js_ script:

```
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['g-header']
});
```

And this will render the following Ember element:

```
<header id="ember663" class="ember-view g-header">
...
</header>
```

It is possible to create components with dynamically switching class names.

For instance the component _g-section-title_'s _component.js_ script looks like this: 

```
export default Ember.Component.extend({
  classNames: ['section-title'],
  tagName: 'div',
  classNameBindings: ['isBold:section-title--bold'],  // Adds the class name "section-title--bold" when isBold === true
  isBold: false                                       // default setting
});
```

The `isBold` property can then be set when the component is used.

```
{{#c-section-title isBold=true}}Seasonal Products{{/c-section-title}}
```

This will render the _c-section-title_ component with the class name `section-title--bold` active in the HTML output.

# Getting started with Ember Freestyle (living style guide)

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

## Creating Components and Displaying them in Ember Freestyle

All styleguide components will be organized in the _components_ folder.

**Note:** Prefix names of actual components with "`c-`".

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

The quickest way to add "data" to be used by the components is by setting up an "Ember service".

    ember g service colorpalette --pod

This will create the service in the `/app/services` folder.
Use this service in the application _components_ by injecting it.

```
colorPalette: inject.service('colorpalette')
```

Then use the `{{colorPalette}}` variable in your templates, like so:

```
{{freestyle-palette
  colorPalette=colorPalette.colours
  title='Dummy App Color Palette'
  description='This component displays the color palette specified in freestyle/palette.json'
}}
```

More information can be found in the Ember documentation on the "[Customizing a Component's Element](https://guides.emberjs.com/v2.5.0/components/customizing-a-components-element/)" page.

## Switching layouts

> This technique can be used in case you need new complete page layouts.

Wrapping elements in a specific layout can be done using [Ember Components](https://guides.emberjs.com/v2.5.0/components/defining-a-component/) applied as block-level elements.
The layout components are basically element containers. In short, change the layout component, change the page layout.

### Routes define main templates

When a route should render a page with a specific layout generate a new layout component.
Add the new layout component to the "_template.hbs_" file of the route by using the block notation.
The HTML content is therefor [wrapped within the component](https://guides.emberjs.com/v2.5.0/components/wrapping-content-in-a-component/).

### Naming layouts

Layout components should be prefixed with the string "`l-`".

For example: _l-default-page_ or _l-product-page_ are good layout component names.

### Create a new layout

Use ``ember-cli``:

```
ember g component l-my-new-layout
```

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

# Generating static HTML files from the Ember Project

We can apply [Ember Fastboot][] to render the HTML pages including all components and dynamic parts.

The script _scrape.sh_ will apply _wget_ to go through a predefined list of URLS and copy the HTML
into the _./scrape-dist_ folder.

Steps to render the Ember application to re-usable HTML files:

1. Make sure to have *wget* installed on your local OSX machine. Check the [Homebrew][] documentation on how to do this.
1. Install Ember fastboot: ``$ember install ember-cli-fastboot``
2. Start Ember Fastboot server: ``$ember fastboot --environment=production --serve-assets``
3. Open another command console (within the project folder) and run ``$sh ./scrape.sh``
4. Check for a static copy of the site in the folder _./scrape-dist_

Make sure to give the _scrape.sh_ file executable rights first:

```
chmod u+x scrape.sh
```

*Important notes:*

- We are currently using Ember Fastboot version _v1.0.0-beta.4_. Development of Ember Fastboot might break things in future releases.
- The proof-of-concept works with on the current Ember Sandbox project while it is very simple. On more complete, full fledged projects, things might break.
- This HTML file rendering will currently only work on mac OSX due to its dependencies on Unix tools.
- The shell script will remove the output folder before every execution.
- JavaScript is not executed by _wget_ so only pure static HTML is saved.
- Currently we need to manually take care of the list of pages to render to HTML.
- Static assets like CSS and images are also copied to the _./scrape-dist_ folder.
- There are a couple of important "[Known Limitations](https://github.com/ember-fastboot/ember-cli-fastboot#known-limitations)" regarding rendering Ember apps which we need to take into account.

We will be adding zip generation and Git pushes to the script. We will also look into a 
solution to automatically generate a list of pages to go through.

Thanks goes to [Martin Malinda](https://twitter.com/martinmalindacz) for the idea of using wget and a shell script!

# Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* [Ember Fastboot][]
* [Homebrew][]

Development Browser Extensions

* [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
* [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


[Ember Fastboot]: https://www.ember-fastboot.com/
[Homebrew]: http://brew.sh/
