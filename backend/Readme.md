# express-mysql-rest
Boilerplate for building the rest api with sequelize and mysql using express js. the repository will contains crud operation with mysql database using sequelize ORM.

## Prerequisite
 1. Express JS
 2. mysql2
 3. sequelize-cli
 4. sequelize
 5. nodemon
 6. doenv

## Installation
 1. clone the repository
 2. install the ```sequelize cli``` for support ORM command
         For `npm` package: ```npm install -g sequelize-cli```
         For `yarn` package: ```yarn add global sequelize-cli```

 3. run command for npm ```npm install```  and for yarn ```yarn install```
 4. create database to mysql, if you use command line, command will be
    ```>mysql -u <username> -p <password> ```
    ```mysql> create DATABASE stock_prices```
    ```mysql> exit```
 5. then use command for migrate the database
        1. for Yarn command : ```yarn db:migrate```
        2. for npm command  : ```npm run db:migrate```
 6. For development purpose user command ```yarn start:dev```



## How to Add New Fields to Existing Sequelize Migration

1. Step 1 - Create a new migration

```
$ sequelize migration:create --name modify_users_add_new_fields
```
2. Step 2 - Edit the migrations to suit the need

## Create the New Model for Application

```
$ sequelize model:create --name security --attributes exchange_id:integer,ticker:string,name:string,sector:string,industry:string 
```

this command will create the model file with migration file at `db` folder.those are file name are based on model name
        1. db/model/<model>.js file
        2. db/migration/ <date>-create-user.js