import ContactForm from "../ui/ContactForm";
import ContactText from "../ui/ContactText";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function Contact() {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-10 lg:mt-36 pl-24 pr-24 lg:pl-32 lg:pr-32 ">
      <h1
        className=" text-websiteColor underline underline-offset-[16px] text-4xl	font-medium"
        data-aos="fade-up"
      >
        Get In Touch
      </h1>
      <div className="pt-14 flex flex-col lg:flex-row item-center">
        <ContactText />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
