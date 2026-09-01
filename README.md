# 🎓 Edunest – Online Learning Platform

Edunest is a full-stack online learning platform designed to help students learn new technologies and upskill their knowledge for career development.

The application allows students to browse courses, purchase courses through Razorpay, access their enrolled courses, and learn through structured lessons with video content. Trainers/Admin users can create courses and add lessons and topics.

---

## 🚀 Features

### 👨‍🎓 Student Features

* Student registration and login
* Browse available courses
* View course details
* Purchase courses using Razorpay
* Access purchased courses through **My Courses**
* View available lessons for enrolled courses
* Select lessons dynamically
* Watch lesson videos directly within the application

### 👨‍🏫 Trainer/Admin Features

* Trainer/Admin login
* Create new courses
* Add lessons to existing courses
* Add lesson topics and video links
* Manage course learning content

### 💳 Payment

* Razorpay payment gateway integration
* Secure course purchase flow
* Payment verification before course enrollment

---

## 🛠️ Technologies Used

### Backend

* Java
* Spring Boot
* Spring MVC
* Hibernate / JPA
* REST APIs
* Maven

### Frontend

* React
* Vite
* JavaScript
* HTML5
* CSS3

### Database

* MySQL

### Payment

* Razorpay

### Development Tools

* Spring Tool Suite (STS)
* Visual Studio Code
* Postman
* Git & GitHub

---

## 🏗️ Application Architecture

```text
                 ┌──────────────────────┐
                 │      React UI        │
                 │      (Vite)          │
                 └──────────┬───────────┘
                            │
                            │ REST API
                            ▼
                 ┌──────────────────────┐
                 │    Spring Boot       │
                 │      Backend         │
                 └──────────┬───────────┘
                            │
                  ┌─────────┴─────────┐
                  │                   │
                  ▼                   ▼
          ┌──────────────┐    ┌──────────────┐
          │    MySQL     │    │   Razorpay   │
          │   Database   │    │   Payments   │
          └──────────────┘    └──────────────┘
```

---

## 📚 Course & Lesson Flow

```text
Student
   │
   ▼
Login / Register
   │
   ▼
Browse Courses
   │
   ▼
Select Course
   │
   ▼
Purchase Course
   │
   ▼
Razorpay Payment
   │
   ▼
My Courses
   │
   ▼
Course Details
   │
   ▼
Lessons
   │
   ▼
Watch Lesson Video
```

---

## 📂 Project Structure

```text
edunest-springboot/
│
├── com.edunest/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/example/demo/
│   │   │   │       ├── controller/
│   │   │   │       ├── entity/
│   │   │   │       ├── repository/
│   │   │   │       └── services/
│   │   │   │
│   │   │   └── resources/
│   │   │       ├── static/
│   │   │       └── templates/
│   │   │
│   │   └── test/
│   │
│   └── pom.xml
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── assets/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🔌 Important API Endpoints

### Authentication

```text
POST /api/users/register
POST /api/auth/login
```

### Courses

```text
GET  /api/courses
POST /api/courses
```

### Lessons

```text
GET /api/courses/{courseId}/lessons
```

Example:

```text
GET /api/courses/2/lessons
```

This retrieves the lessons associated with the Python course.

### Student Courses

```text
GET /api/my-courses
```

---

## 💾 Database

Edunest uses **MySQL** for storing application data.

Major entities include:

* Users
* Courses
* Lessons
* Comments

The relationship between courses and lessons allows multiple lessons to be associated with a course.

---

## 💳 Razorpay Integration

Razorpay is integrated into Edunest to handle course purchases.

The general payment flow is:

```text
Select Course
      ↓
Create Order
      ↓
Razorpay Checkout
      ↓
Complete Payment
      ↓
Verify Payment
      ↓
Enroll Student
      ↓
Course Available in My Courses
```

> API keys and database credentials are kept outside the public repository and should not be committed to GitHub.

---

## 🖥️ Running the Project Locally

### Prerequisites

Make sure the following are installed:

* Java 17+
* Maven
* Node.js
* npm
* MySQL

### 1. Clone the repository

```bash
git clone https://github.com/Boopalakrishnan20/edunest-springboot.git
```

### 2. Start the Backend

Navigate to:

```bash
cd edunest-springboot/com.edunest
```

Run:

```bash
mvn spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### 3. Start the React Frontend

Open another terminal:

```bash
cd edunest-springboot/frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The React application will normally be available at:

```text
http://localhost:5173
```

---

## 📸 Screenshots



### Home Page

![Edunest Home Page](screenshots/HomeEd.png)

---

## 🔮 Future Enhancements

Some planned improvements include:

* Course progress tracking
* Lesson completion tracking
* Student reviews and ratings
* Search and filter courses
* Improved trainer dashboard
* User profile management
* Deployment to a cloud platform
* JWT-based authentication
* Role-based authorization
* Responsive UI improvements

---

## 👨‍💻 Author

**Boopalakrishnan**

GitHub:
https://github.com/Boopalakrishnan20

---

## ⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.
