# SRR (Simple React Redux)

SRR has been created in order to help people to start with [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/). By using SRR you will be able to build large and scalable application comfortably.

## Getting Start
First of all, install dependencies:
```bash
$ npm run install
```
Then, you launch the dev server:
```bash
$ npm run dev
```
Enjoy your [app](localhost:3000) !

## Development Tools
Workflow is built on top of  [Webpack](https://webpack.github.io/docs/) using hot module reloading and ES6 transpilation. Feel free to play with it :
```bash
$ npm run dev
```
 Then, work on your frontend app and it will magically update changes on your browser.

## Backend
Backend is based on [Express](http://expressjs.com/) web framework. It's a minimal server that will allow you to only serve your app.

## Frontend
Frontend is based on React and Redux. React is used for build the User Interface and Redux is used to handle the data flow.
The frontend achitecture is higly inspired from redux tutorials:
+ actions: are payloads of information that send data from your application to your store.
+ components(Presentational Components): They describe the look but don't know where the data comes from, or how to change it.
+ constants: just a folder with constants and particulary actionTypes
+ containers (Container Components): They prepare data to be passed to presentationnal components.
+ reducers: specify how the application's state changes in response



