 import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setNotice("This form is a front-end demo and does not send messages yet. Add a form service or backend before publishing.");
  }

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setNotice("");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input name="name" value={form.name} onChange={update} placeholder="Your name" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required autoComplete="email" />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" value={form.message} onChange={update} placeholder="What would you like to discuss?" rows="5" required />
      </label>
      <button className="button button-primary form-submit" type="submit">Send message <Send size={16} /></button>
      {notice && <p className="form-notice" role="status">{notice}</p>}
    </form>
  );
}
