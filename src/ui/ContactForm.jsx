import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { RiMailSendLine } from "react-icons/ri";
function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2tmy15k",
        "template_m29mvxm",
        form.current,
        "hXLPiUOd7F9--Qkoj"
      )
      .then(
        () => {
          toast(
            "Hooray! Your message is on its way to us. We'll be in touch soon."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col justify-center  lg:justify-normal  w-full lg:w-3/5 pt-5 lg:pl-44"
    >
      <div className="input-group">
        <input className="input" required type="text" id="name" name="name" />
        <label className="label" htmlFor="name">
          Name
        </label>
      </div>
      <div className="input-group">
        <input className="input" required type="text" id="email" name="email" />
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
        />
        <label className="label" htmlFor="msg">
          Message
        </label>
      </div>
      <div>
        <button
          target="_blank"
          className=" flex items-center justify- space-x-2  text-websiteColor hover:text-textColor border border-websiteColor hover:bg-websiteColor focus:ring-4 focus:outline-none focus:ring-websiteColor font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          <input type="submit" value="Send" />
          <RiMailSendLine />
        </button>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#ffb633",
              color: "#fff",
            },

            // Default options for specific types
          }}
        />
      </div>
    </form>
  );
}

export default ContactForm;
