/* eslint-disable react/no-unescaped-entities */

function ContactText() {
  return (
    <div className="flex flex-col w-full lg:w-1/4 space-y-7">
      <img
        src="../src/data/images/mail-send.png"
        alt="Email"
        title="email_logo"
        className="h-20 w-20 border-none"
        style={{ filter: "invert(2)" }}
      />
      <h1>Have something to talk about?</h1>
      <p>
        My inbox is always open. Whether you have a question or just want to say
        hi, I'll get back to you sooner than you expect.
      </p>
    </div>
  );
}

export default ContactText;
