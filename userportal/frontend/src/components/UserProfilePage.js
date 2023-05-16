import React, { useState } from 'react';

const UserProfilePage = () => {
  const [name, setName] = useState('');
  const [addresses, setAddresses] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState('');

const handleProfileUpdate = () => {
// Add your profile update logic here
// Example:
console.log('Name:', name);
console.log('Addresses:', addresses);
console.log('Phone Numbers:', phoneNumbers);
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