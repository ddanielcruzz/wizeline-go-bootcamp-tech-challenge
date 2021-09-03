# Wizeline Go Bootcamp Tech Challenge

- README with instructions on how to run the project (language version, framework, or running dependencies, if any).

## Description

This is a project for being selected for Wizeline Go Bootcamp.

## Requirements

This project runs using `Node v.14.5` and `yarn`. We use TypeScript for type safety, but you don't need to have it installed globally.

If you don't have yarn, you can install it with the following command `npm i -g yarn`

## How to run the project

After being sure you have Node and yarn in your system, you can run `yarn` in the root of the project to install the dependencies. Once you have the dependencies installed, you can run the project in dev mode by using the command `yarn dev`. This will create a server on port `3000`.

The available endpoints are:

- `/` and will return "Hello World"
- `/joke` and will return a Chuck Norris joke

## Production environment

If you would like to run the project for production you can type `yarn start`. The previous command will compile the TypeScript code into JavaScript code.

## Testing

The project uses Jest for testing, you can run the tests with the command `yarn test`
