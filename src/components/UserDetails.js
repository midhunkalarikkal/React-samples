import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component to display user details
const DetailBox = ({ userData }) => {
  const { name, email } = userData;
  return (
    <div className="profile_card">
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

// Main component
export const UserDetails = () => {
  const [userId, setUserId] = useState(1); // Start with user 1
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch user data when userId changes
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  // Handle increment and decrement
  const incrementUserId = () => {
    if (userId < 10) setUserId(userId + 1); // Assuming 10 users in the API
  };

  const decrementUserId = () => {
    if (userId > 1) setUserId(userId - 1);
  };

  return (
    <div>
      <div>
        <button onClick={decrementUserId} disabled={userId === 1}>
          Decrement
        </button>
        <button onClick={incrementUserId} disabled={userId === 10}>
          Increment
        </button>
      </div>
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && <DetailBox userData={userData} />}
    </div>
  );
};
