# React Blog Platform with Appwrite

A modern, full-featured blog platform built with **React**, **Redux**, **Appwrite**, and **TailwindCSS**. Users can sign up, log in, create posts with rich text content, upload images, and manage their posts. Fully responsive and optimized for a smooth user experience.

---

## 🚀 Features

- **User Authentication:** Sign up, login, and logout powered by Appwrite.
- **Post Management:** Create, edit, and delete posts.
- **Rich Text Editor:** TinyMCE integrated for creating rich content.
- **Image Uploads:** Upload and preview featured images using Appwrite Storage.
- **Protected Routes:** Access control for authenticated pages.
- **Responsive UI:** Mobile-first design with TailwindCSS.
- **State Management:** Redux Toolkit for user and app state.

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS
- **State Management:** Redux Toolkit
- **Backend & Storage:** Appwrite
- **Routing:** React Router v6
- **Form Handling:** React Hook Form
- **Rich Text Editor:** TinyMCE
- **Build Tool:** Vite / Create React App (specify which you use)

---

## 📦 Project Structure

```
src/
├─ appwrite/ # Appwrite services (auth, database, storage)
├─ components/ # Reusable UI components (Button, Input, RTE, Header, Footer)
├─ pages/ # All pages (Home, Login, Signup, AddPost, EditPost, Post, AllPost)
├─ store/ # Redux store & slices
├─ App.js # Main App component
└─ index.js # Entry point
```

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-appwrite-blog.git
cd react-appwrite-blog
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure Appwrite:

- Create a `.env` file in the root directory.

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
VITE_APPWRITE_PROJECT_NAME=
```

4. Run the project:

```bash
npm run dev
# or
yarn dev
```

---

## 📝 Usage

- Visit /signup to create a new account.
- Login via /login.
- Add posts via /add-post.
- View all posts at /all-posts.
- Click on a post to see full content and edit/delete if you are the author.

---

## UI/UX

- Mobile-first responsive design.

- TailwindCSS provides clean and modern components.

- Consistent spacing, rounded buttons, hover effects, and accessible forms.

- Rich text editing with image previews.

---

## Appwrite Setup

1. Database: Create a collection for posts with fields:

- title (string)

- slug (string, unique)

- content (text)

- featuredImage (string)

- status (string: active/inactive)

- userId (string)

2. Storage Bucket: Create a bucket for storing images.

3. Authentication: Enable email/password authentication.

---

## Note

Ensure you have an Appwrite server running and properly configured to use this application. Adjust CORS settings in Appwrite to allow requests from your frontend URL.

---

## Links

- [Appwrite Documentation](https://appwrite.io/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TinyMCE Documentation](https://www.tiny.cloud/docs/)

---

## License

MIT License @[Biswayan Paul](https://github.com/biswayanpaul)

---
