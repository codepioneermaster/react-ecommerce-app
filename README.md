# WANT TO BUY CANDY? 

## Introduction

'Want To Buy Candy?' is an e-commerce web application built using Node.js (server),
Express.js (routing/api), express-handlebars (integrating handlebars with Express),
express-session (adding session management to express), Passport.js (authentication),
Sequelize ORM with MYSQL (database), and the Stripe API (credit card processing).

Users are able to login, view products for sale (by category), add products to a
shopping cart, checkout, and view past orders.

## Products Page (Home Page) 

The home page is by default the products page. At the products page, users can
view all the products currently available and filter by category if they so choose.
Users can visit the products page at "/products" or clicking "Products".

## Authentication

Before users can select products and process orders, users will have to create a 
new account. By default, the following routes are blacklisted to users who have 
not registered yet:

* /cart
* /cart/:itemId
* /orders
* /order
* /order/:id
* /users
* /users/:id
* /users

If an unregistered user visits any one of these pages, they will be redirected to
the "/login" route, which will have a link that will redirect them to "/signup" to
register. The registration page will prompt the user for his/her first name, last
name, email, and password.

After submitting the registration form, behind the scenes the user's password will
be encrypted using bcrypt and saved to the database. Passport will use the
encrypted user information in the database to authenticate the user.

Now the user can login and so long as their browser session is maintained, the user
will remain authenticated. Logging out or closing the browser will end the session
and force the user to login the next time the user visits one of the protected
routes.

## Adding Products to Shopping Cart

After logging in, the user can add products to their shopping cart by specifying 
the quantities of the products he/she would like to purchase and clicking "Add To
Cart" for each product.

Visiting "/cart" or clicking "Shopping Cart" will display the user's shopping
cart with the products they added. At this stage, the user can modify quantities
again if they choose or remove products all together before proceeding to checkout.

## Placing An Order

Visiting "/order" or clicking "Checkout" on the shopping cart page will redirect
the user to a page where he/she can enter his/her shipping and billing information.

Currently, our app is in test mode. No real credit card payments will be processed.
If you would like to test the credit card processing functionality, please use
the test credit card numbers "4242424242424242" for a successful credit card payment
and "4000000000000002" for a declined credit card payment.

Depending on whether the payment was processed successfully or not, the user will
be redirected to a success or failure page. The user can then click "Return to Products"
to return to the products page.

## Viewing Past Orders

At any time, an authenticated user can view his/her past orders by clicking "Orders"
or visiting "/orders". Currently, all products from all orders are displayed. The
only way to distinguish between orders is based on timestamps.

## Conclusion

If you have questions, feel free to contact any of the contributors to this project.
Hope you enjoy "Want To Buy Candy?"!
