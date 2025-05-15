# eCommerce App

This is a simple eCommerce web application built with **Node.js** and **Express**, and it connects to a **MongoDB** database. The application demonstrates basic functionality such as displaying a welcome message on the homepage and establishing a connection to MongoDB.

Additionally, this project includes a **CI/CD pipeline** powered by **GitHub Actions**, which automates the build and test processes.

---

## Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Setup and Installation](#setup-and-installation)
* [Running the Application](#running-the-application)
* [Running Tests](#running-tests)
* [CI/CD Configuration](#cicd-configuration)
* [License](#license)

---

## Project Overview

This project is a basic eCommerce web app that:

1. Uses **Node.js** and **Express** to serve an API.
2. Connects to a **MongoDB** database.
3. Provides a simple **GET /** route that returns a welcome message.
4. Includes a **Dockerfile** to containerize the application (optional).
5. Automates the build and test processes via a **GitHub Actions** CI/CD pipeline.

---

## Features

* **Simple Web Application**: Displays a welcome message at the root URL (`/`).
* **MongoDB Connection**: The app connects to a local MongoDB instance (or a remote MongoDB URL) for potential future database features.
* **Testing with Jest**: The app includes unit tests for the main route using Jest and Supertest.
* **Docker Support**: The project includes a `Dockerfile` to easily containerize and deploy the application.
* **CI/CD Pipeline**: A GitHub Actions workflow (`ci.yml`) automates the build and test processes.

---

## Technologies Used

* **Node.js** - JavaScript runtime for building the server.
* **Express** - Web framework for handling HTTP requests.
* **MongoDB** - Database used to store data (this can be easily replaced with MongoDB Atlas for cloud storage).
* **Mongoose** - ODM (Object Data Modeling) library for MongoDB in Node.js.
* **Jest** - JavaScript testing framework.
* **Supertest** - HTTP assertions library for testing APIs.
* **Docker** (optional) - For containerizing the application.

---

## Setup and Installation

Follow these steps to set up and run the application locally.

### Prerequisites

Make sure you have the following installed:

* **Node.js** (version 16 or higher)
* **npm** (Node Package Manager)
* **MongoDB** (either locally or use MongoDB Atlas for cloud-based DB)

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/mukesh-ma/devops-sample-app.git
cd devops-sample-app
```

### 2. Install Dependencies

Run the following command to install the required Node.js dependencies:

```bash
npm install
```

### 3. Configure MongoDB

* If you're using **MongoDB locally**, make sure MongoDB is running. You can start MongoDB with the following command:

  ```bash
  mongod
  ```
* Alternatively, you can use **MongoDB Atlas**. If using Atlas, create a cluster and get your connection string, then set the `MONGO_URI` in the `.env` file:

  ```bash
  MONGO_URI=mongodb://<username>:<password>@cluster0.mongodb.net/ecommerce
  ```

### 4. Create `.env` File (Optional)

Create a `.env` file in the root directory if you wish to store sensitive data like the MongoDB URI:

```bash
MONGO_URI=mongodb://localhost:27017/ecommerce
PORT=3000
```

---

## Running the Application

To run the application locally, use the following command:

```bash
npm start
```

The application will be accessible at `http://localhost:3000`, and you should see the following message in your browser:

```
Welcome to the eCommerce App
```

---

## Running Tests

The project includes Jest tests to verify the functionality of the app. To run the tests, use the following command:

```bash
npm test
```

This will run Jest and execute all tests defined in the `app.test.js` file.

---

## CI/CD Configuration

The project includes a **GitHub Actions** workflow located in `.github/workflows/ci.yml`. This workflow will:

1. Run tests automatically when code is pushed to the repository.
2. Build the application and perform health checks.

### Steps for CI/CD

The CI pipeline is triggered by `push` and `pull_request` events for the `main` branch. It will:

* Check out the repository code.
* Set up the Node.js environment.
* Install dependencies.
* Run the Jest tests.
* Optionally build and run Docker containers if a `Dockerfile` is present.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Example CI/CD Workflow (`.github/workflows/ci.yml`)

```yaml
name: CI Pipeline

on:
  push:
    branches:
      - '**'
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Check out the code
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'

    - name: Install dependencies
      run: |
        npm install

    - name: Run tests
      run: |
        npm test

    - name: Build Docker image (optional)
      run: |
        docker build -t ecommerce-app .
```

---

## Conclusion

This project is a basic example of a Node.js application with Express and MongoDB. It includes testing with Jest, CI/CD automation via GitHub Actions, and optional Docker support for containerization.

Feel free to clone and modify the project as needed for your own use cases. If you run into any issues or need help, feel free to open an issue in the repository.

---
