
### Installation

- Clone the repository locally using - `git clone git@github.com:tattle-made/shell.git`

- Open terminal and dowload all dependencies using `npm install`

- Start the web-app using `npm start` 


### Development
This project now depends on tattle-ui-library for its styling.
As part of the start script, i have added a build-css step which starts a sass utility. this utility constantly watches the sass files in the tattle-ui-library and anytime a change is made into those files, it compiles them all into one stylesheet.css into the src/ directory.

This enables you to have both shell and tattle-ui-library open in your visual studio code project and work on them simultaneously while keeping the code bases distinct.
