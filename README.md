![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React WikiCountries

## Introduction

After spending too much time on GitHub, you found a [JSON database of countries](https://raw.githubusercontent.com/mledoze/countries/master/countries.json) and you decide to use it to create your Wikipedia for countries!

![](https://media.giphy.com/media/fdUHHKI36bTVduRDfB/giphy.gif)

## Setup

- Fork this repo
- Clone this repo

```shell
$ cd lab-wiki-countries
$ npm install
$ npm start
```

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 0 | React Router installation

Don't forget to install the React Router:

```shell
$ npm install react-router-dom
```

And setup the router in your `src/index.js` file:

```jsx
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

### Bootstrap installation

We will use [Bootstrap V4](https://getbootstrap.com/) for the design :+1:

```sh
$ npm install bootstrap
```

```javascript
// src/index.js
import 'bootstrap/dist/css/bootstrap.css';
```

## Instructions

### Iteration 1 | Create components

In this iteration, we will focus on general layout. Before you start, inside `src` folder, create `components` folder. There you will create at least 2 components:

- `CountriesList`: For the general layout
- `CountryDetail`: This is the component that will receive the country code (`cca3`) in the URL. This is actually the id of the country (example: `/ESP` for Spain, `/FRA` for France).

To help you, we gave you an example of a page inside `example.html`.

If you want to style it, refresh your memory on Bootstrap in the [docs](https://getbootstrap.com/docs/4.0) or check out how we approached to styling in the `example.html`.

For Windows users, there is no emoji for the `flag`. Instead, you can rely on these links:

- France: https://www.countryflags.io/fr/flat/64.png
- Germany: https://www.countryflags.io/de/flat/64.png
- Etc.

### Iteration 2 | Create the entire application

Everything is in the title. Good luck :smile:

In this case, you should use only 1 `<Route />` for `CountryDetail`.

Your `App` component should **always** show the list of countries.

Happy coding! :heart:
