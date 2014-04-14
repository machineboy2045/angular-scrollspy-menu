angular-scrollspy-menu
======================
Minimalistic AngularJS scrollspy directive.


##Demo
[Try the Plunker here](http://plnkr.co/edit/9ziRjO?p=preview)

## Requirements

- [AngularJS](http://angularjs.org/)
- [JQuery](http://jquery.com/)

## Usage

We use [bower](https://github.com/bower/bower) for dependency management. Install Angular-selectize into your project by running the command

`$ bower install angular-scrollspy-menu`

If you use a `bower.json` file in your project, you can have Bower save angular-scrollspy-menu as a dependency by passing the `--save` or `--save-dev` flag with the above command.

This will copy the angular-scrollspy-menu files into your `bower_components` folder, along with its dependencies. Load the script files in your application:
```html
<script type="text/javascript" src="bower_components/jquery/jquery.js"></script>
<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script type="text/javascript" src="bower_components/angular-scrollspy-menu/dist/scrollspy-menu.js"></script>
```

(Note that `jquery` must be loaded before `angular` so that it doesn't use `jqLite` internally)


Add the selectize module as a dependency to your application module:

```javascript
var myAppModule = angular.module('MyApp', ['scrollspy-menu']);
```


Create a menu in your view template:

```html
<ul class="nav nav-pills nav-stacked" scrollspy-menu='{offset:20, duration:200}'>
  <li> <a href="#step1" class="active">Step 1</a> </li>
  <li> <a href="#step2">Step 2</a> </li>
  <li> <a href="#step3">Step 3</a> </li>
</ul>
```

...and the divs to scroll to:
```html
<div id="step1"> <h2>Step 1</h2> </div>
<div id="step2"> <h2>Step 2</h2> </div>
<div id="step3"> <h2>Step 3</h2> </div>
```

##Config
- OFFSET: Lets say you have a fixed top nav with a height of 70px. You will want to specify an offset of 70 on the scrollspy menu.
- DURATION: Duration defines the duration of the scroll animation in milliseconds.