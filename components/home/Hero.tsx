"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "../ui/BookingModel";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute -top-[30%] -left-[10%] h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 border border-blue-500/20">
            ✨ #1 Rated Auto Spa in the City
          </span>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            Premium Car Wash & <br />
            <span className="text-gradient">Auto Detailing Experience</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Elevate your ride with our state-of-the-art cleaning technology and expert detailers. 
            Drive Clean. Drive Confident.
          </p>
          
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="h-12 px-8 text-lg" onClick={() => setShowModal(true)}>Book Now</Button>
            <Link href="/services">
              <Button variant="outline" className="h-12 px-8 text-lg group">
                View Packages <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <BookingModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}