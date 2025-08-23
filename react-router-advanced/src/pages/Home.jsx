import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/profile/details">Profile Details</Link> |{" "}
        <Link to="/profile/settings">Profile Settings</Link> |{" "}
        <Link to="/post/101">Blog Post 101</Link>
      </nav>
    </div>
  );
}
