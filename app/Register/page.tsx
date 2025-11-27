/*"use client";
import { useState } from "react";

export default function WhatsAppForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    const phone = "923197134823";
    let normalized = phone.replace(/\D/g, "");

    // If starts with 0, replace with country code (example Pakistan)
    if (normalized.startsWith("0")) normalized = "92" + normalized.slice(1);

    const text = `Name: ${name}\nMessage: ${message}`;
    const encoded = encodeURIComponent(text);

    const url = `https://wa.me/${normalized}?text=${encoded}`;

    window.open(url, "_blank");

  
    };

  return (
    <div className="p-4 space-y-4 mt-60">
      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        className="border p-2 w-full"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendToWhatsApp}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Send to WhatsApp
      </button>
    </div>
  );
}
*/
"use client";
import { useState } from "react";

export default function WhatsAppRegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [school, setSchool] = useState("");
  const [organization, setOrganization] = useState("");
  const [program, setProgram] = useState("");
  const [session, setSession] = useState("morning"); // default session
  const [registrationFee, setRegistrationFee] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online"); // default payment

  const handleSend = () => {
    // Normalize phone numbers
    const normalizePhone = (num: string) => {
      const digits = num.replace(/\D/g, "");
      return digits.startsWith("0") ? "92" + digits.slice(1) : digits;
    };

    const phoneNumber = normalizePhone(whatsapp);

    // Compose WhatsApp message
    const message = `
*Registration Form Submission*
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
WhatsApp Number: ${whatsapp}
Parent Phone Number: ${parentPhone}
School/Organization: ${school || organization}
Program Applied For: ${program}
Session: ${session}
Registration Fee: ${registrationFee}
Payment Method: ${paymentMethod}
    `;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4 border rounded shadow mt-60">
      <h2 className="text-xl font-bold">Registration Form</h2>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-2 flex-1"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2 flex-1"
        />
      </div>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="text"
        placeholder="WhatsApp Number"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="text"
        placeholder="Parent Phone Number"
        value={parentPhone}
        onChange={(e) => setParentPhone(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="text"
        placeholder="School / Organization"
        value={school || organization}
        onChange={(e) => setSchool(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="text"
        placeholder="Program Applied For"
        value={program}
        onChange={(e) => setProgram(e.target.value)}
        className="border p-2 w-full"
      />

      <div className="space-y-1">
        <label className="font-semibold">Choose Session:</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="session"
              value="morning"
              checked={session === "morning"}
              onChange={(e) => setSession(e.target.value)}
              className="mr-1"
            />
            Morning
          </label>
          <label>
            <input
              type="radio"
              name="session"
              value="evening"
              checked={session === "evening"}
              onChange={(e) => setSession(e.target.value)}
              className="mr-1"
            />
            Evening
          </label>
        </div>
      </div>

      <input
        type="text"
        placeholder="Registration Fee"
        value={registrationFee}
        onChange={(e) => setRegistrationFee(e.target.value)}
        className="border p-2 w-full"
      />

      <div className="space-y-1">
        <label className="font-semibold">Payment Method:</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="payment"
              value="online"
              checked={paymentMethod === "online"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-1"
            />
            Online
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-1"
            />
            Cash on Delivery
          </label>
        </div>
      </div>

      <button
        onClick={handleSend}
        className="bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        Send via WhatsApp
      </button>
    </div>
  );
}
