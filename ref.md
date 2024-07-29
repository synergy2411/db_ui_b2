# Break Timing

1. Tea break : 11:00AM (15 Mins)
2. Lunch break : 1:00PM (60 minutes)
3. Tea break : 4:00PM (15 minutes)

# To create react app

- npm install -g create-react-app
- create-react-app frontend-react

- npx create-react-app frontend-react [Optional]

- cd frontend-react
- npm start

# To install Bootstrap

- npm install bootstrap

# Purpose of React Library

- to render the UI quickly and efficiently

# Side-effect

- XHR Call
- State Management
- Route Transitioning

# useEffect Flavors -

- useEffect(cb, [])
  > CB will execute only one time
- useEffect(cb, [Dependencies])
  > CB will execute at initial rendering of component
  > CB will execute everytime whenever the mentioned dependncy will change
- useEffect(cb => cleanUpFn, [Dependencies])
  > cb will execute at initial rendering of component
  > Dependencies' value will change
  > cleanUpFn will execute
  > cb will execute
  > cleanUpFn will also execute just before the component unload

# To install JSON Server

- npm install -g json-server@0.17.4
- json-server --version
- create db.json file
- json-server --watch db.json --port=3030 (from Data folder)

# Hooks to watch out - (react.dev)

- useCallback
- useMemo
- useTransition
- useDeferredValue
- useReducer

- useState
- useEffect
- useRef
- useContext
