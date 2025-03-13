"use client";

import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function UserCard() {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<number>(1); // Başlangıç ID'si

  const fetchUser = async (id: number) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!res.ok) throw new Error("Kullanıcı bulunamadı!");
      const data: User = await res.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser(userId); // Sayfa yüklendiğinde bir kullanıcı getir
  }, [userId]); // userId değiştiğinde yeni kullanıcı getir

  const handleNewUser = () => {
    const newId = Math.floor(Math.random() * 10) + 1; // 1-10 arasında rastgele ID seç
    setUserId(newId);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg w-80 mx-auto mt-10">
      <h2 className="text-xl font-bold text-black">Kullanıcı Bilgileri</h2>
      {user ? (
        <div className="mt-4 text-center">
          <p className="text-black font-semibold">{user.name}</p>
          <p className="text-black">{user.email}</p>
          <p className="text-black">{user.phone}</p>
          <button
            onClick={handleNewUser}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Yeni Kullanıcı Getir
          </button>
        </div>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
}