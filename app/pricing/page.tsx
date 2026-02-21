import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Exterior Wash",
    car_price: "6.99",
    small_suv_price: "14.99",
    large_suv_price: "17.99",
    features: ["Hand Wash", "Wheel Cleaning", "Tire Dressing", "Spray wax"],
  },
  {
    name: "Super Wash",
    car_price: "25.99",
    small_suv_price: "28.99",
    large_suv_price: "32.99",
    features: ["Everything in Basic", "Interior Vacuum", "Dash Dressing", "Spray Wax", "Air Freshner"],
  },
  {
    name: "Platinum Wash",
    car_price: "29.99",
    small_suv_price: "31.99",
    large_suv_price: "33.99",
     popular: true,
    features: ["Everything in Super Wash", "Door panels Wiped & Dressed", "Cup Holder Wiped & Dressed"],
  },
];

export default function PricingPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-slate-400">Choose the perfect package for your vehicle.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={cn(
                "relative rounded-3xl p-8 border backdrop-blur-md flex flex-col",
                plan.popular 
                  ? "bg-slate-900/80 border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-10" 
                  : "bg-slate-900/40 border-white/10 hover:border-white/20"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-medium text-slate-300 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.car_price}</span>
                <span className="text-slate-500">/Car</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.small_suv_price}</span>
                <span className="text-slate-500">/Small Suvs</span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.large_suv_price}</span>
                <span className="text-slate-500">/Large Suvs</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? "primary" : "outline"} className="w-full">
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}