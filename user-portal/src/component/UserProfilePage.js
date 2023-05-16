import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfilePage = () => {
  const [name, setName] = useState('');
  const [addresses, setAddresses] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/api/user-profile/');
        const { name, addresses, phone_numbers } = response.data;
        setName(name);
        setAddresses(addresses);
        setPhoneNumbers(phone_numbers);
      } catch (error) {
        console.log('An error occurred while fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleProfileUpdate = async () => {
    try {
      await axios.put('/api/user-profile/', {
        name,
        addresses,
        phone_numbers: phoneNumbers,
      });
      console.log('Profile updated successfully.');
    } catch (error) {
      console.log('An error occurred while updating user profile:', error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Addresses:</label>
        <textarea value={addresses} onChange={(e) => setAddresses(e.target.value)} />
        <label>Phone Numbers:</label>
        <input type="text" value={phoneNumbers} onChange={(e) => setPhoneNumbers(e.target.value)} />
        <button type="button" onClick={handleProfileUpdate}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UserProfilePage;
