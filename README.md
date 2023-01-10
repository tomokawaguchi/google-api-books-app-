# Google API Books Project
This project was built in React JS with Google Books API. The app allows users to search books from the Google books library. 

The project available at https://google-api-books.tomok.dev

![project snapshot](https://github.com/tomokawaguchi/google-api-books-app-/blob/main/src/assets/project-snapshot.png?raw=true)

## Project Brief
### Aims
The aim of the project is to reinforce my learning in React, to practice how to work with API by going through the documentations, and to understand some of the most important JavaScript concepts such as Asynchronous JavaScript, Promises, Fetch data.


### MVP (conducted as Nology course work)

**Basic Requirements**

Create a page that allows users to search for books Page should include the following:

- Header section introducing the page
- Form containing a text input and a submit / search button
- When the submit button is clicked you need the request books from the Google books API using the input value as your query string
- The books that you receive should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes
- You should use async / await for your request code, NOT .then

**Styling (required):**

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like. Styling must use BEM, and each block should have its own SCSS file Your palette should use variables

**Application Design (required):**

- You should separate DOM functions and non-DOM functions in different modules.
- Write as many non-DOM functions as you can Functions should do 1 thing, and should be as pure and reusable as possible
- Always use iterators over loops
- Always parametrize and abstract large pieces of duplicate code.

**Other (optional but highly recommended):**

- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Technical Implementation

### Approaches
The app was developed with react hooks with functional components. The SCSS modules are utilised for the styling of the app.

Some of the featured functionalities are:

**1. A Search Field and Fetching Books**

The search field takes keywords and the Google API call will be made based on the keywords entered. This will be triggered by a click event on the search button or Enter key press event. Once the either of events is triggered, `fetch()` function will initiate the process of getting data. The API is dynamicallly takes the endpoint based on the keyword that a user entered. 

**2. Sorting Books Results** 

The app allows users to re-order the books that was fetched via API. This is availabe by toggling the "Relevance"/ "Newest" buttons on the frontend. The state of this is managed with `[isRelevant, setIsRelevant] = useState(true);` and every updates of this state, it will trigger re-rendering the components as well as the fetching data.

**3. Book Card and Modal**

When an each book card/grid is clicked, the modal will be opened up with the further details of the respective book. The selected book data will be filtered by the unique ID from the current whole data on click. In order for users to close a modal, they can click the Close button on the modal or anywhere in the black faded section around it as event bubbling has been taken care of.

**4. Load More Button**

At the bottom of the list of results, there are a button that allows users to fetch and see more books results. Upon click the button, additional API request will be made. In this app, I have set the 12 books are fetched and added to the frontend on each request.


## Refection
- This project was the frist react app that I have built through Nology course. The project enabled me to have a better undestanding of React components life cycle, the power of React Virtual DOM and state management with React Hoocks such as `useState()` and `useEffect()`. 

- One of the challenges that I faced was to control the number of re-rendering components. When multiple states are stored with `useState()`, it triggers the app to re-rendering quite often. To avoid the unnecessary or unexpected re-render, I have learnt to use a new React Hook, `useRef()`, which won't rigger the re-rendering.

- Another challenges with this project was utiling the newly updated state on the event callback function. Since I was trying to utilise the sate right after the state was updated in the same thred/call back function, I always was getting the data one before/behind. This gave me a great opportunity of understaning when/how component is re-rendered along with when state is updated in React.

## Future Goals
- Currently there are many states managed in the App.jsx level, thus prop drilling is happening. To improve the codebase, I would like to refactor the way I can manage these states such as using React `Context`, or manage the states and props at the parant components by re-organising the components structure.
-  I would like to try utilising [Styled Component](https://styled-components.com/) as I had an intention of organing the components by the styling similality by creating a wrapper/parant components that can be reused based on the sections that takes similar stylings.  
 





