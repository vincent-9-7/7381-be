# How to run these files?
Step1: npm install
Step2: npm install -g nodemon
Step3: nodemon src/index.js

# Folder Structure:
1. src/controllers: Controllers are typically callback functions that corresponds to the routers to handle requests.
2. src/loaders: Allows to connect native node modules with node extension.
3. src/model: To create module that connects to the database and exports some functions that let us operate on the data. 
4. src/public: To store upload images.
5. src/routes: To store routes. 
6. src/utils: encryptor and input validator.
7. src/api: Website's api url.
8. /.eslintrc: Eslint coding style.
9. /.env: Environment variable to save API key.