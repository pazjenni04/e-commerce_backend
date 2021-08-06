# E-COMMERCE_BACKEND

## **Table of Contents**

1. [Description](#description)
2. [Usage](#usage)
3. [Retrieving_Data](#retrieving-data)
4. [Creating_new_items](#creating-new-items)
5. [Update_an_item](#update-an-item)
6. [Deleting_items](#deleting-items)
7. [Technologies](#technologies)
8. [Questions](#questions)
9. [Link](#links)
10. [License](#license)

## **Description**

The objective of this application is to assist a retail store in retrieving information on products that are available in stock and to create new items that can show availability for future use.

## **Usage**

To use this application, the user first needs to git clone https://github.com/pazjenni04/e-commerce_backend.git in their terminal. Once they have cloned the repo, the user then needs to install the express, sequelize, and mysql2.

`npm init -y`

and then type in

`npm install`

This will proceed to download all the necessary packages in order to run the command-line application. To start the application, the user needs to type

`node server.js`

into their terminal and the server will begin. The user will know when the server is listening because "App listening on port 3001!" will be console logged in the terminal.

To create modifications to the database, the user can install or use Insomnia or any REST API CLIENT of the users choosing.

PLEASE NOTE: This readme will be utilizing Insomnia for demonstration purposes within the Usage portion of the Readme.

Once the server has started, the user can run multiple paths in insomnia in order to retrieve, update or delete items within the database.

## Retrieving Data

To retreive data from the database, the user will need to insert http://localhost:3001/api and then depending on the information they are needing to retrieve will need to complete the path with either /tags, /products, or /categories, each directing them to retrieve either the items with the same tag number, products that are the same, or categories of the items available within the database.

http://localhost:3001/api/categories - example

![The following image is an example of retrieving data from categories](https://raw.githubusercontent.com/pazjenni04/e-commerce_backend/main/images/get-categories_img.PNG)

http://localhost:3001/api/products - example

![The following image is an example of retrieving data from products](https://raw.githubusercontent.com/pazjenni04/e-commerce_backend/main/images/get-products_img.PNG)

http://localhost:3001/api/tags - example

![The following image is an example of retrieving data from tags](https://raw.githubusercontent.com/pazjenni04/e-commerce_backend/main/images/get-tags_img.PNG)

To retrieve a specific item within the database, the user can enter the item's specified id at the end of its http path to retrieve that particular item's information.

http://localhost:3001/api/tags/1 - example

![The following image is an example of retrieving data for a particular item by using a specified id in the tag path](https://raw.githubusercontent.com/pazjenni04/e-commerce_backend/main/images/tag-item_img.PNG)

This can be also applied to retrieve category and product information through their specified paths.

## Creating new items

In order for the user to create a new item within the system, whether it be a new category or product, the user will need to create a POST within Insonmia and enter the new category information or product information (Category info would need to include the new category_name and Product will need to include product_name, price, stock, category_id) - all info needs to be inputted into Insomnia in JSON.

![The following is an example of a new category being created within the database](https://raw.githubusercontent.com/pazjenni04/e-commerce_backend/main/images/post-example_img.PNG)

Once the user has posted, the item should then be available in the database.

## Update an item

To update an item within the database, the user needs to insert the specified id of the item they are needing to update with the respective pathway.

## Deleting items

To delete an item within the database, the user can insert DELETE in insomnia and delete whichever item based on the item's id.

Example of pathway to delete the following item - http://localhost:3001/api/categories/6

![The following is an example of deleting a category based on the id](https://raw.githubusercontent.com/pazjenni04/e-commerce_backend/main/images/delete-example_img.PNG)

The user can delete a category, product or item within the database, but would have to use the respective path and insert the id that corresponds to the option that's needing to be removed to be successful. This will remove the item, category, or product from the system once completed.

## **Technologies**

- JavaScript
- node.js
- Insomnia
- Express package
- Mysql2 package
- Sequelize package

## **Questions**

_Questions? Feel free to contact me._

- Via [Gtihub](https://github.com/pazjenni04)
- Via [Email](pazjenni1331@gmail.com)

# Links

To see a demonstration of this application, feel free to watch the following link.

https://youtu.be/Ql6uk7Fqr8c

Github repo - https://github.com/pazjenni04/e-commerce_backend.git

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
