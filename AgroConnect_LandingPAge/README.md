# AgroConnect

AgroConnect is a web platform designed to bridge the gap between farmers and buyers by enabling direct transactions, eliminating middlemen, and improving the profitability of farmers. 

---

## 🌟 **Features**

- **Farmer and Buyer Registration**: Separate registration for farmers and buyers with secure login.
- **Subscription System**: Farmers and buyers pay a yearly subscription fee to access the platform.
- **Product Listings**: Farmers can list their products with details like name, description, price, and quantity.
- **Buyer Search**: Buyers can browse product listings and send inquiries to farmers.
- **Subscription Management**: Automatic subscription tracking with renewal reminders via email/SMS.
- **Admin Dashboard**: Super admin can manage users, track subscriptions, and send notifications.
- **Notifications**: Automated alerts for subscription expiration and account deactivation.

---

## 🛠 **Tech Stack**

### **Frontend**:
- [React.js](https://reactjs.org/) - For building the user interface.
- [Bootstrap](https://getbootstrap.com/) - For responsive and modern UI components.

### **Backend**:
- [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/) - For handling server-side logic.
- [MongoDB](https://www.mongodb.com/) - As the database to store user and product details.

### **Integrations**:
- **Payment Gateway**: [Razorpay](https://razorpay.com/) for managing subscription payments.
- **Email Notifications**: [SendGrid](https://sendgrid.com/) for sending email alerts.
- **SMS Notifications**: [Twilio](https://www.twilio.com/) for SMS notifications.

---

## 📂 **Folder Structure**

```
AgroConnect/
├── client/                      # Frontend Code
│   ├── public/
│   ├── src/
│   │   ├── components/          # React Components
│   │   ├── pages/               # Pages (Home, About, etc.)
│   │   ├── App.js               # Main App Component
│   │   └── index.js             # React Entry Point
│   └── package.json
│
├── server/                      # Backend Code
│   ├── config/                  # Configuration Files (DB, Payment)
│   ├── controllers/             # Business Logic
│   ├── models/                  # Mongoose Models
│   ├── routes/                  # API Endpoints
│   ├── middleware/              # Middleware Functions
│   ├── server.js                # Main Server File
│   └── package.json
│
└── README.md                    # Project Documentation
```

---

## 🚀 **Getting Started**

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/AgroConnect.git
   cd AgroConnect
   ```

2. **Setup Frontend**:
   ```bash
   cd client
   npm install
   npm start
   ```

3. **Setup Backend**:
   ```bash
   cd server
   npm install
   npm run dev
   ```

4. **Environment Variables**:
   Create a `.env` file in the `server` folder and add:
   ```env
   MONGO_URI=your_mongo_db_connection_string
   RAZORPAY_KEY=your_razorpay_key
   RAZORPAY_SECRET=your_razorpay_secret
   SENDGRID_API_KEY=your_sendgrid_api_key
   TWILIO_ACCOUNT_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   ```

---

## 📄 **Key Functionalities**

### **1. User Roles**
- **Farmers**: Add product listings, manage their profile, and renew subscriptions.
- **Buyers**: Browse products, contact farmers, and renew subscriptions.
- **Super Admin**: Monitor users, track subscriptions, and send reminders.

### **2. Subscription Tracking**
- Subscription dates are tracked for each user.
- Automated email/SMS notifications for renewal reminders.
- Accounts are deactivated after subscription expiry if not renewed.

### **3. Product Listings**
- Farmers can add product details including name, description, price, and quantity.
- Buyers can browse products and contact farmers directly.

---

## 📧 **Contact**

For any queries or contributions:
- **Email**: support@agroconnect.com
- **GitHub Issues**: [Create an Issue](https://github.com/NitSanghani111/AgroConnect/issues)

---

## 🌟 **Contributions**

We welcome contributions to AgroConnect! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## 📜 **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
