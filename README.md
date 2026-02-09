# 📚 BOOK E-Commerce Project

A full-stack **Book E-Commerce Web Application** designed to provide a seamless online book shopping experience. This project demonstrates modern web development practices using the **MERN Stack**, focusing on scalability, security, and user experience.

---

## 🚀 Features

### 👤 User Features

* User Registration & Authentication (JWT-based)
* Secure Login & Logout
* Browse Books by Category
* Search & Filter Books
* View Book Details (price, description, author)
* Add to Cart & Remove from Cart
* Order Placement & Order History
* User Profile Management

### 🛠️ Admin Features

* Admin Authentication
* Add / Update / Delete Books
* Manage Categories
* View & Manage Orders
* User Management

---

## 🏗️ Tech Stack

### Frontend

* **React.js**
* **Tailwind CSS / Bootstrap**
* **Axios**
* **React Router DOM**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **JWT Authentication**
* **bcrypt.js**

### Database

* **MongoDB Atlas / Local MongoDB**

---

## 📁 Project Structure

```
BOOK-E-Commerce-Project
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── context
│   │   └── App.js
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   └── server.js
│
├── .env
├── README.md
└── package.json
```

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js (v16+ recommended)
* MongoDB
* Git

### Clone the Repository

```bash
git clone https://github.com/your-username/BOOK-E-Commerce-Project.git
cd BOOK-E-Commerce-Project
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 🧪 API Endpoints (Sample)

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| POST   | /api/auth/register | Register user        |
| POST   | /api/auth/login    | Login user           |
| GET    | /api/books         | Get all books        |
| POST   | /api/books         | Add new book (Admin) |
| POST   | /api/orders        | Place order          |

---

## 🔒 Security

* Password hashing using **bcrypt**
* Authentication via **JWT tokens**
* Role-based access control (Admin/User)

---


## 📌 Future Enhancements

* Online Payment Gateway Integration
* Wishlist Feature
* Book Reviews & Ratings
* Email Notifications
* Order Tracking

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes
4. Push to the branch
5. Create a Pull Request


## 👨‍💻 Author

**Ashutosh Thakur**


⭐ If you like this project, please give it a star!
