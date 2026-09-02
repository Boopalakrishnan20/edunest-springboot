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
### Screenshots

![Edunest Home Page](screenshots/HomeEd.png)

---


