// src/components/Profile.jsx
import { Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <Outlet />
    </div>
  );
}
