# ToDo List App

This is a full-stack simple ToDo List App that allows users to add, edit, delete and check tasks. The app was built with JavaScript, React, Node.js, MySQL and Sequelize.

## Features

- Add a new task
- Edit an existing task
- Delete a task
- Check off a completed task
- View all tasks

## Installation

To install and run this app locally, follow the steps below:

### Front-End:
1. Clone the repository: `git clone git@github.com:joao-gui-marcos/todo-app.git`
2. Navigate to the front-end project directory: `cd todo-app`, `cd front-end`
3. Install front-end dependencies: `npm install`
4. Create a `.env` file and add the necessary environment variables (e.g. react app api url)
5. Start the application: `npm start`

### Back-End:
1. Clone the repository: `git clone git@github.com:joao-gui-marcos/todo-app.git`
2. Navigate to the project directory: `cd todo-app`, `cd back-end`
3. Install back-end dependencies: `npm install`
4. Create a `.env` file and add the necessary environment variables (e.g. database connection details)
5. Start the server: `npm start`

### Database:
1. Run a MySQL instance.
2. Example with Docker, exposing port 3306:
    `docker run -p 3306:3306 --name mysql_container -e MYSQL_ROOT_PASSWORD=your_password -d mysql:5.7`

## API Endpoints

- `GET /tasks` - Returns a list of all tasks
- `POST /task` - Adds a new task
- `PUT /task/:id` - Updates an existing task with the specified ID
- `DELETE /task/:id` - Deletes the task with the specified ID

## Error Handling

The app handles errors gracefully and returns appropriate error messages. For example, if a user tries to add a task that already exists, the app will return a `409 Conflict` error.

## Production Link

The app is hosted on [https://todo-app-production1.up.railway.app/](https://todo-app-production1.up.railway.app/).

## Credits

This app was built by [Joao Guilherme](https://github.com/joao-gui-marcos).
