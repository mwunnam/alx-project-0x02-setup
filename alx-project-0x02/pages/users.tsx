import { useEffect, useState } from "react";
import UserCard from '@/components/common/UserCard';
import {UserCardProps } from '@/interfaces';


export default function Users() {
  const [users, setUsers] = useState<UserCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        const formattedUsers = data.map((user: any) => ({
          name: user.name,
          email: user.email,
          address: `${user.address.street}, ${user.address.city}`
        }));

        setUsers(formattedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading users...</p>;
  }

  return (
    <main>
      <h2>Users</h2>
      {users.map((user) => (
        <UserCard 
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))}
    </main>
  );
}
