import { Car, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Car className="text-blue-500" />
              <span>Mr.<span className="text-blue-500">Kleen</span></span>
            </div>
            <p className="text-slate-400 text-sm">
              Premium auto detailing services designed to keep your vehicle looking brand new. Drive clean, drive confident.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>3145 N Cicero Ave</li>
              <li>Chicago, IL 60614</li>
              <li>(773) 917-3300</li>
              <li>hello@mrkleen.com</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="rounded-full bg-white/5 p-2 text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Mr.Kleen Auto Spa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}