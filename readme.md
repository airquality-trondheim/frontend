# FRISK: An app for air quality in Trondheim

## Table of Contents

- [Description](#Description)
- [How to install and run the project](#How-to-install-and-run-the-project)
- [The application](#The-application)
  - [Home screen](#Home-screen)
    - [Weather screen](#Weather-screen)
    - [Air quality screen](#Air-quality-screen)
  - [Map screen](#Map-screen)
  - [Profile screen](#Profile-screen)
    - [Settings screen](#Settings-screen)
      - [About screen](#About-screen)
      - [FAQ screen](#FAQ-screen)
      - [Privacy policy screen](#Privacy-policy-screen)
  - [Competition screen](#Competition-screen)
    - [Leaderboard screen](#Leaderboard-screen)
    - [Achievements screen](#Achievements-screen)
- [Future work](#Future-work)
- [License](#License)

## Description

This repo contains the frontend code of a project conducted in conjunction with the course _TDT4290 - Customer Driven Project_ the fall of 2020. The project was conducted by seven Computer Science students at NTNU in collaboration with Telenor, NTNU, and Trondheim municipality. The goal of the project was to make an engaging mobile application for distributing information about air quality in Trondheim municipality. The resulting app can be viewed with the Expo CLI app by following the instructions under [How to install and run the project](#How-to-install-and-run-the-project).

## How to install and run the project

1. Clone this repository
1. Navigate to the newly created directory and run `npm install` to install the necessary packages
1. Run the client with the command `expo start` or with `npm start`
1. Scan the QR-code with the Expo-app (available on Google Play store and iOS App Store)

## The application

The application consists of four main screens: _Home_, _Map_, _Profile_, and _Competition_, and eight subscreens: _Weather_, _Air Quality_, _Settings_, _About_, _FAQ_, _Privacy Policy_, _Leaderboard_, and _Achievements_. The hierarchy of these screens and subscreens are shown in Figure 1, and the content of each of them will be explained in this section.

| ![The hierarchy of the screens of the app](./assets/images/Screens.png)                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Figure 1: The hierarchy of the screens and subscreens of the app. The screens closest to the vertical line are the main screens and in order to reach any other screen one has to navigate through one of these. E.g., if a user wants to navigate to the FAQ screen, the user has navigate from the profile screen, to the settings screen, and then to the FAQ screen._ |

**Common for all screens:** All the pages of the app contains a header with the name of the page and a tabbar for navigation on the bottom.

**Common for all subscreens:** All subscreens include a back-button in the upper left corner of theirheader.

### Home screen

| <img src="./assets/gifs/HomeScreen.gif" alt="The home screen" height="450"> |
| --------------------------------------------------------------------------- |
| _Figure 2: The home screen of the app._                                     |

The home screen of the app contains information about the current air quality and weather, the weather forecast for the next two hours, and the air quality forecast for the next hour. The screen can be split into five main components: a dropdown, a half circle, an info-button, a weather card, and an air quality card.

The dropdown contains a scrollable list of different areas in Trondheim. The weather data shown in the app corresponds to the weather forecast for the selected area in the dropdown. Furthermore, the air quality shown corresponds to the predicted air quality in that area. Changing the selected location, will update the data within the app. Furthermore, the dropdowns on the home screen, the weather screen (see [Weather screen](#Weather-screen)), and the air quality screen (see [Air quality screen](#Air-quality-screen)) all displays the same location, and changing one of them will also change the others.

The half circle contains information about the air quality forecast for the current hour. The indicator on the half circle represents the AQI value given by the air quality forecast. Within the half circle, textual information about this air quality is given, where the scale, given by decreasing air quality, is _Lav_ (i.e., low) / _Utmerket_ (i.e., excellent), _Moderat_ (i.e., moderate) / _Bra_ (i.e., good), _Høy_ (i.e., high) / _Mye_ (i.e. a lot), and _Svært høy_ (i.e., very high) / _Svært mye_ (i.e., very much). By pressing the info-button a modal with information about the air quality data becomes visible.

The weather card displays the weather forecast for the current hour and the two following hours. By pressing on this card, the user is taken to the weather screen (see [Weather screen](#Weather-screen)).

The air quality card displays the air quality forecast for the current hour and the next hour in the form of bar charts. The height and color of the bars in these bar charts indicate the air quality. Here, higher bars indicate higher air pollution levels, and the colors green, yellow, red, and purple indicate low, moderate, high, and very high levels of air pollution respectively. By pressing this card, the user is taken to the air quality screen (see [Air quality screen](#Air-quality-screen)).

#### Weather screen

| <img src="./assets/gifs/WeatherScreen.gif" alt="The weather screen" height="450"> |
| --------------------------------------------------------------------------------- |
| _Figure 3: The weather screen of the app._                                        |

The weather screen displays the current weather forecast and includes two carousels with the hourly weather forecast for the current day and the following day. Furthermore, the screen contains a dropdown equivalent to that of the home screen (see [Home screen](#Home-screen)).

#### Air quality screen

| <img src="./assets/gifs/AirQualityScreen.gif" alt="The air quality screen" height="450"> |
| ---------------------------------------------------------------------------------------- |
| _Figure 4: The air quality screen of the app._                                           |

The air quality screen displays the air quality forecast for the current day and the next in the form of line charts. These line charts contain colored circles indicating the air quality level for that hour. The colors are green, yellow, red, and purple, and indicate low, moderate, high, and very high levels of air pollution respectively. The screen also contains a dropdown equivalent to that of the home screen (see [Home screen](#Home-screen)).

### Map screen

| <img src="./assets/gifs/MapScreen1.gif" alt="The map screen" height="450"> | <img src="./assets/gifs/MapScreen2.gif" alt="The session possibility" height="450"> |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| _Figure 5: The map screen of the app._                                     | _Figure 6: The session possibility on the map screen of the app._                   |

The map screen contains an interactive map displaying the different sensors in Trondheim municipality as colored points on the map. The color of these pins represent the air quality level at that location, where green, yellow, red, and purple indicate low, moderate, high, and very high levels of air pollution, respectively. By pressing on a pin, a small pop-up is shown with information about the station the pin represents.

The map screen also contains an info-button and a start-button. By pressing the info-button, a modal with information about the map screen will be shown. By pressing the start-button, a session will be started where the position of the user is tracked in order to measure distance walked and give points according to how far the user walks. How many points the user gets is displayed after the end-button (named _Avslutt_ in the app) is pressed together with a summary of the session.

### Profile screen

| <img src="./assets/gifs/ProfileScreen.gif" alt="The profile screen" height="450"> |
| --------------------------------------------------------------------------------- |
| _Figure 7: The profile screen of the app._                                        |

The profile screen displays information about the user and gives the user the opportunity to chose which neighbourhood the user wants to be part of through a dropdown. Changing the location given in the dropdown will update what neighbourhood the user belongs to and which leaderboard will be shown under _Nabolaget_ (i.e., the neighborhood) on the leaderboard screen (see [Leaderboard screen](#Leaderboard-screen)).

The profile page also contains a button with the text \textit{Instillinger} (i.e., settings) which navigates the user to the settings screen (see [Settings screen](#Settings-screen)), and a button with the text _Logg ut_ (i.e., log out) which will log the user out.

#### Settings screen

| <img src="./assets/gifs/SettingsScreen.gif" alt="The settings screen" height="450"> |
| ----------------------------------------------------------------------------------- |
| _Figure 8: The settings screen of the app._                                         |

The settings screen contains the possibility to toggle push notifications and to navigate to the informative screens [About screen](#About-screen), [FAQ screen](#FAQ-screen), and [Privacy policy screen](#Privacy-Policy-screen).

##### **About screen**

| <img src="./assets/gifs/AboutScreen.gif" alt="The about screen" height="450"> |
| ----------------------------------------------------------------------------- |
| _Figure 9: The about screen of the app._                                      |

The about screen contains information about the app Frisk.

##### **FAQ screen**

| <img src="./assets/gifs/FAQScreen.gif" alt="The FAQ screen" height="450"> |
| ------------------------------------------------------------------------- |
| _Figure 10: The FAQ screen of the app._                                   |

FAQ stands for Frequently Asked Questions, and the FAQ screen contains frequently asked questions and answers to these questions.

##### **Privacy policy screen**

| <img src="./assets/gifs/PrivacyPolicyScreen.gif" alt="The privacy policy screen" height="450"> |
| ---------------------------------------------------------------------------------------------- |
| _Figure 11: The privacy policy screen of the app._                                             |

The privacy policy screen describes the privacy policy of the app and contains information like what personal information is saved by the app and the management of this information.

### Competition screen

| <img src="./assets/gifs/CompetitionScreen.gif" alt="The competition screen" height="450"> |
| ----------------------------------------------------------------------------------------- |
| _Figure 12: The competition screen of the app._                                           |

The competition screen includes a half circle displaying the progress of the user, an info-button with information about the competition aspects, a leaderboard card that navigates to the leaderboard screen (see [Leaderboard screen](#Leaderboard-screen)), and an achievement card that navigates to the achievements screen (see [Achievements screen](#Achievements-screen)). The leaderboard card shows the top five in Trondheim and the ranking of the user in Trondheim. The achievements card shows the last achieved achievement if any achievements have been achieved, and an unachieved achievement the user can achieve.

#### Leaderboard screen

| <img src="./assets/gifs/LeaderboardScreen.gif" alt="The leaderboard screen" height="450"> |
| ----------------------------------------------------------------------------------------- |
| _Figure 13: The leaderboard screen of the app._                                           |

The leaderboard screen contains the possibility to toggle between two leaderboards: one for Trondheim named _Hele byen_ (i.e., the whole town) and one for the neighbourhood chosen by the user on the profile page (see [Profile screen](#Profile-screen)) named _Nabolaget_ (i.e., the neighbourhood). By pressing on the different names, the user can toggle between the two leaderboards. The information given in the two leaderboards are the top ten in the given category and the ranking of the user.

#### Achievements screen

| <img src="./assets/gifs/AchievementsScreen.gif" alt="The achievements screen" height="450"> |
| ------------------------------------------------------------------------------------------- |
| _Figure 14: The achievements screen of the app._                                            |

The achievement screen shows the achievements the user has accomplished and can accomplish. The achievements that have been accomplished have a black trophy icon, while the achievements that can be accomplished have a gray trophy icon. All the achievements can be pressed, and will display a modal with more information about the achievement when pressed.

## Future work

The following is a list of functionalities that could be added to the application to make the application more engaging or more accessible to users:

- **Groups:** The user should be able to create and join groups to compete with friends or colleagues.

- **Geofencing:** The city should be divided into regions based on the air quality measurements from sensors in different locations in the city. The application should be able to detect when a user enters and leaves a region. Using geofencing, the user should get extra points in the competition for walking through regions with better air quality.

- **Smart nudging:** A user gets notifications that are customized to its habits and attempt to change the behavior of the user, for instance, to walk to work instead of driving.

- **Guest users:** Users should be able to use the application without creating an account and log in. Then the user can use the application to get the air quality information, but without the competition functionality present.

## License
