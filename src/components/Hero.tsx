import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#F8FAFC]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6 border border-blue-100"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Empowering Education in Africa
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight md:leading-tight lg:leading-tight mb-6"
            >
              Your Ultimate Hub for <br />
              <span className="text-blue-600 italic">Academic Excellence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Enroll for WAEC/NECO, outsource the best tutors, learn coding, and process your international study applications all in one place.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-2xl group transition-all duration-300 shadow-lg shadow-blue-200">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="h-14 px-8 border-2 border-slate-200 hover:bg-slate-50 text-slate-700 text-lg font-semibold rounded-2xl transition-all duration-300">
                Find a Tutor
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-8"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-600">Trusted by 2,000+ students</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8addf9f6-936b-4b11-bdb7-ca641b162c1e/hero-students-b1f067a8-1776362444687.webp" 
                alt="Students studying" 
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
            
            {/* Stats Badge 1 */}
            <div className="absolute -top-8 -left-8 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-3 animate-bounce">
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Accredited</p>
                <p className="text-sm font-bold text-slate-900">Official Partners</p>
              </div>
            </div>

            {/* Stats Badge 2 */}
            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:flex items-center gap-3 animate-pulse">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <div className="w-6 h-6 flex items-center justify-center">🎓</div>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Success Rate</p>
                <p className="text-sm font-bold text-slate-900">98% Exam Pass</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;