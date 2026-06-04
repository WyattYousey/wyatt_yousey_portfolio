import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, type Variants } from 'framer-motion';
import { screenBreakMap } from '../../data/screenBreaks';

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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const slideFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -850,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 850,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

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

    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.message === ''
    ) {
      return;
    }

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

  const screenWidth = window.innerWidth;

  return (
    <motion.form
      id="contact-form"
      onSubmit={handleSubmit}
      className="flex flex-col m-auto mt-10 gap-4 typography-body w-fit text-(--color-text)"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.label
        variants={slideFromLeft}
        htmlFor="name"
        className=" flex gap-4 bg-(--color-card-bg) p-3 rounded-t-2xl"
      >
        {nameInput}
        <input
          className={`${screenWidth < screenBreakMap.largeTablet ? 'w-65' : screenWidth < screenBreakMap.mediumDesktop ? 'w-125' : 'w-300'}  focus:outline-1 focus:outline-black rounded-md pl-2 text-(--color-text) focus:bg-(--color-button-bg)`}
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          minLength={2}
          maxLength={46}
          autoComplete="name"
          required
        />
      </motion.label>
      <motion.label
        variants={slideFromRight}
        htmlFor="email"
        className="flex gap-4 bg-(--color-card-bg) p-3"
      >
        {emailInput}
        <input
          className={`${screenWidth < screenBreakMap.largeTablet ? 'w-55' : screenWidth < screenBreakMap.mediumDesktop ? 'w-125' : 'w-300'}  focus:outline-1 focus:outline-black rounded-md pl-2 text-(--color-text) focus:bg-(--color-button-bg)`}
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          id="email"
          autoComplete="email"
          required
        />
      </motion.label>
      <motion.label
        variants={slideFromLeft}
        htmlFor="message"
        className="bg-(--color-card-bg) flex relative gap-4 p-3 rounded-b-2xl"
      >
        {messageInput}
        <textarea
          className={`${screenWidth < screenBreakMap.largeTablet ? 'w-50' : screenWidth < screenBreakMap.mediumDesktop ? 'w-125' : 'w-300'} focus:outline-1 focus:outline-black rounded-md pl-2 text-(--color-text) focus:bg-(--color-button-bg)`}
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          minLength={2}
          autoComplete="off"
          required
        />
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 1.5,
            type: 'spring',
            stiffness: 200,
            damping: 10,
          }}
          className="absolute bottom-2 right-5 px-4 py-2 text-(--color-text) typography-button border border-(--color-text) rounded-md bg-(--color-button-bg) hover:text-(--color-button-bg-hover) hover:cursor-pointer hover:text-shadow-(--shadow-button-hover) transition-all duration-450 ease-in-out"
          type="submit"
        >
          {isSending ? 'Sending...' : 'Send'}
        </motion.button>
      </motion.label>
    </motion.form>
  );
};

export default ContactFormCard;
