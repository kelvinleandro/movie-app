# Movie App

A comprehensive React Native application for exploring movies, featuring authentication and user data storage using Firebase. Utilizes the TMDB API, styled with styled-components, and built with Expo and TypeScript. This app allows users to browse movies, view detailed information, and mark movies as favorites.

## Preview
<div style="display: flex; flex-direction:row; flex-wrap: wrap;">
  <img src="src/assets/preview_home.png" alt="Home screen" style="width: 200px;" />
  <img src="src/assets/preview_explore.png" alt="Explore screen" style="width: 200px;">
  <img src="src/assets/preview_profile.png" alt="Profile screen" style="width: 200px;">
  <img src="src/assets/preview_search.png" alt="Movie Detail 2" style="width: 200px;">
  <img src="src/assets/preview_movie_detail_1.png" alt="Movie detail 1" style="width: 200px;">
  <img src="src/assets/preview_movie_detail_2.png" alt="Movie Detail 2" style="width: 200px;">
  <img src="src/assets/preview_fullcast.png" alt="Full cast screen" style="width: 200px;">
</div>

## Features

- **Explore Movies:** Browse through a list of movies fetched from the TMDB API.
- **Movie Details:** View detailed information about the movies, including synopsis, cast and crew, year, runtime, and similar movies.
- **Favorites:** Mark movies as favorites and save them using Firebase Firestore.
- **Search Functionality:** Search for movies using the TMDB API.
- **Authentication:** Handle user authentication with Firebase Authentication.

## Tech Stack

- **Framework:** React Native (Expo)
- **Programming Language:** TypeScript
- **Styling:** Styled-Components
- **API Integration:** Axios for TMDB API requests
- **UI Components:** React Native Paper
- **Backend:** Firebase (Authentication and Firestore)

## Getting Started

### Prerequisites

- Node.js installed on your machine
- An API access token from TMDB for fetching movies
- Expo Go installed on your phone or an Android/iOS emulator
- A Firebase project with Authentication enabled and Firestore with a collection called `users`

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/kelvinleandro/movie-app.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Add your TMDB API access token in `src/api/instance.ts`:
   ```js
   const ACCESS_TOKEN = "place_your_access_token_here";
   ```
4. Set up Firebase in the project:
    - Create a Firebase project in the Firebase console.
    - Enable Authentication and Firestore in your Firebase project.
    - In the Firestore database, create a collection named `users`.
    - Add your Firebase project configuration in `./firebaseConfig.ts`:
      ```js
      const firebaseConfig = {
        // your firebase project configuration
      };
      ```
    - You can find your firebaseConfig in the Firebase console under project settings.
5. Start the app:
   ```sh
   npm start
   ```

## Project Structure

- `src/api`: Contains the API instance and helper functions for TMDB API requests.
- `src/assets`: Static assets like icons and splash screen images.
- `src/components`: Reusable components structured by screens and UI elements.
- `src/constants`: Application constants, e.g., color definitions.
- `src/context`: React contexts, e.g., for managing favorite movies.
- `src/hooks`: Custom React hooks, e.g., for API calls.
- `src/navigation`: Navigation setup using React Navigation.
- `src/screens`: Individual screens of the app.
- `src/types`: TypeScript type definitions specific to the app.
- `src/utils`: Utility functions.

## Note

This app is for practice purposes and now includes Firebase to persist favorites data across app reloads. To fully utilize the TMDB API and Firebase features, you must obtain and configure your own API access token and Firebase project configuration.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
