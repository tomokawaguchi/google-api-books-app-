# Google API Books Project
This project was built in React JS with Google Books API. The app allows users to search books from the Google book library. 

The project available at https://google-api-books.tomok.dev

![project snapshot](https://github.com/tomokawaguchi/google-api-books-app-/blob/main/src/assets/project-snapshot.png?raw=true)

## Project Brief
### Aims
- This project was conducted as part of Nology program.
- The aim of the project is to reinforce my learning in React, to practice how to work with API by going through the documentations, and to understand some of the most important JavaScript concepts such as Asynchronous JavaScript, Promises, Fetching.

### MVP
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

**Other:**
- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.



The app was developed with react hooks with functional components only. The SCSS modules are utilised for the styling of the app.

Some of the majour functionalities are:

- A search input field to enter keyword and the Api call will be made based on the keywords entered.
- By default the search results will be showcased by relevance, however you can also sort it by newest by toggling the buttons.
- The results are by default displayed with grid style but you can also switch to list style.
- Upon click on each book card, the modal shows up with the further details of the clicked book.
- A load more button below the list of results triggers additional books data to be fetched. The app is set to fetch 12 books per load.
