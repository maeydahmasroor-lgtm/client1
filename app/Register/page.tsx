"use client";
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
