"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold"><Image   src="/file.jpg" alt="x" width={100} height={100}/></div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Icon (simple) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl font-bold"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-md w-full px-4 pb-4">
          <ul className="flex flex-col gap-4 text-lg mt-2">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
