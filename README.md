# Code-Foo Program 2022 Application - Front-End
A single-page web app for IGN video playlists, created using React 17, Material-UI v5, and react-player library. https://neil-kuldip.github.io/ign-codefoo10-application/

### Steps for Build
- ```cd ign-codefoo10-application```
- ```npm install```
- ```npm start```

### Project Description
Applications loads video sources, metadata, and assets from [IGN's API](https://ign-apis.herokuapp.com/videos). Data is then rendered to the video player, description, and playlist components.

### Implementation Details

#### Component Styling
I utilized Material UI's components to create a flexbox display for different screen dimensions. Through the use of sx props, styling the content of the components for the users in mind was much easier.

#### Components
The application can be split to the three components I listed above: the video player, video description area, and playlist. Through making Jsonp requests, I was able to pass video data as props down to each of the children components as intended with React's design. On update of the current video info being played, each of the three components would rerender.

#### HTTP Requests
This was the hardest challenge when doing this application for me. After much research into CORS Single-Origin Policy and the documentation of IGN's API, I was able to utilize a compatible Jsonp library that would allow me to utilize the API's permission to use callback functions to retrieve the necessary video data.




