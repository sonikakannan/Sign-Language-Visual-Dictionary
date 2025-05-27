# 🧠 Mini Sign Language Visual Dictionary

This is a mini project built as part of the **SignSetu MERN Stack Internship – Quick Assignment Round**. The application allows users to view and add sign language words with definitions, images, and videos.

---

## 🚀 Tech Stack

* **Frontend**: HTML, CSS, React.js
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Addtional Features Used**: Tailwind CSS, Material UI, React Toastify

---

## 🌐 Live Demo

> *Coming Soon* or add your deployed link here.

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/signsetu-mini-dictionary.git
cd signsetu-mini-dictionary
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
PORT=5001   
MONGODB_URL=mongodb+srv://sonikakannan66:CzlDzsezMfi8eK9i@cluster0.y2tczkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

Run the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Start the frontend:

```bash
npm run dev
```

---

## 📋 Features

### ✅ Core Features

* **Home Page**

  * Displays list of sign language words
* **Search Bar**

  * Search words by keyword
* **Word Cards**

  * Show word, definition, image, and video

### ➕ Add Word Form

* Add a new word with:

  * Word
  * Definition
  * Image URL
  * Video URL

### 🧠 API Endpoints

* `GET /words` – List all words
* `GET /words/:query` – Filter a word by query
* `POST /words` – Add a new word
* `POST /word/delete/:id` – Delete a word

---

## 🎁 Bonus Features Implemented

* ✅ Mobile responsive design
* ✅ Toast notifications using `react-toastify`
* ✅ Loading spinner during API calls
* 🚧 Delete functionality
* 🚧 Redux Toolkit – *for state management*

---

## 🧪 Submission Details

* ✅ GitHub Repo: \[your GitHub link here]
* ✅ 1-Minute Walkthrough Video: \[your video link here]
* ✅ README file (this file)

---

## 💡 What Makes This Special?

* Clean and accessible UI with Material UI + Tailwind
* Modular and scalable file structure
* Code is well-commented and easy to follow
* User feedback with toast notifications
* Mobile-friendly and responsive layout

