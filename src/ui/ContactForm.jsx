function ContactForm() {
  return (
    <div className="flex flex-col">
      <div className="input-group">
        <input className="input" required type="text" id="name" />
        <label className="label" htmlFor="name">
          Name
        </label>
      </div>
      <div className="input-group">
        <input className="input" required type="text" id="email" />
        <label className="label" htmlFor="email">
          Email
        </label>
      </div>
      <div className="input-group">
        <input className="input" required type="text" id="msg" />
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
    </div>
  );
}

export default ContactForm;
