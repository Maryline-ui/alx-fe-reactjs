# Advanced Routing in React with React Router

## Objective
Implement advanced routing techniques in a React application using **React Router v6**.  
This project demonstrates **nested routes, dynamic routes, and protected routes** to handle authentication and complex navigation.

---

## Features
- **Nested Routing**: Profile page with sub-routes for `ProfileDetails` and `ProfileSettings`.
- **Dynamic Routing**: Blog posts rendered via `/blog/:id`.
- **Protected Routes**: Only authenticated users can access `/profile` and its children.
- **Authentication Simulation**: Simple login/logout toggle to control access.

---

## Project Setup
```bash

npm create vite@latest react-router-advanced -- --template react
cd react-router-advanced

npm install react-router-dom
