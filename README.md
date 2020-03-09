![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# React | WikiCountries

## Introduction

After spending too much time on GitHub, you found a [JSON database of countries](https://raw.githubusercontent.com/mledoze/countries/master/countries.json) and you decide to use it to create your Wikipedia for countries!

![](https://media.giphy.com/media/fdUHHKI36bTVduRDfB/giphy.gif)

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "Completed lab"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### React Router installation

Don't forget to install the `react-router-dom` package on your project:

```sh
$ npm install react-router-dom
```

To get started, your should setup the router in your `src/index.jsx` file:

```jsx
// src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

### Bootstrap installation

We will use [Bootstrap V4](https://getbootstrap.com/) for the design :+1:

```sh
$ npm install bootstrap
```

```javascript
// src/index.jsx
import 'bootstrap/dist/css/bootstrap.css';
```

## Instructions

### Iteration 1 | Create the components

In this iteration, we will focus on general layout. You will create at least 2 components:

- `App`: For the general layout
- `CountryDetail`: Your only "view" that will receive the country code (`cca3`) as a parameter in the URL. This value represents the id of the country (example: `/ESP` for Spain, `/FRA` for France).

To help you, we gave you an example of a page inside [`example.html`](https://github.com/sandrabosk/lab-wiki-countries/blob/master/starter-code/example.html)

As a reminder with Bootstrap:

```html
<!-- Grid: https://getbootstrap.com/docs/4.0/layout/grid/#setting-one-column-width -->
<div class="row">
  <div class="col-5">Column 5/12</div>
  <div class="col-7">Column 7/12</div>
</div>

<!-- List group: https://getbootstrap.com/docs/4.0/components/list-group/#links-and-buttons -->
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">Cras justo odio (active)</a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
```

### Iteration 2 | Create the entire application

Everything is in the title. Good luck :smile:

In this case, you should use only 1 `<Route />` for `CountryDetail`.

Your `App` component should **always** show the list of countries.

Happy coding! 💙
