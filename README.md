# Rakki - A Random Anime/Manga Generator

![Rakki Logo](/public/img/rakki-logo-green.svg)


## Introduction
This app was created as a personal project. It was made using [ReactJS](reactjs.org) and [TailwindCSS](tailwindcss.com) as CSS framework.
<div style="display: flex; justify-content: space-evenly; align-items: center; flex-wrap: wrap; margin-top: 20px; margin-bottom: 20px;">
<img src="./public/img/React-icon.svg.png"
height="64px"/>
<!-- <img 
height="64px"
width="256px"
src="./public/img/tailwindcss-logotype-white.svg"> -->
<!-- <img 
src="./public/img/tailwindcss-logotype-white.svg"> -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./public/img/tailwindcss-logotype-white.svg">
  <img 
    height="64px"
    width="256px"
    alt="TailwindCSS Logo'" src="./public/img/tailwindcss-logotype.svg">
</picture>
</div>
All data is fetched from [Anilist](anilist.co)'s public API (Application Programming Interface). The API uses the [GraphQL](graphql.org) query language to handle requests as opposed to REST APIs.

 You can learn more about the public API in the [documentation](https://anilist.gitbook.io/anilist-apiv2-docs/) provided or use their [Interactive GraphQL Editor](https://anilist.co/graphiql).

I made this choice of API because the documentation made things easy to understand and to better familiarize myself with GraphQL queries.

# How to run
The app was created using [Create React App](https://create-react-app.dev/). You can learn more in the documentation.

You can install dependencies by using Node Package Manager NPM. 

Make sure you have Node installed in your system type the following commands:

```console
$ git clone https://github.com/youssefjj/rakki.git # Clone repository

$ cd rakki # Change working directory

$ npm install # Install dependencies

$ npm start # Run the React app
``` 

# Features
As of writing this, the application has the following features:
- Display Media (Anime/Movie or Manga/Light Novel/Novel etc...) info such as main plot, genres, number of episodes/chapters, trailer,  etc...
- Display recommendations if you like that media title (this is also data taken from the Anilist recommendations tab)
- Add to/Remove from favourites: You can have up to 50 favourites in either media type (anime or manga)
- Search Anime/Manga by name

# Missing Features
The app still has a some missing features such as:
- Search filters
- Custom Random Media Generation; choose random media by genre or number of episodes/chapters, etc...
- Increase maximum number of favourites (currently 50 for each type of media)
- Favourites filtering/sorting
- etc...
# Contributions
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# License
This project uses the [MIT](https://choosealicense.com/licenses/mit/) license