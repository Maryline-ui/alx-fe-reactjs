// src/pages/Home.jsx
export default function Home() {
  return <h1>Home Page</h1>;
}

// src/pages/Profile.jsx
import { Outlet } from "react-router-dom";
export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <Outlet />
    </div>
  );
}

// src/pages/ProfileDetails.jsx
export default function ProfileDetails() {
  return <h2>Profile Details</h2>;
}

// src/pages/ProfileSettings.jsx
export default function ProfileSettings() {
  return <h2>Profile Settings</h2>;
}

// src/pages/BlogPost.jsx
import { useParams } from "react-router-dom";
export default function BlogPost() {
  const { id } = useParams();
  return <h2>Blog Post ID: {id}</h2>;
}
