import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Founded in 2024, Mr.Kleen Auto Spa began with a simple mission: to provide a car care experience that matches the precision and passion of automotive enthusiasts. 
            </p>
            <p className="text-slate-400 leading-relaxed">
              We aren't just a car wash; we are preservationists. Using only pH-neutral soaps, microfiber technology, and filtered water, we ensure your vehicle leaves our care looking better than the day you bought it.
            </p>
          </div>
          <div className="flex-1 h-[300px] w-full glass rounded-2xl border border-white/10 flex items-center justify-center">
             <span className="text-slate-600 font-mono"></span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-12 mb-24">
          {[
            { label: "Cars Detailed", value: "5k+" },
            { label: "Happy Clients", value: "3.5k+" },
            { label: "Years Experience", value: "10+" },
            { label: "Team Members", value: "25" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}