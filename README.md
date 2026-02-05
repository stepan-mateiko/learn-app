# 📚 Learn App

Learn App is a role-based learning platform that allows **students** and **trainers** to manage trainings, track progress, and collaborate in a structured learning environment.
The application is built with **React + TypeScript**, uses **Redux Toolkit** for state management, and communicates with a RESTful backend via **Axios**.

---

## 🚀 Features

### 🔐 Authentication & Authorization

- User registration and login
- JWT-based authentication
- Protected routes for authenticated users
- Role-based access (`student`, `trainer`)

### 👤 User Roles

#### Student

- View and manage personal profile
- Add passed trainings
- Assign trainers
- View training history
- Track completed trainings

#### Trainer

- View assigned students
- See training results
- Manage profile information

---

### 🎓 Trainings

- Add new passed trainings (students)
- Filter trainings by date range
- Search trainings
- View trainings in table format
- Role-based table views (student vs trainer)

---

### 🧑‍🤝‍🧑 Trainer & Student Management

- Students can add trainers
- Trainers automatically receive assigned students
- One-way assignment (trainers cannot be removed by students)

---

### 🗂️ Pages

- Home
- About Us
- Blog
- Features
- Registration & Login
- My Account
- Edit Profile
- Trainings
- Add Trainer
- Add Passed Training

---

### 🧭 Navigation & UX

- Breadcrumb navigation
- Modal confirmations (account deletion)
- Toast notifications
- Responsive layout
- Protected and non-protected routes

---

## 🛠 Tech Stack

### Frontend

- **React 18**
- **TypeScript**
- **Redux Toolkit**
- **React Router v6**
- **Axios**
- **Material UI**
- **Tailwind CSS (forms plugin)**
- **SCSS**
- **React Toastify**
- **React Modal**
- **React Datepicker**

### Backend (Also done by me)

- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT (Authentication)**
- **Multer (file uploads)**
- **fs (file system operations)**
- **dotenv (environment configuration)**

The backend is a RESTful API hosted on Render.

- Base URL:

  ```
  https://learn-app-backend.onrender.com
  ```

---

## 📁 Project Structure (Simplified)

```
src/
├── api/                 # API service definitions
├── assets/              # Images & static assets
├── components/          # Reusable UI components
├── constants/           # Routes, texts, headings
├── helpers/             # Utility functions
├── pages/               # Application pages
├── store/               # Redux store, slices, thunks
├── styles/              # SCSS styles
├── App.tsx              # App routes
└── index.tsx            # Entry point
```

---

## 🔐 Routing Logic

The app uses **route guards** to control access:

- `NonAuthRoute` – pages accessible only for guests
- `AuthRoute` – pages accessible only for logged-in users
- `StudentRoute` – pages restricted to students

---

## 🧠 State Management

State is managed using **Redux Toolkit** with async logic handled via **thunks**.

### Main slices:

- `user`
- `students`
- `trainers`
- `trainings`
- `trainingTypes`

---

## 🌐 API Communication

All API requests are handled via **Axios** and centralized in service modules.

### Example:

```ts
export const trainingsAPI = {
  fetchAllTrainings: async (token: string) => {
    return axios.get(`${baseURL}/api/trainings`, {
      headers: { Authorization: token },
    });
  },
};
```

Authentication token is stored in `localStorage` and passed via headers.

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/learn-app.git
cd learn-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm start
```

App will be available at:

```
http://localhost:3000
```

---

## ⚠️ Notes & Limitations

- Backend is hosted externally
- Trainer removal is intentionally disabled
- Role switching is not supported after registration
- Designed primarily as a learning / portfolio project

---

## 📌 Future Improvements

- Pagination for tables
- Trainer removal workflow
- Admin role
- File validation for uploads
- Better error handling
- Unit & integration tests
- Internationalization (i18n)

---

## 👨‍💻 Author

**Stepan Mateiko**
Frontend Developer
Built as a learning and portfolio project using modern React practices.
