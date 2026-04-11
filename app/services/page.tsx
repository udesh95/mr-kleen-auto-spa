import { Droplets, Wind, Sparkles, Zap, Gauge, CarFront, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fetchStrapiAPI } from "@/lib/strapi";

const iconMap: Record<string, any> = {
  "droplets": Droplets,
  "wind": Wind,
  "sparkles": Sparkles,
  "zap": Zap,
  "car-front": CarFront,
  "shield-check": ShieldCheck,
}

/*const services = [
  { icon: Droplets, title: "Exterior Wash", c_price: "$6.99",ss_price: "&14.99", ls_price: "$17.99", desc: "Hand wash, wheel cleaning, spray wax and tire shine." },
  { icon: Wind, title: "Super Wash", c_price: "$27.99",ss_price: "$30.99", ls_price: "$34.99", desc: "Tyre shine, spray wax, air freshner, dash dressing" },
  { icon: Sparkles, title: "Platinum Wash (The Works)", c_price: "$31.99",ss_price: "$33.99", ls_price: "$35.99", desc: "All in super wash, door panels wiped & dressed, cup holder wiped & dressed" },
  { icon: ShieldCheck, title: "Hand Wax", c_price: "$45",ss_price: "$70", ls_price: "$60", desc: "Super wash included" }, // Imported icon assumed
  { icon: Zap, title: "Interior Detailing", c_price: "$139",ss_price: "$149", ls_price: "$159", desc: "Extra fee may be required for excessive interior dirt." },
  { icon: CarFront, title: "Exterior Detailing (Buff & Wax)", c_price: "$139",ss_price: "$149", ls_price: "$159", desc: "Remove swirls and scratches for perfect paint." },
  { icon: CarFront, title: "Showroom Detailing (Inside & Out)", c_price: "$229",ss_price: "$239", ls_price: "$249", desc: "Extra fee may be required for excessive interior dirt. *****ENGINE INCLUDED*****" },
];*/

export default async function ServicesPage() {
  // 1. Fetch data from Strapi
  // ?populate=* ensures we get related data like images if needed
  const response = await fetchStrapiAPI("/services", {populate:"*"});
  // Strapi v4 returns data inside a 'data' array, and fields inside 'attributes'
  const services = response?.data || [];
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Premium Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">From quick washes to full restoration, we offer a range of services tailored to your vehicle's needs.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service: any) => {
            console.log(service)
            // Extract Strapi attributes
            const { title, desc, c_price, ss_price, ls_price, iconName } = service;
            
            // Resolve the correct icon, fallback to Sparkles
            const IconComponent = iconMap[iconName] || Sparkles;
          
          return (
            <div key={service.id} className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <IconComponent size={24} />
                </div>
                <div>
                  <div>Car</div>
                  <span className="text-xl font-bold text-white">${c_price}</span>
                </div>
                <div>
                  <div>Small SUVs</div>
                  <span className="text-xl font-bold text-white">${ss_price}</span>
                </div>
                <div>
                  <div>Large SUVs</div>
                  <span className="text-xl font-bold text-white">${ls_price}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-slate-400 mb-6 text-sm">{desc}</p>
              <Button className="w-full" variant="outline">Book Service</Button>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  );
}