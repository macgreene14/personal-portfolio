import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/Contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(undefined);

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const email = await emailjs.sendForm(
        "service_ed0s5h9",
        "template_0hy37hd",
        form.current,
        "sre9-AevFo-csrOdO"
      );

      // console.log(email);
      setStatus({ type: "success" });
    } catch (error) {
      // console.log(error.text);
      setStatus({ type: "error", error });
    }
  };

  return (
    <div className="p-8">
      <form ref={form} onSubmit={sendEmail}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@email.com"
          required
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Subject"
          required
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="6"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
        />
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
      <div>
        {status?.type === "success" && (
          <div
            className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            <span className="font-medium">Success!</span> Email Sent.
          </div>
        )}
        {status?.type === "error" && (
          <div
            className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-medium">Error !</span> Please Try Again.
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
