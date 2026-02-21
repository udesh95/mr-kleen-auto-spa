"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookingModal } from "../ui/BookingModel";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
            <Car className="text-blue-500" size={32} />
            <span>Mr.<span className="text-blue-500">Kleen</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-400",
                  pathname === link.href ? "text-blue-500" : "text-slate-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button onClick={() => setShowModal(true)}>Book Now</Button>
          </div>

          {/* Mobile Toggle */}
          <button className="text-slate-300 md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="glass absolute inset-x-0 top-full flex flex-col gap-4 border-b border-white/10 p-6 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-blue-500"
              >
                {link.name}
              </Link>
            ))}
            <Button onClick={() => { setShowModal(true); setIsOpen(false); }} className="w-full">
              Book Now
            </Button>
          </div>
        )}
      </nav>
      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}