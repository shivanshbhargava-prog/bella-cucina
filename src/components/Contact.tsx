
function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0c0b09] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-[0.4em] text-[#d4af70]">
            GET IN TOUCH
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Whether you're planning a special evening or simply
            have a question, we're here to help.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="border border-[#3a3025] bg-[#1c1814] p-8 text-center">
            <h3 className="mb-4 font-serif text-2xl text-[#d4af70]">
              Visit Us
            </h3>
            <p className="leading-7 text-gray-400">
              123 Italian Street
              <br />
              New Delhi, India
            </p>
          </div>

          <div className="border border-[#3a3025] bg-[#1c1814] p-8 text-center">
            <h3 className="mb-4 font-serif text-2xl text-[#d4af70]">
              Call Us
            </h3>
            <p className="text-gray-400">
              +91 9876X XXXX
            </p>
            <p className="mt-2 text-gray-400">
              hello@bellacucina.com
            </p>
          </div>

          <div className="border border-[#3a3025] bg-[#1c1814] p-8 text-center">
            <h3 className="mb-4 font-serif text-2xl text-[#d4af70]">
              Opening Hours
            </h3>
            <p className="leading-7 text-gray-400">
              Monday – Sunday
              <br />
              12:00 PM – 11:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
