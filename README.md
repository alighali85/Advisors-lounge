
#  Welcome to Advisor Lounge!

  

Hi there,

as a code challenge I created this app, it is a simple advisors platform, helps users to filter and find the suitable advisor by its name, or rating.

once you open the app, you see a list of all the advisors, as a grided cards.

  

#  How to run the app

- clone the app repository from [HERE](https://github.com/alighali85/Advisors-lounge)

- cd the app directory

- run `yarn` to install the dependencies

  

In the project directory, run:

  

###  `yarn start`

  

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

###  `yarn test`

  

Launches the test runner in the interactive watch mode.<br />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

#  App TechStack

**this app built using:**

-  [React](https://reactjs.org/) as a JS framework.

-  [TypeScript] (https://typescriptlang..org)

-  [SCSS] for styles.

-  [Jest](https://jestjs.io/) as a test runner.

-  [faker](https://www.npmjs.com/package/faker) to generate data.

-  [Express](https://expressjs.com/) as server
  
  
#  App components and functions

-  **Main app nav bar**:

  - at the left side (app titel)
  - at the right side serach field

-  **Main app page**:

	- has at left colmun a filter component

	- has on the right side, grid list of all advisors
  
  - each advisors card, has a rating component where the users can change the advisor rate.

	- clicking on the rating filter will update the advisors based on each one rating.
  
  - clearing the rating filter will update the advisors list, and reset the view to its original state.
