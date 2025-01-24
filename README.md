# Project Documentation: Agronet

## Overview
Agronet is a platform aimed at transforming agriculture by connecting farmers directly with buyers, eliminating middlemen, and improving farmer profitability. It provides a seamless user experience with modern web technologies, creating an innovative solution for sustainable agriculture.

---

## Project Structure

### Frontend
The frontend is developed using **Next.js** and **Tailwind CSS** for a responsive and user-friendly interface.

#### Key Libraries Used
- **Framer Motion**: For animations.
- **Lucide Icons**: For interactive icons.
- **React**: For building UI components.

#### Directory Structure
```
frontend/
├── components/
│   ├── ui/
│   │   ├── button.js
│   │   ├── card.js
│   │   ├── animated-text.js
│   │   └── animated-number.js
│   └── layout/
│       └── navbar.js
├── pages/
│   ├── index.js
│   ├── about.js
│   └── register.js
├── public/
│   ├── images/
│   │   └── placeholder.svg
│   └── favicon.ico
├── styles/
│   ├── globals.css
│   └── tailwind.config.js
└── package.json
```

---

### Backend
The backend is implemented using **Node.js** with **Express.js** as the framework. It manages the core functionality and APIs for data management.

#### Key Libraries Used
- **Express.js**: Web framework.
- **MongoDB**: Database for data persistence.
- **Mongoose**: ORM for MongoDB.
- **Cors**: Handling cross-origin requests.

#### Directory Structure
```
backend/
├── config/
│   └── database.js
├── controllers/
│   ├── authController.js
│   ├── farmerController.js
│   └── buyerController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── userModel.js
│   ├── farmerModel.js
│   └── buyerModel.js
├── routes/
│   ├── authRoutes.js
│   ├── farmerRoutes.js
│   └── buyerRoutes.js
├── utils/
│   └── helpers.js
├── index.js
└── package.json
```

---

## Features

### Frontend
1. **Hero Section**:
   - Parallax effect.
   - Animated text highlighting the platform's purpose.

2. **Features Section**:
   - Hover effects for interactive cards.
   - Cards dynamically populated using reusable components.

3. **How It Works**:
   - Step animations to guide users through the process.

4. **Stats Section**:
   - Animated numbers displaying platform statistics.

5. **Testimonials**:
   - User feedback with card hover effects.

### Backend
1. **Authentication**:
   - JWT-based authentication.
   - Role-based access control for farmers and buyers.

2. **Data Management**:
   - MongoDB integration for data storage.
   - CRUD operations for farmers and buyers.

3. **APIs**:
   - User registration and login.
   - Fetching and managing agricultural products.

4. **Payment Gateway**:
   - Integration with Razorpay for secure transactions.

---

## Installation Guide

### Prerequisites
- Node.js
- MongoDB

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
node index.js
```

---




---

## Future Enhancements
1. Mobile app integration.
2. Advanced analytics dashboard.
3. Real-time chat feature between farmers and buyers.
4. AI-driven market price predictions.

---

## License
MIT License
