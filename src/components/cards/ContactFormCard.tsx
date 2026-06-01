import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          submittedAt: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully');
      setIsSending(false);

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setIsSending(false);
      console.error(error);
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
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
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </label>
    </form>
  );
};

export default ContactFormCard;
