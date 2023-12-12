<div align="center">
<h1 align="center">GoClean</h1>
  🌳🌍🌳
  <br/>
Community Awareness for Earth Pollution and Nature Preservation

## ⭐️  Introduction

GoClean is a purpose-driven react project aimed at raising community awareness of the critical issues of earth pollution and the urgent need for nature preservation with a mission to empower individuals and foster a sense of responsibility towards the environment. GoClean encourages active participation through community-driven initiatives such as clean-up campaigns, educational events, and collaborative projects. By joining forces, we can make a tangible difference and protect the beauty and balance of our natural world.

## 📜 Table of Contents
[Getting started](#💡-getting-started) •
[Features](#🧸-features) •
[Structure and Architecture](#🏛️-structure-and-architecture) •
[Screenshots](#📷-screenshots)

## 💡 Getting Started
Clone the repository:
```
git clone https://github.com/Vasillena/GoClean
```
Navigate to the server folder:
```
cd server
```
Run the following command to start the back-end server:
```
node server.js
```
Open new terminal and navigate to the client folder:
```
cd client
```
Run the following command to install all required packages and dependencies:
```
npm install
```
Run the following command to start the app in development mode:
```
npm run dev
```
Open http://localhost:5173 in your browser to view the application.

## 🧸 Features

**Key Features**

Launch and publish cleaning campaigns
<br/>
Explore campaigns based on location
<br/>
Join campaigns of interest
<br/>
Bookmark preferred campaigns for future engagement
<br/>
Simple user profile
<br/>
Access "My Campaigns" and "Saved Campaigns" sections
<br/>
Use external API for accurate weather updates
<br/>


**User Access Levels**

Guest User:

Browse all static pages
<br/>
Explore available campaigns and access detailed information
<br/>
Use search functionality
<br/>
Check real-time weather reports

Registered User (Non-Owner):

Join ongoing campaigns
<br/>
Bookmark campaigns for later reference
<br/>

Registered User (Campaign Owner):

<br/>
Edit and remove personal campaigns
<br/>
View "My Campaigns" section
<br/>

**Demo Users**

peter@abv.bg pass: 123456;
<br/>
george@abv.bg pass: 123456;

## 🏛️ Structure and Architecture
</div>

- [**.DS_Store**](./.DS_Store)
- [**.gitignore**](./.gitignore)
- [**README.md**](./README.md)
- **client/**
  - [.DS_Store](./client/.DS_Store)
  - **.vite/**
    - **deps/**
      - [_metadata.json](./client/.vite/deps/_metadata.json)
      - [chunk-L7APZED3.js](./client/.vite/deps/chunk-L7APZED3.js)
      - [chunk-L7APZED3.js.map](./client/.vite/deps/chunk-L7APZED3.js.map)
      - [package.json](./client/.vite/deps/package.json)
      - [react-dom_client.js](./client/.vite/deps/react-dom_client.js)
      - [react-dom_client.js.map](./client/.vite/deps/react-dom_client.js.map)
      - [react-router-dom.js](./client/.vite/deps/react-router-dom.js)
      - [react-router-dom.js.map](./client/.vite/deps/react-router-dom.js.map)
      - [react.js](./client/.vite/deps/react.js)
      - [react.js.map](./client/.vite/deps/react.js.map)
  - [README.md](./client/README.md)
  - [index.html](./client/index.html)
  - [package-lock.json](./client/package-lock.json)
  - [package.json](./client/package.json)
  - **public/**
    - [.DS_Store](./client/public/.DS_Store)
    - [favicon.png](./client/public/favicon.png)
    - **images/**
      - (...)
  - **src/**
    - [.DS_Store](./client/src/.DS_Store)
    - [App.css](./client/src/App.css)
    - [App.jsx](./client/src/App.jsx)
    - **components/**
      - **ActiveCampaigns/**
        - [ActiveCampaigns.jsx](./client/src/components/ActiveCampaigns/ActiveCampaigns.jsx)
        - **CampaignCard/**
          - [CampaignCard.jsx](./client/src/components/ActiveCampaigns/CampaignCard/CampaignCard.jsx)
      - **BackToTop/**
        - [BackToTop.jsx](./client/src/components/BackToTop/BackToTop.jsx)
      - **CampaignDetails/**
        - [CampaignDetails.jsx](./client/src/components/CampaignDetails/CampaignDetails.jsx)
      - **Contact/**
        - [Contact.jsx](./client/src/components/Contact/Contact.jsx)
      - **CreateCampaign/**
        - [CreateCampaign.jsx](./client/src/components/CreateCampaign/CreateCampaign.jsx)
      - **EditCampaign/**
        - [EditCampaign.jsx](./client/src/components/EditCampaign/EditCampaign.jsx)
      - (...)
    - **contexts/**
      - [AuthContext.jsx](./client/src/contexts/AuthContext.jsx)
    - **hooks/**
      - [useForm.js](./client/src/hooks/useForm.js)
      - [useLocalStorage.js](./client/src/hooks/useLocalStorage.js)
      - [useService.js](./client/src/hooks/useService.js)
    - [index.css](./client/src/index.css)
    - [main.jsx](./client/src/main.jsx)
    - **services/**
      - [authService.js](./client/src/services/authService.js)
      - [campaignService.js](./client/src/services/campaignService.js)
      - [requester.js](./client/src/services/requester.js)
      - [weatherService.js](./client/src/services/weatherService.js)
    - **styles/**
      - [.DS_Store](./client/src/styles/.DS_Store)
      - **css/**
        - [.DS_Store](./client/src/styles/css/.DS_Store)
        - [active-campaigns.css](./client/src/styles/css/active-campaigns.css)
        - (...)
      - [reset.css](./client/src/styles/reset.css)
      - [responsive.css](./client/src/styles/responsive.css)
      - (...)
    - **utils/**
      - [validateInputs.js](./client/src/utils/validateInputs.js)
  - [vite.config.js](./client/vite.config.js)
- **server/**
  - [.DS_Store](./server/.DS_Store)
  - **data/**
    - [users.json](./server/data/users.json)
  - [server.js](./server/server.js)

<div align="center">
  
## 📷 Screenshots

-----Mobile Version-----
![Screenshot 1](https://github.com/Vasillena/GoClean/assets/114015792/5fcc9907-cf40-470a-b743-0bd8ab7a5d27)
![Screenshot 2](https://github.com/Vasillena/GoClean/assets/114015792/7cdb1c28-5e2d-4954-a647-2fe0c1d072cc)
![Screenshot 3](https://github.com/Vasillena/GoClean/assets/114015792/e28a4a7d-37d3-4bbf-9566-497e2d08f5e3)


------------------------
![Screenshot 1](https://github.com/Vasillena/GoClean/assets/114015792/8a817d74-b3e2-4be5-b169-092bab6140f6)
![Screenshot 2](https://github.com/Vasillena/GoClean/assets/114015792/f3e2cca3-2000-47db-aeb1-7c00aaff8fe8)
![Screenshot 3](https://github.com/Vasillena/GoClean/assets/114015792/00b981f7-f66b-4157-be93-9c4aa6e6e605)
![Screenshot 4](https://github.com/Vasillena/GoClean/assets/114015792/0a8803ad-d203-4c7d-bb87-e600f779069e)
![Screenshot 5](https://github.com/Vasillena/GoClean/assets/114015792/e7da43f1-6e0d-4210-81c1-41601c7316ff)
![Screenshot 6](https://github.com/Vasillena/GoClean/assets/114015792/1f3dfde1-61f4-46ba-9003-328e13ea6774)
![Screenshot 7](https://github.com/Vasillena/GoClean/assets/114015792/fc5a6794-2ffa-496c-8396-30ee3f7d6f5e)
![Screenshot 8](https://github.com/Vasillena/GoClean/assets/114015792/ee4cfd2c-3dad-41f5-bac0-16a6ecfdc27c)
![Screenshot 9](https://github.com/Vasillena/GoClean/assets/114015792/9e0938b0-69ac-4f3b-9b9f-9c19f781417b)
![Screenshot 10](https://github.com/Vasillena/GoClean/assets/114015792/fd3942fa-e480-466d-820c-6747c8b8016b)
![Screenshot 11](https://github.com/Vasillena/GoClean/assets/114015792/da0b6ab2-e75a-43cc-9cd0-84b40e0980cb)
![Screenshot 12](https://github.com/Vasillena/GoClean/assets/114015792/2d1aff2a-7e9b-4298-8912-e305b719ff45)
![Screenshot 13](https://github.com/Vasillena/GoClean/assets/114015792/aa822f62-fa8c-4832-972d-6bb1dd14acb9)
![Screenshot 14](https://github.com/Vasillena/GoClean/assets/114015792/a0bce6d1-21cf-459b-936b-fbbde450bfea)
![Screenshot 15](https://github.com/Vasillena/GoClean/assets/114015792/6599d6d7-f888-4e35-ada8-69f35ee351b8)
![Screenshot 16](https://github.com/Vasillena/GoClean/assets/114015792/dcff70e4-956f-4c8c-912a-db9e586cf896)
![Screenshot 17](https://github.com/Vasillena/GoClean/assets/114015792/c8d735e8-063a-47d0-bf9b-bef631d9e360)
![Screenshot 18](https://github.com/Vasillena/GoClean/assets/114015792/86f0c34a-972e-40cf-9d1c-539babaa05e4)
![Screenshot 19](https://github.com/Vasillena/GoClean/assets/114015792/112eaec6-601e-424f-827d-fe1cfb46595f)

</div>
