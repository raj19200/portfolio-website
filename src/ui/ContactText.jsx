/* eslint-disable react/no-unescaped-entities */

import SocialIcons from "./SocialIcons";

function ContactText() {
  return (
    <div className="flex flex-col  w-full lg:w-2/5 space-y-7">
      <img
        src="mail-send.png"
        alt="Email"
        title="email_logo"
        className="h-20 w-20 border-none"
        style={{ filter: "invert(2)" }}
      />
      <h1 className="text-2xl italic">Have something to talk about?</h1>
      <p className="text-[1.075] font-[50]">
        My inbox is always open. Whether you have a question or just want to say
        hi, I'll get back to you sooner than you expect.
      </p>
      <p className="text-[1.050] font-[10]">
        Feel free to contact me through the following platforms. Also, please
        check out my work on GitHub.
      </p>
      <SocialIcons />
    </div>
  );
}

export default ContactText;
