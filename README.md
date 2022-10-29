# Note-Taker

## Demo
https://watch.screencastify.com/v/G9ZvyK1KFgYxDYaVl8k3

## Introduction
This project lets the user write notes and save them in their browser. You can pull up saved notes and see what you wrote in them.
## Installation
```
npm i
node server.js
```

## Build Process
Import necessary packages like express and uuid. Instantiate the express server. Create the HTML routes.
Break down the API routes into GET, POST, and DELETE and their functionalities. Create the API routes.

## Code Snippet
```
fs.readFile(dbPath, 'utf8', (err, data) => {
// if an error, console log out error
if (err) {
    console.error(err);
}
    // else push the new note to the end of the notes database 
    else {
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile(dbPath, JSON.stringify(notes), (err) => err ? console.error(err) : console.info('Note has been added.')
        );
    }
});
```

## Languages and Technology
HTML<br>
CSS<br>
Javascript<br>
Node.js<br>
npm<br>
Express.js<br>
fs.js<br>
uuid.js<br>

## Author
[GitHub](https://github.com/PeterKim89)<br>
[LinkedIn](www.linkedin.com/in/peter-kim89)<br>
[Email] Peter.Kim@uconn.edu

## License
[MIT](https://choosealicense.com/licenses/mit/)<br>
Copyright (c) [2022] [Peter Kim]