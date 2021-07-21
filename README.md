# IPC Stock Market Dashboard

Stock Dashboard is a project which seeks to reflect the [IPC](https://www.eleconomista.es/diccionario-de-economia/indice-de-precios-y-cotizaciones-ipc) from México.

## Installation

Install dependencies:

    npm install

Run the app in development mode:
    
    npm start
    
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


(Optional) If you want to launch the test runner in the interactive watch mode:

    npm test

(Optional) If you want to deploy the app using [Github Pages](https://pages.github.com/):

    npm deploy

Visit [https://carlos151294.github.io/stock-dashboard](https://carlos151294.github.io/stock-dashboard) to see the latest version of the app.
    
## Usage

Stock Dashboard has the following features:

* **Authentication**

    When you enter the app, you are directed to the *Login Page*. In order to move to the *Home Page* (main section of the app), you can click on the "Login" button and a new window will be opened so you can enter your Google credentials. If you enter valid credentials, you'll be redirected automatically to the *Home Page* of the app.
    Inside the app, you can see at the top right corner a "Logout" link that allows you to end your session. This will redirect you the the *Login Page*.

    This app makes use of [Firebase Authentication](https://firebase.google.com/docs/auth) which leverages the standards OAuth 2.0.

* **Data Visualization**

    Once you're successfully authenticated, the app automatically loads some information coming from a [mock endpoint](https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e) and displays it using a **Line Chart**. At the top of the chart you can find two icons which give you the chance to click on any of them depending wether you'd like to visualize the data in a **Line Chart** or an **Area Chart**.

    This app makes use of [Recharts](https://recharts.org/) which is a great tool to integrate charts in React applications.

* **Theming**

    In the *Home Page*, below the "Logout" link, you can find a "Dark Theme" toggle button to change between dark and light themes depending on your preference.
        
    This app makes use of [Material UI](https://material-ui.com/) which is a great tool to style and build React applications.
