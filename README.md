# KeelNut: Your Hardware Essentials Store

Welcome to KeelNut, your one-stop online store for quality hardware essentials such as nails and screws. This user-friendly platform is designed to provide a seamless and efficient shopping experience, prioritizing intuitive product management and smart categorization.

![keelnut](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtA1uguM2ZcKZK6c9FvOS9Li6j6gx5euk_-IsEzuppNcHRv4ueNged8xW4RmV1exA7V81g7knSoUaNvnIKMrkFcUDkArhIlgncmkOZ3zecZopRCGFUUzw4O-QTtHOGGtRLstaJxejjO0qLp2b-fD6Ybor2T-MzKRZHQ0OKoHb3O0CZCcpHPWn9FUfcZwj0/w1200-h1200/keelnut.png)

## Key Features

- User Authentication & Authorization
- Search and Filter
- Responsive Design
- Progressive Web Application (PWA)
- Wishlist Functionality
- Admin Panel & Inventory Management
- Smart Categorization & Product Catalog
- Secure Checkout
- User Engagement Tracking
- Mail Service
- Order History
- ... and much more!

## Tech Stack

- ReactJS
- MaterialUI
- NodeJS
- ExpressJS
- MongDB

## User Interface (UI)

![Keelnut UI Snaps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitLfuF-Rz5TpKZSgR3oWJPLGAwz0wZhGZ6D26ueM7vOlKtLukFKRXFkfWa782TEPUc-SuPMN9VvGJa2WSDLroMFnx_659jo4ytwR5SGYc3fPEKmZN_0sVa-83yqshoYIzKrJPXBgUiXoVj9toG-yZxGV-cnxZeNhqccE3szmb93v0HAce6LoHhR69JKEVu/w1200-h1200/keelnut2.png)

![Keelnut UI Snaps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTlXGTercJVhSXBuvE_xEGqAQdOVAXSB1pkXvhUn8WFTB_a4Wgx0HsjSy9694-rJjHLr3QzA4sQrHAWnqWB3N66pQb1dOk81EUj64Hvr5S_0iJPaHO932eQbnU0hie3YnwqNzJIOmDwe0WyKllo-ec3QIdzIeY0vpCSh2Y3ByfvJ9xu_E-D_WY0EQPhuyM/w1200-h1200/15.png)

![Keelnut UI Snaps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuwOsUMpQmBdJmvtsOwYNZ4Nl0Lav3qfIydgIQKGraac7Efkf3fk3e8PBkVa1Jeh1ptoNfyIWeNsdsO4EYDFTwv1ZP41VFVT_wxgeAa8u7GIKq1NNB5I5SwKjOzbpQRCyTdQist5jcADcQyTTr4JYmG6Gqd_i1iZGoOE27OY1hVrZGVBOqd9L6osNRevcd/w1200-h1200/16.png)

![Keelnut UI Snaps](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBM8_ZFzqzkf6AKyF1QnkhXlJP3oyzJ7S1VSQLfptt6aOMxvBtWyNP6yAYBv7eOfOOxvELL-mmECFCKvSYRNgQeo4ITNjT84_iUncxrNrTJwEhfskxQAiQOQ88a7wmbj2NKYzpJ3BuXWizqnA2KuZhCOATfJSN0OHgaECw0nZEwp6-lJxQu2pNwoa40tYy/w1200-h1200/17.png)

## API Endpoints

### Admin Only Access

- **POST** `/api/admin/addproduct`

  - Add a new product.

- **GET** `/api/admin/chartdata`

  - Get chart data.

- **DELETE** `/api/admin/deleteproduct/{id}`

  - Delete product.

- **GET** `/api/admin/getcart/{userId}`

  - Get the cart details of a user.

- **GET** `/api/admin/geteuser/{userId}`

  - Get information about a single user.

- **GET** `/api/admin/getorder/{id}`

  - Get payment details for a specific order.

- **GET** `/api/admin/getreview/{userId}`

  - Get reviews submitted by a user.

- **GET** `/api/admin/getusers`

  - Get information about all users.

- **GET** `/api/admin/getwishlist/{userId}`

  - Get the wishlist of a user.

- **POST** `/api/admin/login`

  - Admin login.

- **POST** `/api/admin/register`

  - Admin register.

- **DELETE** `/api/admin/review/{id}`

  - Delete user review.

- **PUT** `/api/admin/updateproduct/{id}`

  - Update product details.

- **DELETE** `/api/admin/usercart/{id}`

  - Delete user cart item.

- **DELETE** `/api/admin/userwishlist/{id}`
  - Delete user wishlist item.

### User Access

