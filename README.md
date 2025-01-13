# AgroPulse: Pest Detection System

AgroPulse is a localized pest detection system designed to assist farmers in identifying pests in crops efficiently. This system leverages modern technologies like machine learning and provides multilingual support in Sinhala and Tamil, making it accessible for Sri Lankan farmers. 

---

## Key Features
- **Pest Detection**: Uses a trained Xception model with 8,000 images for accurate pest identification.
- **Multilingual Support**: Supports local languages such as Sinhala and Tamil for user convenience.
- **User-Friendly Interface**: Built with React and Vite for a responsive and intuitive UI.
- **RESTful API**: Backend powered by Flask for handling user requests and data processing.
- **MongoDB Integration**: Stores user data and pest detection records for scalability and efficiency.

---

## Technology Stack

### Frontend:
- **React**: For building dynamic and interactive user interfaces.
- **Vite**: For fast and optimized front-end development.

### Backend:
- **Flask**: A lightweight Python framework for creating RESTful APIs.
- **Machine Learning**: Xception model for pest detection.

### Database:
- **MongoDB**: NoSQL database for storing user information and detection data.

### Other Tools:
- **JWT Authentication**: Secure login system.
- **Axios**: For handling API requests in the frontend.

---

## Project Structure
```
AgroPulse/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   ├── models.py
│   │   ├── auth.py
│   │   └── config.py
│   └── run.py
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── api.js
│   │   └── App.jsx
└── README.md
```

---

## Installation and Setup

### Prerequisites:
- Node.js and npm installed.
- Python (3.8 or later).
- MongoDB installed and running locally or on a server.

### Backend Setup:
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the Flask server:
   ```bash
   python run.py
   ```

### Frontend Setup:
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage
1. Open the frontend in your browser (default: `http://localhost:5173`).
2. Login or sign up to access the dashboard.
3. Upload pest images for detection and get results instantly.

---

## Future Enhancements
- Adding a **mobile application** for better accessibility.
- Integration with **real-time pest tracking** using IoT devices.
- Advanced **reporting and analytics** for farmers.
- Enhanced **multilingual support** for more languages.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact
For inquiries or support, please contact us at:
- Email: support@agropulse.com
- Phone: +94 71 7651 060

---

Thank you for using AgroPulse! Together, we can empower farmers with technology.
