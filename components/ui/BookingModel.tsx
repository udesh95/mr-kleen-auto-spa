"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, CreditCard, Car, Sparkles, Check, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

// 1. Data Definitions
const SERVICES = [
  { id: "interior", name: "Interior Detail", basePrice: 139, icon: Sparkles },
  { id: "exterior", name: "Exterior Detail(Buff & Wax)", basePrice: 139, icon: Car },
  { id: "full", name: "Showroom Detail(Inside & Out)", basePrice: 229, icon: Check },
  { id: "ceramic", name: "Ceramic Coating", basePrice: 600, icon: CreditCard },
];

const VEHICLE_TYPES = [
  { id: "sedan", name: "Sedan", add: 0 },
  { id: "suv", name: "SUV", add: 10 },
  { id: "large-suv", name: "Large SUV / Truck", add: 20 },
];

// MOCK DATABASE: In production, you would fetch this from your database to see which days already have 3 bookings.
const MOCK_FULLY_BOOKED_DATES = [
  "2026-02-25", 
  "2026-02-28"
];

export function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [formData, setFormData] = useState({
    serviceId: "exterior",
    vehicleId: "sedan",
    name: "",
    email: "",
    phone: "",
    date: "", // Will store as YYYY-MM-DD
  });

  // 2. Generate Available Dates (Next 30 Days)
  useEffect(() => {
    const dates: Date[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start at midnight to ignore times

    // Generate the next 30 days to show in the UI
    for (let i = 0; i < 30; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);

      // RULE 1: No Sundays (0 represents Sunday in JavaScript)
      if (nextDate.getDay() === 0) continue;

      const dateString = nextDate.toISOString().split("T")[0];

      // RULE 2: Check if date is fully booked (3 appointments)
      if (MOCK_FULLY_BOOKED_DATES.includes(dateString)) continue;

      dates.push(nextDate);
    }
    setAvailableDates(dates);
  }, []);

  const totalPrice = useMemo(() => {
    const service = SERVICES.find((s) => s.id === formData.serviceId);
    const vehicle = VEHICLE_TYPES.find((v) => v.id === formData.vehicleId);
    if (!service || !vehicle) return 0;
    return Math.round(service.basePrice + vehicle.add);
  }, [formData.serviceId, formData.vehicleId]);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handlePayment = async () => {
    console.log("Redirecting to Stripe with:", { ...formData, totalPrice });
    alert("Redirecting to Stripe... (Backend needed to process)");
  };

  // Reset step when modal closes
  useEffect(() => { if (!isOpen) setStep(1); }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" 
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="glass relative w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="border-b border-white/10 p-6 flex justify-between items-center bg-white/5 shrink-0">
            <div>
              <h2 className="text-xl font-bold">Book Your Appointment</h2>
              <p className="text-sm text-slate-400">Step {step} of 3</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
            {/* Step 1: Selection */}
            {step === 1 && (
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-3 block">Select Service</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id} onClick={() => setFormData({ ...formData, serviceId: s.id })}
                        className={cn("flex items-center gap-3 p-4 rounded-2xl border transition-all text-left", formData.serviceId === s.id ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/20" : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30")}
                      >
                        <s.icon size={20} className={formData.serviceId === s.id ? "text-white" : "text-blue-400"} />
                        <span className="font-medium">{s.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-300 mb-3 block">Vehicle Size</label>
                  <div className="grid grid-cols-3 gap-3">
                    {VEHICLE_TYPES.map((v) => (
                      <button
                        key={v.id} onClick={() => setFormData({ ...formData, vehicleId: v.id })}
                        className={cn("p-3 rounded-2xl border transition-all text-center text-sm md:text-base font-medium", formData.vehicleId === v.id ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/20" : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30")}
                      >
                        {v.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-4 flex justify-between items-center mt-6">
                  <span className="text-slate-300">Estimated Price:</span>
                  <span className="text-2xl font-bold text-white">${totalPrice}</span>
                </div>

                <Button className="w-full h-14 text-lg mt-4" onClick={nextStep}>
                  Continue to Details <ChevronRight className="ml-2" size={20} />
                </Button>
              </motion.div>
            )}

            {/* Step 2: Customer Info & Date */}
            {step === 2 && (
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                <div className="space-y-4">
                  <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-500 transition-colors text-white placeholder:text-slate-500" />
                  <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-500 transition-colors text-white placeholder:text-slate-500" />
                  <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-blue-500 transition-colors text-white placeholder:text-slate-500" />
                </div>

                {/* Custom Date Selector */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarIcon size={18} className="text-blue-400" />
                    <label className="text-sm font-medium text-slate-300">Select Available Date</label>
                  </div>
                  
                  {/* Horizontal Scrollable Ribbon */}
                  <div className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar snap-x">
                    {availableDates.map((date, index) => {
                      const dateString = date.toISOString().split("T")[0];
                      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                      const dayNumber = date.getDate();
                      const monthName = date.toLocaleDateString('en-US', { month: 'short' });
                      const isSelected = formData.date === dateString;

                      return (
                        <button
                          key={index}
                          onClick={() => setFormData({ ...formData, date: dateString })}
                          className={cn(
                            "flex flex-col items-center justify-center min-w-[80px] p-3 rounded-2xl border transition-all snap-start",
                            isSelected 
                              ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/20" 
                              : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/10"
                          )}
                        >
                          <span className="text-xs uppercase tracking-wider mb-1 opacity-80">{dayName}</span>
                          <span className="text-2xl font-bold">{dayNumber}</span>
                          <span className="text-xs opacity-80">{monthName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <Button variant="outline" className="flex-1 h-14" onClick={prevStep}>Back</Button>
                  <Button className="flex-[2] h-14" onClick={nextStep} disabled={!formData.name || !formData.date || !formData.phone}>
                    Review Booking
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Checkout Preview */}
            {step === 3 && (
              <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
                  <h3 className="text-lg font-bold text-white mb-4">Booking Summary</h3>
                  
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-slate-400">Date</span>
                    <span className="text-white font-medium">
                      {formData.date ? new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : ''}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-slate-400">Service</span>
                    <span className="text-white font-medium">{SERVICES.find(s => s.id === formData.serviceId)?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-slate-400">Vehicle</span>
                    <span className="text-white font-medium">{VEHICLE_TYPES.find(v => v.id === formData.vehicleId)?.name}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-xl font-bold text-white">Total Amount</span>
                    <span className="text-2xl font-bold text-blue-400">${totalPrice}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 h-14" onClick={prevStep}>Back</Button>
                  <Button className="flex-[2] h-14 bg-blue-600 hover:bg-blue-500 text-white border-0" onClick={handlePayment}>
                    Confirm & Pay <CreditCard className="ml-2" size={20} />
                  </Button>
                </div>
                <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1">
                  Secure payment processing.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}