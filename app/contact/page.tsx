import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-slate-400 mb-8">Have questions about our packages or need a custom quote? Reach out to us.</p>
            
            <div className="space-y-6">
              {[
                { icon: MapPin, text: "3145 N Cicero Ave Chicago, IL 60641" },
                { icon: Phone, text: "(773) 917-3300" },
                { icon: Mail, text: "hello@mrkleen.com" },
                { icon: Clock, text: "Mon-Sat: 7am - 6.30pm | Sun: 7.30am - 5pm" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                    <item.icon size={20} />
                  </div>
                  <span className="text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 w-full rounded-2xl glass border border-white/10 flex items-center justify-center bg-slate-900">
              <span className="text-slate-500">Google Map Embed</span>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Name</label>
                  <input className="w-full rounded-xl bg-slate-950/50 border border-white/10 p-3 text-white focus:border-blue-500 outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Phone</label>
                  <input className="w-full rounded-xl bg-slate-950/50 border border-white/10 p-3 text-white focus:border-blue-500 outline-none" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Email</label>
                <input type="email" className="w-full rounded-xl bg-slate-950/50 border border-white/10 p-3 text-white focus:border-blue-500 outline-none" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea className="w-full rounded-xl bg-slate-950/50 border border-white/10 p-3 text-white focus:border-blue-500 outline-none h-32" placeholder="How can we help?" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}