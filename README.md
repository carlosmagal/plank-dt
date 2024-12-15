# Code Snippet Refactoring & Explanation Tool

This project consists of a web application where a user can input a code snippet and receive:

- A natural-language explanation of what the code does.
- A refactored version of the code.
- A step-by-step reasoning of how the explanation was derived.

It was built using technologies such as **React JS**, **TailwindCSS**, **Express**, and **Openai API**.

## Features

- Input box and chat message display styled to resemble a conversation interface.

- A responsive UI with light and dark themes.

- Modularized API connection for handling messages.

- Smooth scroll-to-message functionality.

- Integration of skeleton loaders during message processing.

- Proper error handling according to openai api.


## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

## Installation

Install dependencies for the client:
```bash
cd client
npm install
```

Install dependencies for the server:
```bash
cd ../server
npm install
```

## Running the Project

**The client and the server must run simoustanly**

### Server Setup

Set up environment variables by creating a `.env` file in the `server` directory and replacing `your-api-key-here` with your actual OpenAI API key:
 ```env
 OPENAI_API_KEY="your-api-key-here"
 ```

Navigate to the `server` directory and start it:

   ```bash
   cd server
   npm run dev
   ```

By default, the server will run on [http://localhost:3000](http://localhost:3000)

### Client Setup

Navigate to the `client` directory and start it:

   ```bash
   cd client
   npm run dev
   ```

By default, the app will be available at [http://localhost:5173](http://localhost:5173).

Enjoy! =)

