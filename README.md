# Module Challenge 11: Express.js Note Taker

## Heroku Link 

https://note-taker-dc-a0a34efe6010.herokuapp.com/

## Description

The Note Taker application is a web-based tool that allows users to create, view, and delete notes. It provides a simple and intuitive interface for managing personal notes efficiently.

Technical Details:
- The frontend of the application is built using HTML, CSS, and JavaScript. It includes a landing page with a link to the notes page, where users can view existing notes and create new ones.
- The backend is implemented using Node.js and the Express.js framework. It handles the server-side logic and provides API endpoints for interacting with the note data.
- The application follows a client-server architecture, with the frontend making HTTP requests to the backend API to retrieve, save, and delete notes.
- The backend uses the built-in `fs` (File System) module to read and write note data to a JSON file (`db.json`) on the server. This allows for persistent storage of notes across sessions.
- The backend API includes the following endpoints:
  - `GET /api/notes`: Retrieves all the existing notes from the `db.json` file and sends them as a JSON response to the client.
  - `POST /api/notes`: Receives a new note object from the client, assigns a unique identifier to it, saves it to the `db.json` file, and sends the saved note back to the client.
  - `DELETE /api/notes/:id`: Receives a note ID as a parameter, removes the corresponding note from the `db.json` file, and sends a success status code to the client.
- The application uses Express.js middleware to parse incoming request bodies, serve static files, and handle routing.
- The codebase is organized into separate modules for better maintainability. The `htmlRoutes.js` file handles the routes for serving HTML files, while the `apiRoutes.js` file handles the API endpoints for note management.
- Error handling is implemented to provide meaningful error messages to the client in case of any server-side issues.

The Note Taker application showcases the integration of a frontend user interface with a backend API using Node.js and Express.js. It demonstrates how to build a full-stack application that allows users to interact with a server-side database (in this case, a JSON file) to perform CRUD (Create, Read, Update, Delete) operations on notes.

The modular architecture, along with the use of Express.js and its middleware, makes the application scalable and maintainable. The frontend communicates with the backend using HTTP requests, enabling a seamless user experience for managing notes.

Overall, the Note Taker application serves as a practical example of building a web application using modern web technologies and following best practices for server-side development with Node.js and Express.js.



## Usage

Click the link at the top to start taking your own notes.

![Note Taker Homepage](https://github.com/dylanmatthewcoito/mc11-Note-Taker/assets/71201051/62b004be-a2e5-4bb0-8992-4b153d0409d6)
![Note Taker functionality](https://github.com/dylanmatthewcoito/mc11-Note-Taker/assets/71201051/0c437029-b936-4253-a934-f4ca19ff2027)
