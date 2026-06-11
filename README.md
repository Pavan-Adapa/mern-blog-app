# MERN Blog App

A full-stack blogging platform built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). Users can create, read, update, and delete blog posts, manage authentication, and interact with a modern, responsive user interface.

## 🚀 Features

- User Authentication (Register/Login)
- JWT-based Authorization
- Create, Edit, and Delete Blog Posts
- View All Blogs
- Individual Blog Details Page
- User Profile Management
- Responsive Design
- RESTful API Architecture
- MongoDB Database Integration

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router
- Axios
- CSS / Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

## 📁 Project Structure

```text
mern-blog-app/
├── client/          # React Frontend
├── server/          # Express Backend
├── README.md
└── package.json
```

## ⚙️ Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 📦 Installation

### Clone the Repository

```bash
git clone https://github.com/Pavan-Adapa/mern-blog-app.git
cd mern-blog-app
```

### Backend Setup

```bash
cd server
npm install
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm start
```

## 🌐 Deployment

### Backend

- Render

### Frontend

- Vercel / Netlify

### Database

- MongoDB Atlas

## 📸 Screenshots

Add screenshots of:

- Home Page
- Login Page
- Register Page
- Blog Details Page
- Create Blog Page

## API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

### Blogs

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/blogs     | Get All Blogs  |
| GET    | /api/blogs/:id | Get Blog By ID |
| POST   | /api/blogs     | Create Blog    |
| PUT    | /api/blogs/:id | Update Blog    |
| DELETE | /api/blogs/:id | Delete Blog    |

## Future Improvements

- Rich Text Editor
- Image Upload Support
- Comments System
- Likes and Reactions
- Search and Filtering
- Dark Mode
- User Roles (Admin/User)

## Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Author

**Pavan Adapa**

GitHub: https://github.com/Pavan-Adapa
