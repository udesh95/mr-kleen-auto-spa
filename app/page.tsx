import Hero from "@/components/home/Hero";
import { Sparkles, ShieldCheck, Clock, Star } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Sparkles, title: "Ceramic Coating", desc: "Long-lasting protection and shine." },
  { icon: ShieldCheck, title: "Paint Protection", desc: "Guard against scratches and chips." },
  { icon: Clock, title: "Express Service", desc: "Premium wash in under 30 minutes." },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      
      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="glass glass-hover rounded-2xl p-8 border border-white/5">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                  <f.icon />
                </div>
                <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
                <p className="text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900/50 py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-12 md:flex-row items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Why Choose Mr.Kleen?</h2>
              <p className="text-slate-400">
                We combine eco-friendly products with cutting-edge technology to deliver a showroom shine every time. Our certified technicians treat every vehicle as if it were their own.
              </p>
              <ul className="space-y-4">
                {["100% Satisfaction Guarantee", "Eco-Friendly Products", "Certified Technicians"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs">✓</div>
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden glass border border-white/10 flex items-center justify-center">
             <div className="text-slate-600 font-mono"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold md:text-4xl mb-6">Ready for a Showroom Shine?</h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who trust Mr.Kleen for their auto detailing needs.</p>
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                Book Appointment Now
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20" />
          </div>
        </div>
      </section>
    </div>
  );
}