- **DELETE** `/api/auth/delete/user/{userId}`

  - Delete user and associated data.

- **GET** `/api/auth/getuser`

  - Get details of the logged-in user.

- **POST** `/api/auth/login`

  - User login.

- **POST** `/api/auth/register`

  - User registration.

- **PUT** `/api/auth/updateuser`
  - Update user details.

### User Cart Operations

- **POST** `/api/cart/addcart`

  - Add a product to the user's cart.

- **DELETE** `/api/cart/deletecart/{id}`

  - Remove a product from the user's cart.

- **GET** `/api/cart/fetchcart`
  - Fetch the cart of the logged-in user.

### User Password Operations

- **POST** `/api/password/forgot-password`

  - Send an email link for password reset.

- **POST** `/api/password/forgot-password/{id}/{token}`

  - Set a new password after clicking the email link.

- **POST** `/api/password/reset/password`
  - Reset the user's password.

### Payment Operations

- **POST** `/api/checkout`

  - Process a payment checkout.

- **GET** `/api/getkey`

  - Get the Razorpay API key.

- **GET** `/api/getpreviousorders`

  - Get details of the user's previous orders.

- **POST** `/api/paymentverification`
  - Verify a payment.

### Product Operations

- **GET** `/api/product/fetchproduct`

  - Get information about all products.

- **GET** `/api/product/fetchproduct/{id}`

  - Get information about a single product by ID.

- **POST** `/api/product/fetchproduct/category`

  - Get products category-wise with optional sorting options.

- **POST** `/api/product/fetchproduct/type`
  - Get products for a single category.

### Product Review Operations

- **POST** `/api/review/addreview`

  - Add a review for a product.

- **DELETE** `/api/review/deletereview/{id}`

  - Delete a user's review.

- **PUT** `/api/review/editreview`

  - Edit a user's review.

- **POST** `/api/review/fetchreview/{id}`
  - Get reviews for a specific product with optional sorting options.

### User Wishlist Operations

- **POST** `/api/wishlist/addwishlist`

  - Add a product to the user's wishlist.

- **DELETE** `/api/wishlist/deletewishlist/{id}`

  - Remove a product from the user's wishlist.

- **GET** `/api/wishlist/fetchwishlist`
  - Get products in the user's wishlist.

---

⭐️ If you find this API documentation helpful, don't forget to star it!

🚀 [Project Live Demo](https://tksuryavanshi.blogspot.com/2023/09/keelnut.html?m=1.)

📄 [API Documentation](https://meri-api.vercel.app/keelnut)

👩🏻‍💻 [Backend Repo](https://github.com/doubtcrack/KeelNut-Backend)

## Setup Guide

Follow these steps to set up and run the KeelNut MERN stack application locally:

### Client:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/doubtcrack/KeelNut.git
   cd KeelNut

   ```

2. **Installing Dependencies:**
   ```bash
    npm install
   ```
3. **Setting Up `.env` Credentials**

   Create a `.env` file in your KeelNut directory and provide your live server URL

   ```
    REACT_APP_SERVER_URL= your-server-url

   ```

4. **Starting the Client**

   Begin the client application with the following command in the client directory:

   ```
   npm start
   ```

### Server:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/doubtcrack/KeelNut-Backend.git
   cd KeelNut
   ```

2. **Installing Dependencies:**
   ```bash
    npm install
   ```
3. **Setting Up `.env` Credentials**

   Create a `.env` file in your KeelNut-Backend directory and provide the following data

   ```
   MONGO_URL= your-mogodb-url
   JWT_SECRET= your-jwt-secret
   RAZORPAY_API_KEY= your-razorpay-api
   RAZORPAY_API_SECRET= razorpay-secret
   EMAIL= your-email
   EMAIL_PASSWORD= email-password
   FRONTEND_URL_1= your-client-url1
   FRONTEND_URL_2= your-client-url2
   PAYMENT_SUCCESS= [your-frontend-url]/paymentsuccess?reference
   FORGOT_PASSWORD= [your-frontend-url]/user/reset
   GO_TO_CART= [your-frontend-url]/cart
   ADMIN_KEY= your-admin-secret-key-tologin
   ```

4. **Starting the Server**

   Begin the server application with the following command in the directory:

   ```
   npm start
   ```

   **Accessing the Application**

   You're all set! Open your browser and go to http://localhost:3000 to access the KeelNut application.

## Contribute and Support ❤️

If you find this project useful and would like to contribute or show your support, we welcome your involvement. Feel free to submit pull requests, report issues, or share your feedback. Your contributions make this project even better!

And also Don't forget to give a star ⭐ to the this Repo.
