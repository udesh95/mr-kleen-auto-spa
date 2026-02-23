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
              At Mr.Kleen Auto Spa, we believe your vehicle is more than just a way to get from A to B—it’s an investment and a reflection of you. Since opening our doors in 2017, we’ve dedicated ourselves to the art of the shine.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We aren't your typical "in-and-out" wash. By combining cutting-edge technology with a meticulous, spa-like touch, we ensure every curve and corner of your car receives the attention it deserves. From daily drivers to luxury imports, we treat every vehicle that enters our bay as if it were our own. 
            </p>
          </div>
          <div className="flex-1 h-[300px] w-full glass rounded-2xl border border-white/10 flex items-center justify-center">
             {/*<span className="text-slate-600 font-mono"></span>*/}
             <div className="flex-1 relative h-[300px] md:h-[350px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20">
            <Image 
              src="/about-image.png" 
              alt="Mr.Kleen team detailing a luxury car" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
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