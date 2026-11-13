
import { useState } from "react";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitted(true);
    console.log("Reservation Details:", formData);
  }

  return (
    <section
      id="reservation"
      className="bg-[#0c0b09] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl">

        <div className="mb-14 text-center">
          <p className="mb-4 text-sm tracking-[0.4em] text-[#d4af70]">
            BOOK YOUR EXPERIENCE
          </p>

          <h2 className="font-serif text-4xl md:text-5xl">
            Reserve Your Table
          </h2>

          <p className="mt-5 text-gray-400">
            Join us for an unforgettable Italian dining experience.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-[#d4af70] bg-[#1c1814] p-8 text-center">
            <h3 className="text-2xl text-[#d4af70]">
              Reservation Submitted!
            </h3>
            <p className="mt-4 text-gray-400">
              Thank you for choosing Bella Cucina.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-6 rounded-2xl border border-[#3a3025] bg-[#1c1814] p-8 md:grid-cols-2"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="rounded-lg border border-[#3a3025] bg-[#0c0b09] p-4 text-white outline-none focus:border-[#d4af70]"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="rounded-lg border border-[#3a3025] bg-[#0c0b09] p-4 text-white outline-none focus:border-[#d4af70]"
            />

            
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;

                  if (/^\d{0,10}$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Phone Number"
              required
              minLength={10}
              maxLength={10}
              inputMode="numeric"
              className="rounded-lg border border-[#3a3025] bg-[#0c0b09] p-4 text-white outline-none focus:border-[#d4af70]"
            />


            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="rounded-lg border border-[#3a3025] bg-[#0c0b09] p-4 text-white outline-none focus:border-[#d4af70]"
            />

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="rounded-lg border border-[#3a3025] bg-[#0c0b09] p-4 text-white outline-none focus:border-[#d4af70]"
            >
              <option value="">Select Time</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="08:00 PM">08:00 PM</option>
              <option value="09:00 PM">09:00 PM</option>
            </select>

            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              className="rounded-lg border border-[#3a3025] bg-[#0c0b09] p-4 text-white outline-none focus:border-[#d4af70]"
            >
              <option value="">Number of Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>

            <textarea
              name="requests"
              value={formData.requests}
              onChange={handleChange}
              placeholder="Special Requests (Optional)"
              rows={4}
              className="rounded-lg border border-[#3a3025] bg-[#0c0b09] p-4 text-white outline-none focus:border-[#d4af70] md:col-span-2"
            />

            <button
              type="submit"
              className="cursor-pointer bg-[#d4af70] px-8 py-4 font-semibold uppercase tracking-widest text-black transition duration-300 hover:bg-white md:col-span-2"
            >
              Reserve Now
            </button>

          </form>
        )}
      </div>
    </section>
  );
}

export default Reservation;
