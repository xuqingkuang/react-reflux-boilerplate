> The project was stopped maintaince, please move your focus to brand new React Redux Boilerplate:
>
> https://github.com/xuqingkuang/react-redux-boilerplate



# React Reflux Boilerplate

Another template that makes react and reflux web app developmet easier.

## Demo

[Click here for demo](http://xuqingkuang.github.io/react-reflux-boilerplate)

## Features

* React 0.14
* React Router 1.0.0
* Reflux 0.3.0 ( Refactor of Flux )
* Node 5.0 Compatible
* Babel 6.1.x for ES7 support
* Browser Live Reload based on [react-transform-hmr](https://github.com/gaearon/react-transform-hmr), it build codes pretty fast!
* CSS / HTML / JS minification / Image optimization when built
* JS code duplication removal during built
* Code is minimized and pure write with Javascript ES7, focused on core features only.

If you are interested, please read the `package.json` file for all installed modules.

Feel free to contribute or fork it if you find this repo could help the community.

## TODO

* Testing framework for React - [Jest](https://github.com/facebook/jest)
* A resposive solution with [Radium](http://projects.formidablelabs.com/radium/)
  or [react-responsive](https://github.com/contra/react-responsive)

## Installation

### Requirements

* Node 4.0 is required for better experiences, previous versions maybe compatible
  but not tested yet.
* Gulp must be installed globally with `$ npm install -g gulp`

### Start

1. Clone the repo - `$ git clone https://github.com/xuqingkuang/react-reflux-boilerplate`
2. Install the requirements - `$ cd react-reflux-boilerplate && npm install`

### Commands / Gulp Tasks

#### Start develop environment

```$ gulp```

Run gulp directly without any options will build the codes and start a
development web server on `http://localhost:8000`, then you can open a browsre to
access the page, the codes in `src/` will be compiled at run time when change
anything, and the browser will auto reload.

By the way, the step is running on memory, there's no any files generated.

#### Build the codes for production

```$ gulp production```

The codes will be compiled and placed to `public/` folder, all of them are
minimized.

####  Clean the built folder

```$ gulp clean```

The all files in `public` folder will be removed.

### Structure

1. `src/`       - all of sources
2. `assets/`    - all of static files
3. `public/`    - built minimized codes, for production environment.

__Note__ : `assets/` and `src/` will be compiled into `public/` folder when you
run `gulp production` command.

## Known Issues

### Build interrupted by react-router babel issue

Because of react-router didn't support Babel 6 yet, it's need to update the
`node_modules/react-router/.babelrc` file manually by following contents.

```{
  "presets": ["babel-preset-stage-0"]
}
```

and install `babel-preset-stage-0` by command  `$ npm install babel-preset-stage-0`
for temporary solution for building broken.

But I think the step will could be ignore after next react-router released.
