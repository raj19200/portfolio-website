import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full lg:w-3/5 pl-44"
    >
      <div className="input-group">
        <input
          className="input"
          required
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label className="label" htmlFor="name">
          Name
        </label>
      </div>
      <div className="input-group">
        <input
          className="input"
          required
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label className="label" htmlFor="email">
          Email
        </label>
      </div>
      <div className="input-group">
        <textarea
          name="msg"
          className="textarea p-3"
          required
          id="msg"
          rows="5"
          cols="28"
          value={formData.msg}
          onChange={handleChange}
        />
        <label className="label" htmlFor="msg">
          Message
        </label>
      </div>
      <div>
        <button
          target="_blank"
          type="submit"
          className="text-websiteColor hover:text-textColor border border-websiteColor hover:bg-websiteColor focus:ring-4 focus:outline-none focus:ring-websiteColor font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
