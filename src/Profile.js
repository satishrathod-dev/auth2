import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        navigate("/");
        return;
      }

      const { id } = storedUser;
      try {
        const response = await fetch("https://dummyjson.com/users/${id}");
        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("userProfile", JSON.stringify(data));
          setUser(data);
        } else {
          navigate("/");
        }
      } catch (error) {
        navigate("/");
      }
    };
    fetchUserProfile();
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Profile</h1>
      <p>
        <strong>Username:</strong>
        {user.username}
      </p>
      <p>
        <strong>Email:</strong>
        {user.email}
      </p>
      <p>
        <strong>First Name:</strong>
        {user.firstName}
      </p>
      <p>
        <strong>Last Name:</strong>
        {user.lastName}
      </p>
    </div>
  );
};

export default Profile;
