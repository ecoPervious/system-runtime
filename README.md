# System Runtime

[![Build Status](https://travis-ci.org/design-first/system-runtime.svg?branch=master)](https://travis-ci.org/design-first/system-runtime)
[![Coverage Status](https://coveralls.io/repos/github/design-first/system-runtime/badge.svg?branch=master)](https://coveralls.io/github/design-first/system-runtime?branch=master)
[![devDependency Status](https://david-dm.org/design-first/system-runtime/dev-status.svg)](https://david-dm.org/design-first/system-runtime#info=devDependencies)

## What is System Runtime ?

#### a System Runtime Environment

When you code, you do not create an application, you create in fact a [system](https://en.wikipedia.org/wiki/System):
> A system is a set of interacting or interdependent **components** forming an integrated whole.

> A system has **structure**, it contains parts (or components) that are directly or indirectly related to each other.

> A system has **behavior**, it exhibits processes that fulfill its function or purpose.

System Runtime give you the APIs to create the model, components and behaviors of your system.

## How works System Runtime ?

#### Create a system

Use System Runtime APIs to create your system:

```js
// create an app
let app = runtime.system('app');

// add code in the start method
app.on('start', () => console.log('Hello world !'));

// run the app
app.start();
```

Now you can bundle your system into a JSON object:

```js
// create a bundle
runtime.bundle();
```

It will return this JSON:
```json
{
  "_id": "154cd18d0210516",
  "name": "app",
  "description": "",
  "version": "0.0.1",
  "schemas": {},
  "models": {},
  "types": {},
  "behaviors": {
    "1ea9c1d5f811ae1": {
      "_id": "1ea9c1d5f811ae1",
      "component": "154cd18d0210516",
      "state": "start",
      "action": "() => console.log('Hello world !')",
      "useCoreAPI": false,
      "core": false
    }
  },
  "components": {}
}
```

#### Install the bundle in HTML

Just add a link tag in your HTML to install and start your bundle:

```html
<!-- install your bundle -->
<link rel="system" type="application/json" href="app.json">
```

#### Install the bundle in Node.js

Just call *install* API to install and start your bundle:

```js
// require System Runtime
let runtime = require('system-runtime');

// install your bundle 
runtime.install('app.json');
```

## What contains System Runtime ?

#### A metamodel

System Runtime contains a metamodel to help you to design your model. The definition of the model is made on a JSON format called [MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson), no code is needed. 

With [MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson) you can define types, classes, one to one / one to many relationships and multi inheritance between classes. 

[MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson) is based on [UML](http://uml.org), so learning it is very easy.

#### A component factory

System Runtime uses the [Model-Driven Architecture](http://www.omg.org/mda/) approach to create classes based on your design. Use them to instantiate your components. 

#### A NoSQL Database

System Runtime acts as an ODM (Object-Document Mapper) to manage your components as NoSQL Documents. 

System Runtime has a micro NoSQL Database that stores your components and you can export/import them into another System Runtime NoSQL Database. 

Thanks to System Runtime NoSQL Database, you can compose your model with an another one.

#### A workflow engine

System Runtime checks at runtime if the signatures of invoked methods are compliant with your model. 

With System Runtime your components really behave the way you designed them.

## Build

#### Installation

Clone the repository:

```sh
# Clone the repository
$ git clone https://github.com/design-first/system-runtime.git
# Go to the repository
$ cd system-runtime
```

Once you have cloned the repository:

```sh
# install dependencies
$ npm install
```	 	

#### Tasks

```sh
# run tests
$ npm run test
# clean
$ npm run clean
# build System Runtime (on /dist/)
# it will generate System Runtime core system (from /src/system/) 
# and package System Runtime client library
# it will also run jshint and server/client tests
$ npm run build
```	 

## Documentation

* [Quick Start](https://system-runtime.readme.io/docs/quick-start)
* [Guide](https://system-runtime.readme.io/docs/installation)
* [Examples](https://system-runtime.readme.io/docs/a-basic-hello-world)

## Community

* [Code of Conduct](CODE_OF_CONDUCT.md)
* [Contributing Guidelines](CONTRIBUTING.md)

**Do not use System Runtime if you do not believe in Equality and Diversity.**

**System Runtime is not for people of hate.**

## License

Copyright 2017 Erwan Carriou

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. 
