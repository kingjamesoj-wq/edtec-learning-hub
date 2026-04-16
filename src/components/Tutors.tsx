import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tutors: React.FC = () => {
  const tutors = [
    {
      name: "Dr. Sarah Adebayo",
      subject: "Mathematics & Physics",
      rating: 4.9,
      students: 120,
      location: "Lagos / Online",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Mr. Ibrahim Musa",
      subject: "Chemistry & Biology",
      rating: 4.8,
      students: 85,
      location: "Abuja / Online",
      image: "https://i.pravatar.cc/150?u=ibrahim"
    },
    {
      name: "Mrs. Ngozi Okafor",
      subject: "English & Literature",
      rating: 5.0,
      students: 200,
      location: "Port Harcourt / Online",
      image: "https://i.pravatar.cc/150?u=ngozi"
    }
  ];

  return (
    <section id="tutors" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Expert Tutors at Your <span className="text-blue-600">Fingertips</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl"
            >
              We vet every tutor in our network through a rigorous screening process to ensure only the highest quality educators reach our students.
            </motion.p>
          </div>
          <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold">
            Join as a Tutor
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tutors.map((tutor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <img src={tutor.image} alt={tutor.name} className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-50" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{tutor.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{tutor.subject}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-slate-700">{tutor.rating}</span>
                    <span className="text-sm text-slate-400 ml-1">({tutor.students} students)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-sm">{tutor.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Award className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-green-600 font-medium italic">Verified Credentials</span>
                </div>
              </div>

              <Button variant="outline" className="w-full h-12 border-2 border-slate-100 rounded-xl hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100 font-semibold transition-all">
                View Full Profile
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Background Checked</h4>
              <p className="text-sm text-slate-500">Every tutor is thoroughly vetted.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Qualified Experts</h4>
              <p className="text-sm text-slate-500">Only top performers from universities.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Satisfaction Policy</h4>
              <p className="text-sm text-slate-500">First lesson satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutors;