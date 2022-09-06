# Inkable

### Table of content
- [Inkable](#inkable)
    - [Table of content](#table-of-content)
  - [Description](#description)
  - [Context](#context)
  - [Technologies and frameworks used](#technologies-and-frameworks-used)
  - [How to Install and run Inkable](#how-to-install-and-run-inkable)
  - [How to use Inkable](#how-to-use-inkable)
      - [Find an artist](#find-an-artist)
      - [](#)

## Description
Welcome on Inkable, the platform of connection and management of appointments for the tattooing professionnals.

The objective of this platform is to facilitate the life of tattoo artists by gathering in the same place all their appointments and to have a global view of the current and future projects.

On the client side, the goal is to find a tattoo artist who best fits your expectations and to facilitate the contact with him.

Here is a small MVP demo of the platform and its features.

## Context

Inkable was coded by 3 developers: Céline Viala, Lucas Ragot and Laurie Alarçon as part of our end-of-course project at the O'clock school. 

We developed the project in 4 sprints of one week: 
- Sprint 0: creation of the specifications, distribution of roles, choice of the MVP features, choice of technologies and frameworks, definition of the user stories, tree structure, wireframes, and creation of the MCD and MLD.
  
- Sprint 1: creation of the routes, focus on the back-end, code of the signup and login and authentication features. Creation of the database, creation of the controllers methods and installation of the necessary modules, management of the API architecture
  
- Sprint 2: validation of form data, error management, focus on the front-end creation of pages and their dynamization, creation of front-end routes, code for appointment taking functionalities, messaging, creation of tattoo project form, notifications, dynamic breadcrumb trail, filter search system. 
  
- Sprint 3: correction of bugs and errors, harmonization of pages, deployment

## Technologies and frameworks used

**Back :**
- Node.js
- Sqitch
- Sequelize
- Eslint
- Express
- JOI
- JWT
- CORS
- JS Doc
- PG
- DOTENV

**Front :**
- Javascript
- HTML 5
- CSS
- Vue.js 3
- Cloudinary
- Full Calendar 5.11.3
- Bootstrap 5.2
- Eslint
- Axios

## How to Install and run Inkable
To run this project, install it locally using npm.

- git clone SSH 
- git pull origin dev

**BACK**
- cd ../back
- npm i
- Create your file .env by following the .env.example.
- Create your database and then launch the sqitch script to  : "sqitsh deploy". (Do not use the script resetDB, delete and create again your DB)
- npm run dev

**FRONT**
- cd ../front-vue
- npm i
- npm run serve
- click on the link of your localhost to open the project on your navigator

## How to use Inkable
If the installation is correct, you should see the Home page. 

There is 3 ways to navigate through the platform :
- as an "anonym" (you did not signup or login) : 
  - you can access to the home page, 
  - the profile of tattooing artists 
  - and the signup and login forms.
  
- as a "consumer" : you have access to the same page than the anonym, plus :
  - the from to take an appointment, 
  - the dashboard page where you can see all you appointements and projects, 
  - the project page where you can see the details and you can talk with the artist, 
  - and the account page where you can change your account information and delete it.

- as a "tattoo artist" you have access to the same page than the anonym, plus :
  - the dashboard page where you can see all you appointements and projects and set you galery,
  - the project page where you can see the details and change them, and talk to the consumer,
  - the planning page, where you can see all the appointments you already have and to set them,
  - and the account page where you can change your account information and delete it.

#### Find an artist
- Go to Home page in the search section 
- Filter by city, style or color and click on Filtrer button
- You will see the artists that fit to the filters you made. If there is no artists, maybe no artist match, try other filters. If still no artists appears, take a look to your database to see if the table "pro" is full. 

#### 