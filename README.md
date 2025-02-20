# 🛍️ Next.js E-commerce Template

A modern, feature-rich e-commerce template built with cutting-edge technologies for seamless online shopping experiences.
However, the design and content on current pages are only at the most basic level, so you can easily customize them to your liking.

## ⚡ Tech Stack

| Technology    | Version |
|--------------|---------|
| Next.js      | 15.1.7  |
| React        | 19.0.0  |
| TypeScript   | 5.0.0   |
| Tailwind CSS | 3.4.1   |
| Node.js      | ≥18.17.0|

## 🎯 Key Features

### 🔐 Authentication
- User registration with username & password
- Secure login and persistent sessions
- Token-based authentication system

### 🏪 Products & Categories
- Dynamic product listing and grid views
- Smart category filtering
- Featured products showcase

### 🎨 Layout & Theming
- Professional header & footer components
- Seamless dark/light mode switching
- Responsive design for all devices


## 🚀 Getting Started

1. **Clone the Repository**
  ```bash
  git clone https://github.com/your-username/your-repo.git
  cd your-repo
  ```

2. **Install Dependencies**
  ```bash
    npm install
    # or
    yarn install
  ```

3. **Environment Setup**
  ```bash
  cp .env.example .env
  ```
4.**Start Development Server**
  ```bash
npm run dev
# or
yarn dev
  ```


## 🛠️ Customization Guide

### Styling 🎨

- **Tailwind CSS Configuration:**  
  Configure your Tailwind settings in the `tailwind.config.js` file.

- **Global Styles:**  
  Define your global CSS in `src/app/globals.css`.

---

### Adding Features ✨

- **New Pages:**  
  Create new pages by adding files to the `app/` directory.

- **Components:**  
  Add reusable UI components in the `src/components/` directory.

- **API Services:**  
  Update or add API services in `src/services/api/`.

- **Type Definitions:**  
  If needed, define custom types in `src/types/`.

---

### API Integration 🔌

- **Environment Endpoints:**  
  Configure your API endpoints in the `.env` file.

- **API Client:**  
  Modify the API client in `src/services/api/fetch-client.ts` as necessary.

- **Additional Services:**  
  Add new service modules under `src/services/api/endpoints/` to handle other API calls.

---
