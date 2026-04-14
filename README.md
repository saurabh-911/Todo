# 📝 Todo App (React + Vite + GitHub Actions CI/CD)

A simple and efficient Todo application built using **React + Vite**, with automated **CI/CD deployment using GitHub Actions** and hosted on **GitHub Pages**.

---

## 🚀 Live Demo

👉 https://saurabh-911.github.io/Todo/

---

## 📌 Features

* ✅ Add new todos
* 🗑️ Delete todos
* ✔️ Mark todos as completed
* 🔄 Toggle completion state
* ⚡ Fast UI with Vite
* 🚀 Automated deployment using CI/CD

---

## 🛠️ Tech Stack

* **Frontend:** React, JavaScript
* **Build Tool:** Vite
* **Styling:** CSS
* **CI/CD:** GitHub Actions
* **Hosting:** GitHub Pages

---

## 📂 Project Structure

```
Todo/
│
├── .github/workflows/      # CI/CD pipeline
├── todo-app/              # React app
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Setup & Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/saurabh-911/Todo.git
cd Todo/todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🚀 CI/CD Pipeline

This project uses **GitHub Actions** to:

1. Install dependencies
2. Build the React app
3. Deploy automatically to GitHub Pages

Workflow file:

```
.github/workflows/deploy-ci.yml
```

---

## ⚠️ Important Configuration

For GitHub Pages deployment, Vite base path is set:

```js
base: "/Todo/"
```

---

## 🧠 Learnings

* Setting up CI/CD using GitHub Actions
* Deploying React apps on GitHub Pages
* Debugging workflow issues
* Understanding project structure and Git root

---

## 📌 Future Improvements

* 🔍 Search functionality
* 🗂️ Filter todos (All / Completed / Pending)
* 💾 Persist data using localStorage / backend
* 🎨 Improve UI/UX

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a PR.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Saurabh Prasad**

---

⭐ If you found this project useful, consider giving it a star!
