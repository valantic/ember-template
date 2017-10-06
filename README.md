# Ember Project Template

This project will get you started developing an Ember application in no time.

The style guide is applying [the Ember Freestyle living styleguide](https://github.com/chrislopresto/ember-freestyle) system for Ember apps.

## Requirements

### System requirements

* ember-cli version 2.12.3
* node version: 6.7.0
* npm version: 3.10.3

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

### Browser support

| Operating systems | Browser |
| --- | --- |
| Windows | ?? |
| Mac OS X | ?? |

| Devices | Browser | Viewport |
| --- | --- | --- |
| Phone 1 | ?? | ?? |
| Tablet 1 | ?? | ?? |


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

## Code Guidelines

> **Important:** Make sure to use an editor which supports and applies [.editorconfig](http://editorconfig.org/#download) files!

### Editor Configuration

Note for Visual Studio Code: install the official "[vscode-editorconfig](https://github.com/Microsoft/vscode-editorconfig)" extension.

### JavaScript Linting

Make sure to [install ESLint](https://www.npmjs.com/package/eslint) and activate linting in your editor of choice.
We don't recommend to use other linting tools, because we customize just the eslint config.

When installing the project for the first time running `npm install`, the system will install our own _eslint-config-movento_ configuration project which includes the required settings for ESLint.

- More information about ESLint can be found at <https://eslint.org>
- The movento configuration for Stylelint can be found at <https://git.movento.com/movento-public/eslint-config-movento>

### SCSS Linting

We're using Stylelint to lint our stylesheets. Unfortunately Stylelint can currently not be integrated into `ember test`. So please set up your IDE to lint your styles while working on them or use the console command `npm run stylelint`.

When installing the project for the first time running `npm install`, the system will install our own _stylelint-config-movento_ configuration project which includes the required settings for Stylelint.

- More information about Stylelint can be found at <https://stylelint.io>
- The movento configuration for Stylelint can be found at <https://git.movento.com/movento-public/stylelint-config-movento>

### SCSS Autoprefixer

We are using a Autoprefixer for vendor prefixes. So you don't have to care about vendor prefixes in writing css / scss.
The config about browser support you can set in the ember-cli-build.js file in the root directory.

- Documentation (https://github.com/kimroen/ember-cli-autoprefixer)
- Browser specification (https://github.com/ai/browserslist#queries)

## Getting Started with EmberJS

We have gathered Ember JS tutorials and videos which should help you understand how Ember works.

Please make sure to go through [the EmberJS official documentation](https://guides.emberjs.com/v2.5.0/getting-started/quick-start/) at least once.

## Getting Started

This is the full explanation on how to access the code for this project so you can locally run it and extend upon it.

First of all: make sure to have NodeJS (npm) and bower installed!

Get access to the ember-project-template repository:

- Generate a SSH key ([Github Help](https://help.github.com/articles/generating-an-ssh-key/))
- Add SSH key to your repository account throught the CodebaseHQ website.

### Starting with a clean git history

If you're starting a new project based upon the "ember-project-template", use the following process to get started:

```
$ cd my-new-project
$ git init
$ git fetch --depth=1 -n git@codebasehq.com:movento2/ember-sandbox/ember-project-template.git
$ git reset --hard $(git commit-tree FETCH_HEAD^{tree} -m "initial commit")
```

### Working with the ember-project-template

If you want to make changes to the "ember-project-template", you should follow this process.

Clone the repository to a local folder.

Open a terminal window and execute this command in your _projects_ local folder:

    git clone git@codebasehq.com:movento2/ember-sandbox/ember-project-template.git

You should have a new folder "ember-project-template" in the active folder _cd_ into it.

Run the following commands in the terminal window within the new folder:

    npm install
    bower install

When npm and bower are done installing all the dependencies on your machine, it's time to run Ember.

First run the Ember-cli server:

    ember s

The output in the terminal should look something like this:

```
Livereload server on http://localhost:49152
Serving on http://localhost:4200/
Build successful - 18517ms.
```

Now open a browser and behold the app in all its glory on this URL:

    http://localhost:4200    

When you make changes to the code with server running Ember will refresh the site in your browser (Livereload is taking care of this).

If you haven't read through the Ember Getting Started Guide yet, now is definitely the time.

The app code resides in the _/app_ folder where you now can add your own code.

*Tip* Major changes to the applicatin will require a server restart! For instance changes to services and adding new components.

## Building the Application

Ember-cli generates all files in the "/dist" folder by default. It will concantenate and optimize JavaScript and CSS for us.

* `ember build` - this will run the development build
* `ember build --environment production` or shorter `ember build --prod` - runs the production build

### Production Build

When performing an application build determined for "production" we should run ember-cli build with the option `--prod`.
This will make sure that only the actual HTML, CSS and JavaScript for the components which make up the site will be generated.
We currently have set up the production build to *exclude* all pods in the _/app/pods/styleguide-freestyle_ folder.

*Note* At this time the _/dist_ folder will still include the CSS from _/app/styles/style-guide.scss_.
We're working on removing this file for production builds.

The system which is removing the unnecessary folders and files is set up in the _/lib/addon-styleguide_ [in-repo-addon](https://ember-cli.com/extending/#developing-addons-and-blueprints).

## Usage Guide

This EmberJS app will generate the Living StyleGuide based upon "HTML Components" written in [HTMLBars](http://emberjs.com/api/modules/ember-htmlbars.html),
the EmberJS templating system is based upon [HandleBars JS](http://handlebarsjs.com/).

When generating elements using _ember-cli_, it will create the new files as "pods" in the _/pods_ folder.

## Ember-cli

Make use of the many generators [ember-cli](https://ember-cli.com/user-guide/) offers us.

To get help, enter `ember help generate` on the command line.

## Customizing a component

Ember will render all components in a default "div" wrapper element. We choose to avoid this wrapper element and define every new component with a `tagName` and optional `classNames` properties defined in the _component.js_ file. 

For instance the component _c-header_ will have this _component.js_ script:

```
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: ['c-header']
});
```

And this will render the following Ember element:

```
<header id="ember663" class="ember-view c-header">
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

## Getting started with Ember Freestyle (living style guide)

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

### Creating Components and Displaying them in Ember Freestyle

All styleguide components will be organized in the _components_ folder.

*Note* Prefix names of actual components with "`c-`".

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

*Note* Currently this is a manual process by creating a new _template.hbs_ file within the _/app/pods/styleguide-freestyle/_ folder and adding the required "Ember Freestyle" syntax.

**Example:** the contents of the _styleguide-freestyle/subsection-buttons/template.hbs_:

```
{{#section.subsection name='buttons'}}

  {{#freestyle-usage "c-button1" title="Default Button"}}
    {{c-button title="My Button"}}
  {{/freestyle-usage}}

  {{#freestyle-usage "c-button-@block" title="Button as block component"}}
    {{#c-button}}
      <strong>Block</strong> content <!-- can contain HTML -->
    {{/c-button}}
  {{/freestyle-usage}}

{{/section.subsection}}

```

### Displaying Data in Freestyle Components

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

More information can be found in the Ember documentation on the "Customizing a Component's Element" page.

## Switching layouts

> This technique can be used in case you need new complete page layouts.

Wrapping elements in a specific layout can be done using Ember Components applied as block-level elements.
The layout components are basically element containers. In short, change the layout component, change the page layout.

### Routes define main templates

When a route should render a page with a specific layout generate a new layout component.
Add the new layout component to the "_template.hbs_" file of the route by using the block notation.
The HTML content is therefor wrapped within the component.

### Naming layouts

Layout components should be prefixed with the string "`l-`".

For example: _l-default_ or _l-product-page_ are good layout component names.

### Create a new layout

Use ``ember-cli``:

```
ember g component l-my-new-layout
```

### Example layout

```
{{#l-default}}
  <h1>Hello!</h1>
  <p>Welcome to our ember project!</p>
  {{outlet}}
{{/l-default}}
```

The "default layout" page is currently nothing more than a "yield output", with the required HTML to define a specific layout:

```
<em>Default layout</em>
{{yield}}
```

## Generating static HTML files from the Ember Project

We can apply [Ember Fastboot][] to render the HTML pages including all components and dynamic parts.

The script _scrape.sh_ will apply _wget_ to go through a predefined list of URLS and copy the HTML into the _./static-dist_ folder.

Steps to render the Ember application to re-usable HTML files:

1. Make sure to have *wget* and *zip* installed on your OSX machine. Check the [Homebrew][] documentation on how to do this.
2. Install Ember fastboot: ``$ember install ember-cli-fastboot``
3. Start Ember Fastboot server: ``$ember fastboot --environment=production --serve-assets``
4. Add the Ember application routes to go through which need to be rendered to HTML.
5. Open another command console (within the project folder) and run ``$sh ./scrape.sh``
6. Check for a static copy of the site in the folder _./static-dist_

Make sure to give the _scrape.sh_ file executable rights first:

```
chmod u+x scrape.sh
```

If scrape ran successfully you see this file and folder structure:

```
static-dist
├── assets
│   ├── ember-sandbox-6b4c4b23e6904e48842c4511fa384c4d.js
│   ├── ember-sandbox-b10dad43d4f464b79cc187772228206f.css
│   ├── images
│   │   └── logo-movento-5ad1b7ed3504328b94aa3c48afba87af.png
│   ├── vendor-8f89c8afa4a30c46d670e84227771a80.js
│   └── vendor-d41d8cd98f00b204e9800998ecf8427e.css
├── index.html
├── readme
│   └── index.html
└── views
    ├── index.html
    ├── order-list
    │   └── index.html
    └── product-page
        └── index.html
```

The _scrape.sh_ will also generate a _deliver_ folder where it will gather zip files of the generated "static" files.

*Important notes:*

- We are currently using Ember Fastboot version _v1.0.0-beta.4_. Development of Ember Fastboot might break things in future releases.
- The proof-of-concept works with on the current Ember Sandbox project while it is very simple. On more complete, full fledged projects, things might break.
- This HTML file rendering will currently only work on mac OSX due to its dependencies on Unix tools, *wget* and *zip*.
- The shell script will remove the output folder before every execution.
- JavaScript is not executed by _wget_ so only pure static HTML is saved, hence Ember Fastboot.
- Currently we need to manually take care of the list of pages to render to HTML in the scrape.sh file.
- Static assets like CSS and images are also copied to the _./scrape-dist_ folder if they are first rendered by ember-cli!
- There are a couple of important "[Known Limitations](https://github.com/ember-fastboot/ember-cli-fastboot#known-limitations)" regarding rendering Ember apps which we need to take into account.

## To do

- [x] Add check to the script to see if the required tools are available. _Update 2017-07-13 : scrape.sh does a check for wget and zip._
- [x] Add zip generation to the script to automatize the HTML delivery process. _Update 2017-07-13 : scrape.sh will now generate zip files._
- [ ] Automatically generate a list of routes to go through.

## Credits

Thanks goes to [Martin Malinda](https://twitter.com/martinmalindacz) for the idea of using wget and a shell script!

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* [Ember Fastboot][]
* [Homebrew][]

Development Browser Extensions

* [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
* [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


[Ember Fastboot]: https://www.ember-fastboot.com/
[Homebrew]: http://brew.sh/
