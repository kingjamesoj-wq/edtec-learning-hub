import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tutors from "./components/Tutors";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-3xl bg-blue-50/50 border border-blue-50"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Secured & Verified</h3>
                <p className="text-slate-600">All registrations are processed through official channels with full data security.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-8 rounded-3xl bg-blue-50/50 border border-blue-50"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Guaranteed</h3>
                <p className="text-slate-600">Our tutors are top-tier graduates and seasoned professionals in their fields.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-8 rounded-3xl bg-blue-50/50 border border-blue-50"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Support</h3>
                <p className="text-slate-600">We are always available to guide you through your educational journey and challenges.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <Services />
        <Tutors />

        {/* Call to Action Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-[3rem] overflow-hidden relative">
              {/* Patterns */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20" />
              
              <div className="relative z-10 py-16 px-8 md:px-16 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Success Story?</h2>
                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                  Join thousands of students who have achieved their dreams through EDTEC. Get started today and see the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="h-16 px-10 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-lg">
                    Begin Enrollment
                  </button>
                  <button className="h-16 px-10 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                    Contact Counselor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;