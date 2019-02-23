# Up2 Social Media Project

* Team Members
   * Avonlea Haymart
   * Muhammad Al Juburi
   * Trent Cooper
   * Kyle Thomas
   * Christian Ramos

* Project Description
   * This is a life events social media project. Users are able to post their life events, with a scale of 1-10 of importance. More features include a search function, and a timeline to view other users' posts.
* Technologies Used
  * Bootstrap
  * React
  * MongoDB
  * Node.js/Express
  * Redux
* Running the Code
  * Clone this GitHub repository into a directory of your choice.
  ```git clone https://github.com/coop741/Up2.git```
  * At the root of the directory, run```npm install```.
  * Note: Currently this step is not required. Ensure MongoDB is running. ```mongo```
  * This project requires the back end for full functionality. You can clone that here: ```https://github.com/avhaymart/Up2-BE```
  * Create a .env in the root of the directory with the following contents:
  ``` REACT_APP_CONNECTION_STRING="http://localhost:5000"```
  The backend for this project currently defaults on port 5000. Point this connection string to where your backend is running on.
  * Run ```npm start```.
