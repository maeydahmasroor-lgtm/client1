/*"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold"><Image   src="/file.jpg" alt="x" width={100} height={100}/></div>

        <ul className="hidden md:flex gap-6 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Classes</Link></li>
          <li><Link href="/services">Resources</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl font-bold"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

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
*/
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    if (openSubmenu === menu) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(menu);
    }
  };

  return (
    <nav className="w-full bg-white shadow-md fixed z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Image src="/file.jpg" alt="Logo" width={100} height={100} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg relative">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="relative">
            <button onClick={() => toggleSubmenu("classes")}>
              Classes
            </button>
            {/* Submenu */}
            {openSubmenu === "classes" && (
              <ul className="absolute top-full left-0 bg-white shadow-md mt-2 rounded w-40">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/classes/OLevels">O Levels</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/classes/ALevels">A Levels</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/classes/schedule">See All Classes Schedule</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button onClick={() => toggleSubmenu("resources")}>
              Resources
            </button>
            {/* Submenu */}
            {openSubmenu === "resources" && (
              <ul className="absolute top-full left-0 bg-white shadow-md mt-2 rounded w-40">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/Register">Registration</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/PastPaper">Past Papers</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/ALevelssubject">A Levels Subject Combination</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/admission">
            <button className="ml-6  text-white px-4 py-2 rounded hover:bg-blue-700 transition" style={{backgroundColor:"#e19b4c"}}>
              Book a Free demo
            </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Icon */}
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
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              <button
                onClick={() => toggleSubmenu("classes")}
                className="w-full text-left"
              >
                Classes
              </button>
              {openSubmenu === "classes" && (
                <ul className="flex flex-col ml-4 mt-1 gap-1">
                  <li>
                    <Link href="/classes/math" onClick={() => setOpen(false)}>Math</Link>
                  </li>
                  <li>
                    <Link href="/classes/science" onClick={() => setOpen(false)}>Science</Link>
                  </li>
                  <li>
                    <Link href="/classes/english" onClick={() => setOpen(false)}>English</Link>
                  </li>
                </ul>
              )}
            </li>
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/services" onClick={() => setOpen(false)}>Resources</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
