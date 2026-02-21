"use client";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { useState, useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        />
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="glass relative w-full max-w-lg overflow-hidden rounded-2xl p-6 shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-white"
          >
            <X size={20} />
          </button>
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Book Your Detail</h2>
            <p className="text-slate-400">Step {step} of 2</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {step === 1 ? (
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Select Service</label>
                  <select className="w-full rounded-xl bg-slate-800/50 border border-white/10 p-3 text-white focus:border-blue-500 outline-none">
                    <option>Premium Wash</option>
                    <option>Interior Detail</option>
                    <option>Full Auto Spa</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Vehicle Type</label>
                  <select className="w-full rounded-xl bg-slate-800/50 border border-white/10 p-3 text-white focus:border-blue-500 outline-none">
                    <option>Sedan</option>
                    <option>SUV / Truck</option>
                    <option>Sports Car</option>
                  </select>
                </div>
                <Button className="w-full" onClick={() => setStep(2)}>Next Step</Button>
              </div>
            ) : (
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full rounded-xl bg-slate-800/50 border border-white/10 p-3 text-white outline-none focus:border-blue-500" />
                <input type="email" placeholder="Email Address" className="w-full rounded-xl bg-slate-800/50 border border-white/10 p-3 text-white outline-none focus:border-blue-500" />
                <input type="date" className="w-full rounded-xl bg-slate-800/50 border border-white/10 p-3 text-white outline-none focus:border-blue-500" />
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                  <Button className="flex-1" onClick={onClose}>Confirm Booking</Button>
                </div>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}