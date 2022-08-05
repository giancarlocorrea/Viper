# React-JS--CRUD-Inventory

Welcome to my github code project.

Down below there is a tutorial on how to install and some images from the prototype too.

## Installation

### Client

1. `$ cd client`
2. `$ npm install` or `$ yarn install`
3. `$ npm start` or `$ yarn start`

### Server
Download the script database file  https://github.com/giancarlocorrea/Viper/blob/master/create%20Database.sql
1. Change your mySQL database data `server/index.js`
2. `$ cd server`
3. `$ npm install` or `$ yarn`
4. `$ npm rum devStart`

## Functionalities

- Insert, update, delete Products in the database
- Insert, update, delete Raw Materials in the database
- Associate a Product to a Raw Material

## Used Libraries

### Front-end

- `React`
- `@material-table`
- `Axios`

### Back-end

- `node`
- `express`
- `mysql`
- `nodemon`
- `cors`


### Main

At the main screen, all information are gather in two tables <br>
In both of them there are the button actions where you can Insert ![image](https://user-images.githubusercontent.com/95420878/182946969-61d9edb5-ccd0-4ec8-b802-3f11065488dd.png), Update ![image](https://user-images.githubusercontent.com/95420878/182947102-53d3a6f2-47c4-4b7c-8aa2-437af6ae3c05.png)
, Delete ![image](https://user-images.githubusercontent.com/95420878/182947359-de6a32fb-ffc4-408e-ad75-f3d09629b645.png)
 right on the table


![main page](https://user-images.githubusercontent.com/95420878/182945715-262799d2-1fdb-4006-a634-a37e112cf03d.jpg)

- To associate a Product to a Raw Material, just hit the button Associate ![image](https://user-images.githubusercontent.com/95420878/182947709-3af47b0e-c2ab-48b1-ade0-af0ec3bd3dad.png)
- Then a Modal/Dialog will pop out   ![image](https://user-images.githubusercontent.com/95420878/183077160-6e47da86-ffd8-4867-a57b-b91e945a7269.png)

- and you can add the quantity of Raw Material will be produced with the Product associated

