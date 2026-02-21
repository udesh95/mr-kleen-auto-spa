import { Droplets, Wind, Sparkles, Zap, Gauge, CarFront } from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
  { icon: Droplets, title: "Exterior Wash", price: "$35", desc: "Hand wash, wheel cleaning, and tire shine." },
  { icon: Wind, title: "Interior Detailing", price: "$85", desc: "Vacuum, leather conditioning, and glass cleaning." },
  { icon: Sparkles, title: "Full Detail Package", price: "$150", desc: "Complete interior and exterior deep clean." },
  { icon: ShieldCheck, title: "Ceramic Coating", price: "$599", desc: "3-year protection against elements." }, // Imported icon assumed
  { icon: Zap, title: "Engine Bay Clean", price: "$65", desc: "Degreasing and dressing of engine components." },
  { icon: CarFront, title: "Paint Correction", price: "$250", desc: "Remove swirls and scratches for perfect paint." },
];

import { ShieldCheck } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Premium Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">From quick washes to full restoration, we offer a range of services tailored to your vehicle's needs.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <service.icon size={24} />
                </div>
                <span className="text-xl font-bold text-white">{service.price}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-slate-400 mb-6 text-sm">{service.desc}</p>
              <Button className="w-full" variant="outline">Book Service</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}