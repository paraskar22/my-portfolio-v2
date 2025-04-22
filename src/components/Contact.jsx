import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      form.current,
      'your_public_key'
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Try again.');
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <input type="text" name="user_name" placeholder="Your Name" required className="p-2 rounded" />
      <input type="email" name="user_email" placeholder="Your Email" required className="p-2 rounded" />
      <textarea name="message" placeholder="Your Message" required className="p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">Send Message</button>
    </form>
  );
};

export default Contact;
