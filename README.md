![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React WikiCountries

<details>
  <summary>
    <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class.

  Upon completion of this exercise, you will be able to:

  - Create a React application that contains multiple pages using React Router.
  - Perform side effects in a component with the `useEffect` hook.
  - Use the `useEffect` hook to fetch data from an API and save it in the component's state.
  - Use React Router's `useParams` hook to access URL parameters.
  - Create a page component that dynamically renders content based on URL parameter values.
  - Use a CSS framework to style a React application.

  <br>
  <hr>

</details>


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


## Instructions 


### Iteration 0 | Install Dependencies

The application you will create in this exercise will use [Bootstrap](https://getbootstrap.com/) for styling and React Router for managing multiple pages and navigation. To begin, install the Bootstrap and React Router packages:

```shell
npm install react-router-dom bootstrap
```

<br>

To make the Bootstrap styles available in the entire app, import the Bootstrap stylesheet at the top of the `src/index.js` file:

```javascript
// src/index.js
import "bootstrap/dist/css/bootstrap.css";
```

<br>



### Iteration 1 | Create Basic components

In this iteration, we will focus on the general layout by creating components and organizing them into appropriate folders.

1. Inside the `src` folder, create two folders named: `components` and `pages`. 

   

2. Next, create the following components in their respective folders:

​	**Components Folder:**

- `src/components/Navbar.js`: The `Navbar` component should display the basic navbar with the LAB name "React | WikiCountries".



​	**Pages Folder:**

- `src/pages/HomePage.js`: The `HomePage` component should initially display a headline with the text "WikiCountries: Your Guide to the World".
- `src/pages/CountryDetailsPage.js`: The `CountryDetailsPage` component should initially display a headline with the text "Country Details".

<br>



3. To help you structure and style the components, we provided examples inside the `example` folder. The example code is using Bootstrap classes that will provide you with basic layout and styling.

   

   If you decide to copy the code provided in the `example` folder, keep the following in mind:

   - In React, the `class` html attribute is defined using `className`

   - For inline CSS, use a JavaScript object and name each CSS property in camelCase (more details [here](https://react.dev/reference/react-dom/components/common#applying-css-styles)).

<br>



### Iteration 2 | Setup React Router and Create Routes

Building upon the basic components created in the previous iteration, it is time to take the next step and set up React Router to handle navigation and create multiple pages in your app.



1. Set up React Router in your `src/index.js` file:

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

2. In your `App.js` set up two routes that render the following pages:

- Route `/`, which renders the `HomePage` component
- Route `/:countryId`, which renders the `CountryDetailsPage` component



Once you are done setting up the routes, your app should render two pages as shown in the expected result below.



<details>



  <summary>See Expected Result</summary>

  

![visiting home page and country details pagea]()





  <br>

</details>



<br>



### Iteration 3 | Fetch Countries Data and Display as a List

In this iteration, you will work on the `HomePage` component to retrieve the countries data from the API and render it as a list. 

To do this, you must use React hooks, specifically:

- `useState` to create a state variable to store the countries data retrieved from the API

- `useEffect` to set an effect that will make a request to the API for the countries data

The endpoint returns a JSON response in the form of an *array*, containing the data of all the countries in the world. Save the response data in a state and then render it as a list. 



**Tip:** You may want to `console.log` the response data to help you visualize the structure of the country objects and how the data is structured.



The rendered list of countries should show the country name.



<details>




  <summary>See Expected Result</summary>

  

![visiting home page and country details page]()





  <br>

</details>



<br>

### Iteration 4 | Country List with Links

In this iteration, you will make the list of countries you rendered in the previous iteration dynamic by adding clickable `Link`s for each country. Clicking on a `Link` should navigate the user to the country details page.



To do this, update the list of countries and make each list item a React Router `Link`. Each list item should show the country name and the flag. For the small picture of the flag, you can use the lowercase `alpha2Code` and embed it in the URL as shown below:


- France: https://flagpedia.net/data/flags/icon/72x54/fr.png
- Germany: https://flagpedia.net/data/flags/icon/72x54/de.png
- Brazil: https://flagpedia.net/data/flags/icon/72x54/br.png
- etc.

<br>



To allow users to navigate to a specific country's details page, embed the country's `alpha3Code` in the URL for each `Link`. When any of the country links on the `HomePage` is clicked, the `alpha3Code` should show in the URL and the user should be navigated to the country details page (`CountryDetailsPage`). 





<details>




  <summary>See Expected Result</summary>

  

![visiting home page and country details page]()





  <br>

</details>



<br>



### Iteration 5 | Show Country Details

In this iteration, you will work on the `CountryDetailsPage` component to display the information of a specific country. To get the country information, you will need to make a request to the Countries API using the `alpha3Code` of the selected country.



The Countries API provides access to country-specific data via a the endpoint `/countries/:alpha3Code`. The endpoint takes the country's `alpha3Code` and returns a JSON response containing the country info. 

Here are a few examples how to construct the request URL using the country's `alpha3Code`:

- United States: https://ih-countries-api.herokuapp.com/countries/USA
- Japan: https://ih-countries-api.herokuapp.com/countries/JPN
- India: https://ih-countries-api.herokuapp.com/countries/IND





When any of the country links on the `HomePage` is clicked, the user should be navigated to the `CountryDetailsPage`. The `alpha3Code` of the country will be available through the URL parameters. To retrieve the data for a specific country from the API, you should make a `GET` request to the API using the `alpha3Code`, as explained above.



To access the URL parameters, from the browser's URL bar, use the React Router hook `useParams`. For a reminder on how to set up the `useParams` hook and access the URL parameters, check [this example](https://reactrouter.com/en/6.10.0/hooks/use-params).



In the `CountryDetailsPage` component, set up an effect using the `useEffect` hook. The effect should make a `GET` request to the API and fetch the data for the specific country. Once you receive the response, you should save the data in a state variable.

The effect should run after the initial render, and each time that the URL parameter with the `alpha3Code` changes.



<details>




  <summary>See Expected Result</summary>

  

![visiting home page and country details page]()





  <br>

</details>



<br>



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
