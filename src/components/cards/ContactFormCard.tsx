import React, { useState } from 'react';

interface Inputs {
  nameInput: string;
  emailInput: string;
  messageInput: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactFormCard = ({ nameInput, emailInput, messageInput }: Inputs) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form id="contact-form">
      <label htmlFor="name">
        {nameInput}
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          minLength={2}
          maxLength={46}
        />
      </label>
      <label htmlFor="email">
        {emailInput}
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          id="email"
        />
      </label>
      <label htmlFor="message">
        {messageInput}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          minLength={2}
        />
        <button
          className="px-4 py-2 text-(--color-text) font-bold text-2xl border border-(--color-text) rounded-md bg-(--color-button-bg) hover:text-(--color-button-bg-hover) hover:text-3xl hover:cursor-pointer hover:text-shadow-(--shadow-button-hover) transition-all duration-450 ease-in-out"
          type="submit"
        >
          Send
        </button>
      </label>
    </form>
  );
};

export default ContactFormCard;
