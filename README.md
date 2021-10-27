# Grade-B website:
https://bmarket.ml/

# How to run these files?
Step1: npm install
Step2: npm install -g nodemon
Step3: nodemon src/index.js

# Folder Structure:

1. src/controllers: Controllers are typically callback functions that 
2. corresponds to the routers to handle requests.
3. src/loaders: Allows to connect native node modules with node extension.
4. src/model: To create module that connects to the database and exports 
5. some functions that let us operate on the data.
6. src/public: To store upload images.
7. src/routes: To store routes.
8. src/utils: encryptor and input validator.
9. src/api: Website's api url.
10. /.eslintrc: Eslint coding style.
11. /.env: Environment variable to save API key. (We didn't upload it for safty)