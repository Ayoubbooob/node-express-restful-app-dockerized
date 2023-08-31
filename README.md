# Dockerized Node.js App with MongoDB and Mongo Express

Welcome to our Dockerized Node.js app project, designed to help you practice using Docker, MongoDB, and learn about concepts like container networking, ports, and more!

## Project Overview

This project features a Node.js app connected to MongoDB, with the added bonus of Mongo Express for easy database management. Docker is used to containerize the entire application, allowing you to seamlessly manage dependencies and environments.

## Prerequisites

Before you begin, make sure you have the following installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Node.js: [Install Node.js](https://nodejs.org/)
- MongoDB (optional for local development): [Install MongoDB](https://docs.mongodb.com/manual/installation/)

## How to Run

1. Clone this repository to your local machine:

   ```bash
   git clone git@github.com:Ayoubbooob/node-express-restful-app-dockerized.git

   cd your-nodejs-docker-app-folder-path
   ```

2. Install Node.js dependencies:
    ```bash
    npm install
    ```
3. Create a .env file in the project root directory to set environment variables:
   MONGO_URI=mongodb://mongo:27017/your-database-name

   Replace your-database-name with the name of your MongoDB database.

4. Build and run the Docker containers using Docker Compose:

    ```bash 
    docker-compose up -d
    ```

5. Access the Node.js app at: http://localhost:3000

6. Access Mongo Express at: http://localhost:8081

## Docker Network and Container Names
In this project, Docker sets up a bridge network for the containers to communicate. The container names and ports are as follows:

network name: mongo-network
Node.js App: node-app (port 3000)
MongoDB: mongoDb (port 27017)
Mongo Express: mongo-express (port 8081)

## Cleanup
To stop and remove the Docker containers, run:

```bash 
docker-compose down
```
## Learning Resources

Feel free to explore more about Docker and containerization:

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [MongoDB Official Documentation](https://docs.mongodb.com/)
- [Node.js Official Documentation](https://nodejs.org/en/docs/)

Happy coding and Dockerizing! 🚀

















