![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React WikiCountries

## Introduction

After spending too much time on GitHub, you found a [JSON dataset of countries](https://ih-countries-api.herokuapp.com/countries), and you decided to use it to create your Wikipedia of countries!

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-wiki-countries-1.gif" alt="Example - Finished LAB" />
</p>

<br>


## Setup

- Fork this repo
- Clone this repo
- Open the LAB and start:

```bash
cd lab-wiki-countries
npm install
npm start
```

<br>


## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request so that your TAs can check your work.

<br>


## Getting Started

Clean the `App.js` component so that it has the following structure:

```jsx
// src/App.js
import "./App.css";

function App() {
  return <div className="App"></div>;
}
export default App;
```

<br>


## Instructions 


### Iteration 0 | React Router Installation

Remember to install the React Router:

```shell
npm install react-router-dom
```

And setup the router in your `src/index.js` file:

```jsx
// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);


reportWebVitals();
```

<br>


### Bootstrap Installation

We will use [Bootstrap](https://getbootstrap.com/) for the design :+1:

```sh
npm install bootstrap
```

To make the Bootstrap styles available in the entire app, import the stylesheet in `index.js`:

```javascript
// src/index.js
import "bootstrap/dist/css/bootstrap.css";
```

<br>


## Instructions

### Iteration 1 | Import JSON data

We will be working with data coming from the `src/countries.json` file. 
Import the file in `App.js` and store it in a state variable named `countries`.


<br>

----

### Iteration 2.1 | Create components

In this iteration, we will focus on the general layout.

Before you start, inside the `src` folder, create the `components` folder. There you will create at least 3 components:

- `Navbar`: Displaying the basic navbar with the LAB name
- `CountriesList`: This component should render a list of `Link`s, each having the country's `alpha3Code` embedded in the URL. Clicking on any of the `Link`s should render the country details component.
- `CountryDetails`: This component should render the details of the clicked country, and it should <u>receive</u> the country code (`alpha3Code`) through the URL parameters. The `alpha3Code` is the id of the country (e.g., `/ESP` - Spain, `/FRA` - France).

<br>

To help you with the structure of the components, we included for you an example of the page structure in `example.html`.

The CSS styling should be done using Bootstrap. Check how the *Bootstrap CSS class names* are applied for styling in the `example.html` and refer to Bootstrap [docs](https://getbootstrap.com) for additional details.

<br>

**NOTE:** If you decide to copy the code provided in the `example.html`, keep the following in mind:
- In React, the `class` HTML attribute is defined using `className`
- For inline CSS, use a JavaScript object and name each CSS property in camelCase (more details [here](https://reactjs.org/docs/dom-elements.html#style)).

<br>


### Iteration 2.2 | `Navbar` component

Create a navbar component that displays the title *LAB - WikiCountries*.

<br>


### Iteration 2.3 | `CountriesList` component

This component should render a list of `Link`s, each having the country's `alpha3Code` embedded in the URL. Clicking on any of the `Link`s should render the country details component.

The array with country details should be passed to the `CountriesList` component as a prop, coming from the `App.js` component's state variable `countries`.

You may also want to check the `counties.json` file to get familiar with the structure of the objects.

<br>

For the small picture of the flag, you can use the lowercase `alpha2Code` and embed it in the URL as shown below:


- France: https://flagpedia.net/data/flags/icon/72x54/fr.png
- Germany: https://flagpedia.net/data/flags/icon/72x54/de.png
- Brazil: https://flagpedia.net/data/flags/icon/72x54/br.png
- etc.

<br>

### Iteration 2.4 | `CountryDetails` component and `Route` setup

Now that our list of countries is ready, we should create the `CountryDetails` component.

The `CountryDetails` component should display information about the clicked country as shown in the example at the beginning of the lab ([see example](#Introduction)).

<br>

This component should be rendered using the `react-router-dom` `Route` with the `path` set to be a *URL parameter*, allowing us to capture the country code (`alpha3Code`) passed via the URL.

The `CountryDetails` component should also receive the array of countries as a prop. Here's a reminder on how to do this:

```jsx
// Example
<Route path="/:id" element={ <SomeComponent someData={someData} /> } />
```

The `CountriesList` component renders a list of links where each `Link` has a unique `alpha3Code`. Once a `Link` is clicked, the `alpha3Code` shown in the URL can be accessed through the URL parameters. 

To access the `alpha3Code` shown in the URL (in the browser's page address bar), you should use the React Routers hook `useParams`. 

For a reminder on how the `useParams` hook works and how to use it to access the URL parameters, check [this example](https://reactrouter.com/docs/en/v6/api#useparams).

<br>

**NOTE:** If you haven't added CSS, the country details may be displayed at the very bottom of the page.

<br>


----

### Iteration 3 | Linking it all together

Once you're done creating the components, the structure of elements that your `App.js` will render should look somewhat like this:

```jsx
// ...

<div className="App">
  <Navbar />

  <div className="container">
    <div className="row">
      <CountriesList countries={countries} />
      {/* React-Router Route rendering the CountryDetails should go here */}
    </div>
  </div>
</div>

// ...
```

<br>

The data from the `App.js` state variable `countries` is passed to the `CountriesList` component as a prop.

<br>

----

### Iteration 4 | Fetch countries data from an API

Instead of relying on the static data from a `json` file, let's do something more interesting and get the data from an actual API.

In `App.js`, make a `GET` request to the URL [https://ih-countries-api.herokuapp.com/countries](https://ih-countries-api.herokuapp.com/countries). Use the data returned from the response as the list of countries. You can use either `fetch` or `axios` to make the request. 

You should use the `useEffect()` hook to set an effect that runs only once and makes a request to the API. Once you receive the response data, save it in a state variable. The request should happen first thing when the application loads.

<br>

----

### Iteration 5 | Bonus | Fetch one country data from an API

Using the `useEffect` hook, set an effect in the `CountriesDetails` component. The effect should make a request to the RestCountries API and fetch the data for the specific country. You can construct the request URL using the country's `alpha3Code`. Example:

- United States: https://ih-countries-api.herokuapp.com/countries/USA
- Japan: https://ih-countries-api.herokuapp.com/countries/JPN
- India: https://ih-countries-api.herokuapp.com/countries/IND

The effect should run after the initial render, and each time the URL parameter with the `alpha3Code` changes.

**Happy coding!** :heart:

<br>

## FAQs


<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>

  <br>

  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 

  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I update a state variable in my React component? How do I use the useState hook in my React component?</summary>

  <br>

  To update a state variable in a React component, you should use the `useState` hook. This hook returns an array with two elements: the **current value** of the state variable and a **function to update it**. Here is an example of how to use `useState` to update the `count` state variable:

  ```jsx
  import { useState } from "react";

  function MyComponent() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    }

    return (
      <div>
        <button onClick={handleClick}> Increment </button>
        <p>Count: {count}</p>
      </div>
    )
  }
  ```

  In the above example, the `handleClick` function is called when the button is clicked, and it updates the `count` state variable by calling the `setCount` function with the new value: `setCount(count + 1)`. 
  The component will re-render every time a state variable gets updated.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>How do I use the <code>useEffect</code> hook in my React component?</summary>

  <br>

  The `useEffect` hook (also called the *Effect Hook*) allows you to run your side effects. Data fetching, setting up a subscription, starting a timer, and manually changing the DOM in React components are all examples of common actions (aka *side effects*) that you may want to set up in your components.

  The `useEffect` hook allows you to run side effects during all three lifecycle phases:

  - **Mounting phase**
  - **Update phase**
  - **Unmounting phase**

  <br>

  ##### Syntax

  The syntax of the `useEffect` is the following:

  ```jsx
  // Actual syntax
  useEffect(() => {}, []);
  ```

  As you can see `useEffect` takes two arguments:

  ```jsx
  // Pseudo code:
  useEffect(didUpdate, dependencyArray);
  ```

  - `didUpdate` - a function containing the code (side effect) we want to run.
  - `dependencyArray` - the array of values that the effect depends on. React watches this array for any change and when a value in this array changes, the effect will run.

  <br>

  ##### `useEffect` - Mounting phase

  We can set the `useEffect` to **run code in the mounting phase**, **only once** right after the component is rendered for the first time. 

  To do so, we use the `useEffect` Hook with the following syntax:

  ```jsx
  // Run the effect only once 
  // during the mounting phase
  
  useEffect(() => {
    // Do something ...
  }, [])
  ```

  The empty array `[]` means that “this effect doesn’t depend on anything”, and will therefore run only once, after the initial render.

  <br>

  ##### `useEffect` - Unmounting phase

  Often, *effects* create resources that need to be cleaned up before the component leaves the screen, such as a subscription or a timer, like in the previous example. Before the component *unmounts*, we should cancel all remaining processes to prevent memory leaks.

  To do this, the function passed to **`useEffect` may return a cleanup function**. Example:

  ```jsx
  useEffect(() => {
    // Do something ...

    // Returned function is known as a "cleanup function",
    // which React will automatically run
    // right before the component is removed from the DOM
    return () => {
      // Perform clean up actions here
    };
    
  }, [])
  ```

  <br>

  ##### `useEffect` - Conditional updates (Update phase)

  The `useEffect` Hook can also be used to run code during the *Update* phase, whenever there is an update of state or props.

  As you may have noticed, `useEffect` takes a second argument `[]` the *dependency array*. A dependency array is used to specify the values that the effect depends on. Additionally, React keeps track of this array to know if it should re-run the effect. Example:

  ```jsx
  useEffect(() => {
    // Do something ...
    
    // Effect will run again if either `a` or `b` change or are updated
  }, [a, b])
  ```

  <br>

  **Important**: Whenever a value specified in the dependency array updates, React re-runs the effect.

  For a detailed explanation, check the following documentation pages:

  - [React Docs: Synchronizing with Effects](https://beta.reactjs.org/learn/synchronizing-with-effects)
  - [React Docs: `useEffect`](https://beta.reactjs.org/reference/react/useEffect)

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am getting an error: "not defined". How do I fix it?</summary>

  <br>

  The "ReferenceError: variable is not defined" error in JavaScript occurs when you try to access a variable or a function that has not been defined yet or is out of scope. 

  To fix the issue, check that you have defined the variable or function that you are trying to use and double-check the spelling to make sure you are using the correct name.

  In case the variable or a function is defined in another file, make sure that the file has been imported or loaded correctly.

  <br>

  [Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>

  <br>

  There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

  1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

   2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
   To check which remote repository you have cloned, run the following terminal command from the project folder:

   ```bash
   git remote -v
   ```

  If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

  Note: You may want to make a copy of the code you have locally, to avoid losing it in the process.

  <br>

  [Back to top](#faqs)

</details>
