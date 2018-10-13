# URL Shortener

This is a URL Shortener built on top of Node, Express and React & Redux. It's a working in progress. Already identified areas that need refactoring.

Features:
  - Give a long URL and we return a shorter one
  - Navigate to the shortened URL and we'll automatically redirect you to the original URL
  - URL was already shortned? It's OK! We'll still find your original URL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node and Yarn already installed on your machine

* [Node](https://nodejs.org/en/download/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

* [Yarn](https://yarnpkg.com/en/) - FAST, RELIABLE, AND SECURE DEPENDENCY MANAGEMENT.

### Installing

A step by step series of examples that tell you how to get a development env running

First, setup the code in your local by running bellow command:

```
yarn setup
```

Then, run below command to get started:

```
yarn dev
```

You are now able to open up your browser and navigate to **http://127.0.0.1:3000**

## Running the tests

For running tests, all you need to do is to execute a one of the following commands:

  - server tests:
  Note: Please remember you need to have the server running first so you can run its tests. Bellow command will run the server:
  
  ```
    yarn server
  ```

  and bellow command will run its tests

  ```
    yarn test:server
  ```


  - client tests:
  ```
    yarn test:client
  ```

Remember to always execute these scripts from the root

## Authors

* **Eduardo Silva** - *Initial work* - [Github](https://github.com/eduardo305)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
