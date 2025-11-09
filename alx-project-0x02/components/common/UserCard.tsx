import { UserCardProps } from '@/interfaces';
import React, { useState }from 'react';

const UserCard: React.FC<userCardProps> = ({ name, email, address }) => {
  return (
    <div className="rounded-lg border-gray-400 shadow-md p-2 mt-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">User Profile</h3>
      <h3 className="text-gray-600 mb-3">{name}</h3>
      <h3 className="text-gray-600 mb-3">{email}</h3>
      <h3 className="text-gray-600 mb-3">{address}</h3>
    </div>
  );
};

export default UserCard;
