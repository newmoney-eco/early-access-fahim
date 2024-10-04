# Signup Modal React Component

## Overview

This project serves as the non-production environment for New Money's beta app.
Currently only the signup modal is developed, and is lacking backend functionality.

## Components

### `SignupModal`

The `SignupModal` is the parent component that coordinates the entire signup flow. It contains the logic for progressing through the different steps of the signup process. This component is responsible for all the logic allowing a user to progress through the signup process.

#### State Management

- **`step`**: A state variable (`useState`) that tracks the current step in the signup process. The initial step is set to `1`.
- **`nextStep`**: A function to increment the `step` by `1`, moving the user to the next step.
- **`prevStep`**: A function to decrement the `step` by `1`, allowing the user to return to the previous step.

#### Child Components

- **`SignUp`**: The first step in the signup process where users enter their email or phone number.
- **`CodeField`**: The second step where users input a verification code received by email or SMS.
- **`Info`**: The third step where users provide additional personal information, including their name, business name, and zip code (each of which are child components to the Info component).
  - InfoName
  - InfoBusiness
  - InfoZip
- **`WelcomeSlide`**: The final step that welcomes the user after successfully completing the signup process.

#### Assets

- **`logo`**: New Moneys logo.
- **`plug`**: An image of New Moneys plug.

#### `Dashboard`

The `Dashboard` is going to be the homepage for our app.

Inside the Dashboard component there will be two children Sidebar & HomePage. Both of these components will have their own children which will house the actual content. For the sidebar that means the clickable options for the homepage, climate badge, survey and about us. For the homepage it will be all of the tiles that display important information; climate facts, real time data, etc.

Tile will be a dynamic component which will take in the following props { heading, body, checkbox toggle } which will be used to render different types of text, links, graphics, progress bars, depending on what sort of tile we would like to display.

Sidebar (parent component)

- HomePage (child component)
- ClimateBadge (child component)
- ClimateSurvey (child component)
- AboutUs (child component)

HomePage (parent component )

- Tile
- (maybe progress bar)

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-folder>
npm install
```

To open live server

```bash
npm run start
```
