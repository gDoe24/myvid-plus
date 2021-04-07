# MyVids +

MyVids is the last stop shop for finding the lastest movies and shows to watch. Search for your favorite movies/shows and watch the trailers before starting your next journey all here at the low price of FREE. MyVids is a mock video streaming web application supported by TheMovieDB.


## Requirements

For development, you will need to install Node.js in order to use React.
Download Node [here](https://nodejs.org/en/download/)
After installing Node, you should be able to run these commands and get a return value

```
node --version
v12.16.3

npm --version
6.14.4
```

## Getting Started

```
git clone https://github.com/gDoe24/myvid-plus.git
cd myvid-plus
npm install
```

Our tech stack includes the following:

* React
* React/Redux
* Redux-Thunk
* SASS

[Here](https://redux.js.org/introduction/installation) is a good guide to getting started with Redux as you will need to also install devtools 

To install SASS, follow this link [here](https://sass-lang.com/install)

MyVids + also utilizes:

* Swiper.js
* Progressbar.js
* Immer

Download and install the dependencies mentioned above using npm as:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Repo Structure

```
/
├─ public/                      # icons/svg files/ html
├─ src/
│  ├─ actions/                  # Redux/axios actions for TheMovieDB API
│  │  ├─ movieDetailAction/     # actions for movie detail component
│  │  ├─ movies/                # ... for movie components
│  │  ├─ search/                # ... for search components
│  │  ├─ showDetailAction/      # ... show detail component
│  │  └─ shows/                 # ... show components
│  │  └─ types/                 # Redux types page
│  │
│  ├─ components/               # Components
│  │  ├─ layout/                # ... that govern macro layout
│  │  ├─ movies/                # ... that use movie actions/reducers
│  │  ├─ search/                # ... that use search actions/reducers
│  │  ├─ tvshows/               # ... that use show actions/reducers
│  │
│  ├─ reducers/                 # Redux reducers
│  │  ├─ index                  # Combines reducers
│  │  └─ movieDetailReducer     # Reducer for movie detail page
│  │  └─ moviesReducer          # ... for movie components
│  │  └─ searchReducer          # ... for search components
│  │  └─ showDetailReducer      # ... for show detail page
│  │  └─ showsReducer           # ... for show components
│  │
│  └─ styles/        # Scss and Css files
│
├─ .gitignore        # List of files and folders not tracked by Git
├─ .eslintrc         # Linting preferences for JavasScript
├─ LICENSE           # License information for this project
├─ package.json      # Project manifest
└─ README.md         # This file
```