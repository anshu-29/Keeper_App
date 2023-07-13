# Keeper App

This repository contains the code for the Keeper app, a note-taking application built using React.js and React components. The app allows users to create, edit, and delete notes, providing a simple and intuitive user interface.

## Installation

To run the Keeper app locally, follow these steps:

1. Clone this repository to your local machine using the following command:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd keeper-app
   ```

3. Install the required dependencies using npm or yarn:

   ```shell
   npm install
   ```

   or

   ```shell
   yarn install
   ```

## Usage

Once you have completed the installation process, you can run the Keeper app locally by running the following command:

```shell
npm start
```

or

```shell
yarn start
```

This command starts the development server and opens the app in your default browser. You can access it at [http://localhost:3000](http://localhost:3000).

## Features

The Keeper app offers the following features:

- Create new notes: Users can create new notes by clicking on the "Add" button and filling in the note's title and content.
- Edit notes: Existing notes can be edited by clicking on the note card and modifying the title and content.
- Delete notes: Users can delete a note by clicking on the trash bin icon on the note card.
- Real-time updates: Any changes made to the notes are immediately reflected on the screen without requiring a page refresh.

## Folder Structure

The folder structure of the Keeper app is as follows:

- `src`: Contains the source code of the application.
  - `components`: Contains reusable React components used in the app.
  - `App.jsx`: The main component that renders the application.
  - `index.js`: Entry point of the application.

## Dependencies

The main dependencies used in this project are:

- `react`: JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods that can be used at the top level of your app.
- `prop-types`: Runtime type checking for React props and similar objects.
- `uuid`: Package to generate unique IDs for the notes.

## Contributing

Contributions to the Keeper app are welcome! If you have any improvements, bug fixes, or new features to propose, feel free to open a pull request. Please ensure that your changes are well-tested and follow the coding conventions of the project.

## License

The Keeper app is open-source software released under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Acknowledgements

The Keeper app was built based on the [Angela Yu's React.js course](https://www.udemy.com/course/the-complete-web-development-bootcamp/). Special thanks to Angela Yu for providing the educational resources and inspiration for this project.

If you have any questions or feedback, please don't hesitate to reach out. Happy note-taking with Keeper!
