import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, BookOpenCheck, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <BookOpenCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">EDTEC</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Nigeria's leading educational service provider. Dedicated to simplifying exams, tutoring, and international study for students everywhere.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["WAEC Enrollment", "NECO Registration", "Find a Tutor", "Online Lessons", "Coding Bootcamp"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              {["About Us", "Contact Center", "FAQ", "Blog & Articles", "Terms of Service", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-slate-400">9, Osatohanmwen Uhunamure street off NDDC road Ulemon, Oredo Quarters, Benin city Edo state, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:07088748362" className="text-slate-400 hover:text-blue-500 transition-colors">07088748362</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="https://wa.me/2349049832242" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">09049832242 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-slate-400">info@edtec.com.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} EDTEC Educational Services. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-slate-500 text-sm">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;