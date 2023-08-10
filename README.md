# Scrabble UI

Backend runs on port 8082. If you need to change this, you also have to change in src/app/configuration/configuration.service.ts

### Running the application:
* Clone the repository.
* Install node modules, run `npm i` in root of the project.
* Run `ng serve`. Navigate to `http://localhost:4200/`.
* Run backend (instruction in backend's REAMDE.md).
* Please note that if you need to change frontend port, you must also change it in the backend.


## Functionality

#### Valid word section
* User can add a new valid word.
If the word is already listed as valid, or it contains any illegal characters, the word is not saved and the user is shown a corresponding message.
If the word was successfully listed as valid, the user is shown such message.
* User can view all the valid words in a table.

#### Scrabble section
* User can enter a word in text input and submit it.
Whether the word is listed as valid, or not, the user is shown a message, points for the word and total points.
If the word is listed as valid, the user will be granted points for the word. Otherwise, the user will be docked 10 points.
The user is also shown a history of their submitted words and how much these words granted them points, as well as their total points.

* User can view points guide (how many points each letter gives).
