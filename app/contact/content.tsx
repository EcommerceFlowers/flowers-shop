'use client';

import { ToastTemplate } from '@utils/toasts';
import { useState } from 'react';

export const PageContent: IComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setTimeout(() => {
      ToastTemplate.success('Gửi thành công');
    }, 1000);
  };

  return (
    <div className="container mx-auto px-32 py-[50px]">
      <h1 className="text-4xl font-bold mb-4">Liên hệ với chúng tôi</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Tên
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Tên của bạn"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email của bạn"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Tin nhắn
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Tin nhắn của bạn"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary/70 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline"
            type="button">
            Gửi tin nhắn
          </button>
        </div>
      </form>
    </div>
  );
};
